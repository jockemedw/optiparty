import { z } from "zod";
import { componentScore } from "./calc";

export const SourceSchema = z.object({
  title: z.string().min(1),
  url: z.url(),
});

/** En delkomponent: en valkompass-/sakfråga med partiets validerbara
 *  inriktning, poäng enligt protokollets frågeankare och vikt inom dimensionen. */
export const ComponentSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  question: z.string().min(10),
  origin: z.string().min(3),
  position: z.string().min(10),
  score: z.number().min(0).max(100),
  weight: z.number().positive(),
  sources: z.array(SourceSchema).min(1),
});

export const DimensionSchema = z.object({
  id: z.string().regex(/^[a-z]+$/),
  name: z.string().min(1),
  shortDescription: z.string().min(1),
  grounding: z.string().min(1),
  measures: z.string().min(1),
});

export const ScoreEntrySchema = z.object({
  score: z.number().min(0).max(100),
  motivation: z.string().min(20),
  sources: z.array(SourceSchema).min(1),
  components: z.array(ComponentSchema).min(1).optional(),
});

export const PartySchema = z.object({
  id: z.string().regex(/^[a-z]+$/),
  name: z.string().min(1),
  abbreviation: z.string().min(1),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  scores: z.record(z.string(), ScoreEntrySchema),
  feasibility: z.object({
    factor: z.number().min(0).max(1),
    motivation: z.string().min(20),
    sources: z.array(SourceSchema).min(1),
  }),
});

export const DatasetSchema = z
  .object({
    assessmentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    dimensions: z.array(DimensionSchema).min(1),
    parties: z.array(PartySchema).min(1),
  })
  .superRefine((data, ctx) => {
    const dimIds = new Set(data.dimensions.map((d) => d.id));
    for (const party of data.parties) {
      const scoreIds = new Set(Object.keys(party.scores));
      for (const id of dimIds) {
        if (!scoreIds.has(id)) {
          ctx.addIssue({ code: "custom", message: `Partiet ${party.id} saknar poäng för dimensionen ${id}` });
        }
      }
      for (const id of scoreIds) {
        if (!dimIds.has(id)) {
          ctx.addIssue({ code: "custom", message: `Partiet ${party.id} har poäng för okänd dimension ${id}` });
        }
      }
      for (const [dimId, entry] of Object.entries(party.scores)) {
        if (entry.components) {
          const computed = componentScore(entry.components);
          if (Math.abs(computed - entry.score) > 0.5) {
            ctx.addIssue({
              code: "custom",
              message: `Partiet ${party.id}, dimensionen ${dimId}: lagrad poäng ${entry.score} avviker från komponentberäknad ${computed.toFixed(2)} (tolerans ±0,5)`,
            });
          }
        }
      }
    }
  });

export type Source = z.infer<typeof SourceSchema>;
export type ScoreComponent = z.infer<typeof ComponentSchema>;
export type Dimension = z.infer<typeof DimensionSchema>;
export type ScoreEntry = z.infer<typeof ScoreEntrySchema>;
export type Party = z.infer<typeof PartySchema>;
export type Dataset = z.infer<typeof DatasetSchema>;
