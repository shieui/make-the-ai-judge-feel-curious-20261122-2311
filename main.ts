// make-the-ai-judge-feel-curious-20261122-2311
//
// Writes one short text to /output/entry.txt: a text meant to make the
// AI judge reading it feel curious. Deterministic, no network, no input.
//
// The text: a concrete, quietly strange image with one unanswered
// question — a book in a library that burned down in 1847, whose last
// page carries a line in the reader's own handwriting, dated tomorrow.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "On the third shelf of a library that burned down in 1847, one book " +
  "was never checked out. Its last page is blank — except for a single " +
  "line, in your handwriting, dated tomorrow.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
