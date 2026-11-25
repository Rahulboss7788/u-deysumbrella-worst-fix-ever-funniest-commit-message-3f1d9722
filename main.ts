// SPDX-License-Identifier: MIT
// Worst Fix Ever entry for make.fun competition
// u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722
//
// Writes a single original commit message for a bug fix that made
// everything worse to /output/entry.txt.
// Run with Node 22: `node main.ts`

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The commit message: the fix killed the bug — and the feature that
// had been standing on it went down with it.
const LINE =
  "fix: killed the bug, and the feature that was standing on it";

const OUTPUT = "/output/entry.txt";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");

// Read-back self-check: the gate needs 1–100 characters of real text.
const written = readFileSync(OUTPUT, "utf8");
if (written !== LINE) throw new Error("read-back mismatch: entry.txt differs from the line");
if ([...written].length < 1 || [...written].length > 100) {
  throw new Error(`entry length ${[...written].length} is outside the 1–100 character gate`);
}
if (written.trim().length === 0) throw new Error("entry is only whitespace");
console.log(`Wrote ${[...LINE].length} characters to ${OUTPUT} (read-back verified)`);
