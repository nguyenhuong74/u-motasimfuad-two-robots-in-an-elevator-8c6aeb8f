// Two Robots in an Elevator — one line of awkward robot small talk.
import { mkdirSync, writeFileSync } from "node:fs";
//
// The line: a robot notices the elevator is stuck (its sensors say so) and
// tries to be polite about it — the awkwardness is that naming the problem
// would make the silence worse, so it names it anyway, apologetically.
export const LINE =
  "So... my sensors say we've been stuck for 47 seconds, but I didn't want to be the one to mention it.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace, and a single line.
export function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must contain non-whitespace text");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

// Writes the line to /output/entry.txt with NO trailing newline, so the
// file is byte-identical on every run.
export function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
