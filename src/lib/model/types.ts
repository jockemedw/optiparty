import { z } from "zod";
import { bankScore } from "./calc";

export const SourceSchema = z.object({
  title: z.string().min(1),
  url: z.url(),
});

/** En fråga i dimensionens frågebank: det partioberoende (protokoll v1.1 §B–§C, §E). */
export const QuestionBankEntrySchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  question: z.string().min(10),
  polarity: z.string().min(5),
  origin: z.string().min(3),
  weight: z.number().positive(),
});

/** En K2-uteslutning eller annan avgränsning: vad som inte ingår och varför. */
export const ExclusionSchema = z.object({
  topic: z.string().min(3),
  reason: z.string().min(10),
});

/** Frågeankarna i protokollets §C: grov skala avsiktligt — precisionen uppstår i aggregeringen. */
const anchorScore = z.union([z.literal(0), z.literal(25), z.literal(50), z.literal(75), z.literal(100)]);

/** Partiets svar på en bankfråga: endast det partispecifika. */
export const PartyComponentSchema = z.object({
  componentId: z.string().regex(/^[a-z0-9-]+$/),
  score: anchorScore,
  position: z.string().min(10),
  sources: z.array(SourceSchema).min(1),
});

export const DimensionSchema = z.object({
  id: z.string().regex(/^[a-z]+$/),
  name: z.string().min(1),
  shortDescription: z.string().min(1),
  grounding: z.string().min(1),
  measures: z.string().min(1),
  boundary: z.string().min(20),
  exclusions: z.array(ExclusionSchema),
  questionBank: z.array(QuestionBankEntrySchema).min(5).optional(), // min 5 = K5
});

export const ScoreEntrySchema = z.object({
  score: z.number().min(0).max(100),
  motivation: z.string().min(20),
  sources: z.array(SourceSchema).min(1),
  components: z.array(PartyComponentSchema).min(1).optional(),
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
    const dims = new Map(data.dimensions.map((d) => [d.id, d]));
    for (const party of data.parties) {
      const scoreIds = new Set(Object.keys(party.scores));
      for (const id of dims.keys()) {
        if (!scoreIds.has(id)) {
          ctx.addIssue({ code: "custom", message: `Partiet ${party.id} saknar poäng för dimensionen ${id}` });
        }
      }
      for (const id of scoreIds) {
        if (!dims.has(id)) {
          ctx.addIssue({ code: "custom", message: `Partiet ${party.id} har poäng för okänd dimension ${id}` });
        }
      }
      for (const [dimId, entry] of Object.entries(party.scores)) {
        const bank = dims.get(dimId)?.questionBank;
        if (bank) {
          if (!entry.components) {
            ctx.addIssue({ code: "custom", message: `Partiet ${party.id}, dimensionen ${dimId}: migrerad dimension utan komponenter` });
            continue;
          }
          const bankIds = new Set(bank.map((q) => q.id));
          const compIds = new Set(entry.components.map((c) => c.componentId));
          for (const id of bankIds) {
            if (!compIds.has(id)) {
              ctx.addIssue({ code: "custom", message: `Partiet ${party.id}, dimensionen ${dimId}: saknar komponent för bankfrågan ${id}` });
            }
          }
          for (const id of compIds) {
            if (!bankIds.has(id)) {
              ctx.addIssue({ code: "custom", message: `Partiet ${party.id}, dimensionen ${dimId}: komponenten ${id} finns inte i frågebanken` });
            }
          }
          if (entry.components.length !== compIds.size) {
            ctx.addIssue({ code: "custom", message: `Partiet ${party.id}, dimensionen ${dimId}: dubblerade komponent-id:n` });
          }
          const computed = bankScore(bank, entry.components);
          if (Math.abs(computed - entry.score) > 0.5) {
            ctx.addIssue({
              code: "custom",
              message: `Partiet ${party.id}, dimensionen ${dimId}: lagrad poäng ${entry.score} avviker från bankberäknad ${computed.toFixed(2)} (tolerans ±0,5)`,
            });
          }
        } else if (entry.components) {
          ctx.addIssue({ code: "custom", message: `Partiet ${party.id}, dimensionen ${dimId}: komponenter utan frågebank i dimensionen` });
        }
      }
    }
  });

export type Source = z.infer<typeof SourceSchema>;
export type QuestionBankEntry = z.infer<typeof QuestionBankEntrySchema>;
export type Exclusion = z.infer<typeof ExclusionSchema>;
export type PartyComponent = z.infer<typeof PartyComponentSchema>;
export type Dimension = z.infer<typeof DimensionSchema>;
export type ScoreEntry = z.infer<typeof ScoreEntrySchema>;
export type Party = z.infer<typeof PartySchema>;
export type Dataset = z.infer<typeof DatasetSchema>;
