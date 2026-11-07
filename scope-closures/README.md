# Session 16 · Scope, Hoisting & Closures

Lesson code for Session 16. Open any `.html` file in Chrome, then press F12 and choose Console to see the output.

| File | Slide | What it shows |
| --- | --- | --- |
| `demos/01-global-vs-local.html` | 4 | Global vs local scope, and why globals are risky |
| `demos/02-block-scope.html` | 5 | Block scope (`let`/`const` vs `var`), the scope chain, shadowing |
| `demos/03-hoisting.html` | 6 | Hoisting of `var`, `let`/`const` (the TDZ) and functions |
| `demos/04-first-class-functions.html` | 7 | Storing, passing and returning functions; higher-order functions |
| `demos/05-closures.html` | 8 | Closures: a counter with private state, `makeMultiplier` explained |
| `demos/06-bug-hunt.html` | 9 | Three scope and hoisting bugs to predict, run and fix live |
| `demos/07-slider-that-remembers.html` | 10 | Session 14's slider rule as a closure, plus a higher-order `repeat` |
| `practice/score-keeper.html` | 11 | Practice starter |
| `practice/score-keeper-solution.html` | 11 | Practice solution |

Demos `01` to `05` and the solution have commented-out lines that throw an error on purpose. Uncomment one to see the error in the console, then comment it out again: an error stops everything below it.

Demo `06` runs with its bugs in place. The fix for each bug is written in the comments under it.

Branch: `lesson/scope-closures`
