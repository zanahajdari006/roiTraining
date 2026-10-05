# Responsive Media & CSS Grid: lesson pack

For students who know basic HTML and CSS (including the viewport meta tag and simple media queries) and are still learning responsive design and layout.

## What's in this folder

| File | What it is |
|---|---|
| Slide deck (claude.ai artifact) | 45 slides with short speaker notes. Present it from the browser or export it to PDF/PPTX from its Share menu. |
| `teaching-script-part1.md` | Full script for slides 1–21: what to say, what to demo, questions with expected answers, and common confusions |
| `teaching-script-part2.md` | Full script for slides 22–45 |
| `demos/01-responsive-image.html` | Overflowing image → `max-width: 100%` / `height: auto`, and `width` vs `max-width` |
| `demos/02-srcset-sizes.html` | srcset + sizes. The image shows which file was chosen, and a helper prints `currentSrc` |
| `demos/03-video.html` | Responsive video, attributes, muted autoplay hero, `<source>` fallback, iframe + `aspect-ratio` |
| `demos/04-grid-basics.html` | `display: grid`, columns, `fr`, `repeat()`, rows, `gap` (uncomment line by line) |
| `demos/05-grid-placement.html` | Line numbers, `grid-column` / `grid-row`, `span`, `1 / -1` news layout |
| `demos/06-grid-areas.html` | `grid-area` + `grid-template-areas`, with "try breaking it" comments |
| `demos/07-responsive-layout.html` | Final progressive build: mobile → tablet → desktop + responsive gallery |
| `exercises/exercises.md` | Requirements, expected results, hints and solutions for all 3 exercises |
| `exercises/ex1-*.html` … `ex3-*.html` | Starter and solution file for each exercise |

All files are plain HTML with the CSS in a `<style>` tag. Double-click to open them, or use VS Code's **Live Server** extension so the page reloads on save. You need internet access, because images come from `picsum.photos` / `placehold.co` and the sample video from MDN's public CC0 media. To work offline, swap in local files.

In `demos/03-video.html`, replace `VIDEO_ID` with a real YouTube video ID (YouTube → Share → Embed).

## Suggested timing

The material is designed for **two sessions** (e.g. Monday and Wednesday):

| Session | Slides | Content | Time |
|---|---|---|---|
| 1 | 1–21 | Responsive images & video + Exercise 1 | ~80 min |
| 2 | 22–45 | CSS Grid + Exercise 2 + start of Exercise 3 | ~110 min |

**Running short on time?** These cuts lose the least:
- Slide 12 (1x/2x): mention it in one sentence.
- Slide 17 (`<source>` formats): show it in the demo only.
- Slide 42's auto-fit bonus: skip it.
- Exercise 3: set it as homework after a 5-minute walkthrough of the starter file.

## Prerequisites covered by the recap slide
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- `@media (min-width: …)` syntax
- `%` vs `vw`

Flexbox isn't required. The script mentions it only as an optional comparison if your class has already seen it.

## To fill in
- The wrap-up slide (45) and the end of `teaching-script-part2.md` contain **[next topic]**. Replace it with your next session's topic.
