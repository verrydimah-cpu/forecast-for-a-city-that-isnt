import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Atlantis: sunny, bone-dry, high of 24° all week, 0% chance of flooding — the mayor has learned absolutely nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
