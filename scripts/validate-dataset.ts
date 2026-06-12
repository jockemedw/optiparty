import { DatasetSchema } from "../src/lib/model/types";

async function main() {
  const { dataset } = await import("../src/data/dataset");
  const result = DatasetSchema.safeParse(dataset);
  if (!result.success) {
    console.error("DATASETVALIDERING MISSLYCKADES:");
    for (const issue of result.error.issues) {
      console.error(`  ${issue.path.join(".")}: ${issue.message}`);
    }
    process.exit(1);
  }
  console.log(
    `Dataset OK: ${result.data.parties.length} partier × ${result.data.dimensions.length} dimensioner, daterat ${result.data.assessmentDate}.`
  );
}

main();
