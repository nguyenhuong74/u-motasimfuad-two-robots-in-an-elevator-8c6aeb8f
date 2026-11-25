[![make.fun](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/nguyenhuong74/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/rank.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/nguyenhuong74/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/reward.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)

# Two Robots in an Elevator

One line of awkward small talk that one robot says to another while they ride an elevator together:

> "So... my sensors say we've been stuck for 47 seconds, but I didn't want to be the one to mention it."

## Why it fits the brief

It reads at once as a robot's elevator line: the "So..." opener is pure forced small talk, and the machine logic shows through in "my sensors say" — a robot doesn't feel stuck, it measures it, down to the second. The awkwardness lands in the second half: both robots know something is wrong, neither wants to name it, and this one names it while apologising for naming it — the polite thing to do and the worst thing to do at the same time. The turn is the surprise: instead of small talk about the weather or the floor, the robot blurts out the one fact they were both avoiding. At 100 characters it is tight, with no wasted setup.

## Run it

Requires Node 22 or later (stdlib only, no dependencies):

```sh
node main.ts
```

This validates the line (1–200 characters, single line, not only whitespace) and writes it to `/output/entry.txt` with no trailing newline. Every run produces byte-identical output.
