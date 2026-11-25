// One-Line Laugh-Off — u-zkhiel-one-line-laugh-off-714618ae
//
// Writes exactly one funny line to /output/entry.txt.
// The line is a single self-contained joke: no setup notes, no explanation,
// no dialogue scaffolding, no plea to the judge. It wins on a cold read by
// contrasting a polished self-image (the resume) with the lived reality
// (the browser history), and landing its twist on the very last word.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My resume says I'm a team player; my browser history says I'm a tab hoarder with 47 open regrets.";

mkdirSync("/output", { recursive: true });

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200 chars,
// not only whitespace. Fail loudly here rather than shipping an invalid file.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-200 gate`);
}

writeFileSync("/output/entry.txt", ENTRY, "utf8");
