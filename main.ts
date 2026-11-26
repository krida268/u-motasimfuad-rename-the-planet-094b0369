// Rename the Planet — one funny new name for a planet, plus the why.
// Entry: Saturn becomes "The Hoarder" — it kept every ring it ever
// owned and still collects moons (146 and counting, none labelled).
// The joke leans on Saturn's own traits: its rings and its huge,
// ever-growing moon count. Written from scratch for this bounty.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Saturn is now The Hoarder: it kept every ring it ever owned, still collects moons \u2014 146 and counting, none of them labelled.";

// Gate guard: the sealed scorer needs UTF-8 text of 1–200 characters,
// not only white space, in a single line with no trailing newline.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the 1–200 character gate: ${ENTRY.length}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
