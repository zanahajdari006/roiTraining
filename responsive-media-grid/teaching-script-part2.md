# Teaching script, Part 2: CSS Grid Layout

Slides 22–45 · about **110 minutes** including Exercise 2 and the start of Exercise 3 (see the README for cuts if you have 90 minutes)

Same format as Part 1: **Say**, **Demonstrate**, **Ask / Expected answer**, **Common confusion**, **Transition**.

**Before class**
- Open `demos/04` to `demos/07` in VS Code and the browser.
- Practise turning on the Chrome grid overlay: DevTools → Elements → click the small **grid** badge next to an element with `display: grid`. In the **Layout** panel, tick "Show line numbers" and "Show area names".

---

## Slide 22 · Section: CSS Grid · ⏱ 2 min

**Say**
> *(If this is a new session, start by repeating the Part 1 takeaways in 60 seconds: "Images fit their box with max-width; srcset picks the file. Today we build the boxes.")*
>
> "Let me draw something." *(Draw a newspaper front page on the board: a wide header, a big story on the left, two small stories on the right, a footer.)* "If I asked you to build this with what you know right now, how would you do it?" *(Let them suggest widths, floats or inline-block for about 30 seconds.)* "It's painful, right? You'd be calculating percentages and fighting margins. With Grid you just *describe* this picture: three columns, the header goes across all of them, done."

**Demonstrate**: the whiteboard sketch.

**Ask**: "How would you put two boxes side by side with what you know now?"
**Expected answer**: Probably `display: inline-block` with percentage widths, or floats. Any answer is fine; the point is that it's awkward.

**Common confusion**: none yet.

**Transition**: "So what exactly is Grid?"

---

## Slide 23 · What is Grid? · ⏱ 3 min

**Say**
> "Grid is a layout system built into CSS for arranging things in rows **and** columns at the same time. Think of a spreadsheet or a chessboard: every square has a row and a column. You describe the rows and columns on the parent element, and the children drop into the cells.
>
> That's what people mean by 'two-dimensional': you control both directions at once.
>
> Where do you use it? Page layouts with a header, sidebar and footer. Card grids like an online shop. Photo galleries. Dashboards. Even forms, with labels in one column and inputs in another."
>
> *(If the class has met Flexbox:)* "You may know Flexbox. It's best for one direction, like a row of buttons. Grid is best when rows and columns both matter. They work well together."

**Demonstrate**: open YouTube's home page or an online shop, turn on DevTools, and find an element with the grid badge. Many real sites use Grid.

**Ask**: "Name a website you use that looks like a grid."
**Expected answer**: YouTube home, Netflix, an Instagram profile, Amazon search results, Pinterest, and so on.

**Common confusion**: students think Grid is the same as the HTML `<table>`. Tables are for tabular **data**. Grid is for **layout**, and the HTML stays meaningful (header, main, article…).

**Transition**: "Before writing any code, two words you need to know."

---

## Slide 24 · Grid container vs grid items · ⏱ 3 min

**Say**
> "The **grid container** is the element you put `display: grid` on, the parent. The **grid items** are its **direct children**, and only its direct children.
>
> Think of a family. The parent sets the rules for its children, but the grandchildren are not directly under those rules. In this code, A, B and C are grid items. The paragraph inside C is a grandchild. It's not a grid item; it just sits inside C like normal.
>
> This trips up almost everybody at least once. You'll write a rule for some element deep inside and wonder why Grid ignores it."

**Demonstrate**: in `demos/04-grid-basics.html`, item 8 contains a `<p>`. In DevTools, show that the `<p>` is inside item 8 and doesn't get its own cell.

**Ask**: "In this code, how many grid items are there?"
**Expected answer**: Three: A, B and C. The `<p>` is inside C, so it's not an item.

**Common confusion**
- Putting `display: grid` on the items instead of the parent.
- Expecting nested elements to line up with the outer grid. If you need that, the child needs its own `display: grid`.

**Transition**: "Let's switch Grid on."

---

## Slide 25 · Step 1: display: grid · ⏱ 2 min

**Say**
> "Step one is `display: grid` on the container. Save and look." *(pause)* "Nothing happened! That's normal. We've turned the grid engine on, but we haven't told it how many columns we want. By default it makes **one** column, so the items stack just like before.
>
> But something did change. Look in DevTools: there's now a little 'grid' badge next to the container. Click it and you see the grid overlay. That overlay is your best friend for the rest of today."

**Demonstrate**
1. In `04-grid-basics.html`, comment out every line except `display: grid;` and save. It looks the same.
2. DevTools → Elements → click the **grid** badge to show the overlay.

**Ask**: "Why doesn't anything move?"
**Expected answer**: We haven't defined columns. The default grid is one column, so items stack.

**Common confusion**: "display: grid doesn't work!" It works; it just has nothing to do yet.

**Transition**: "So let's give it columns."

---

## Slide 26 · Step 2: grid-template-columns · ⏱ 4 min

**Say**
> "`grid-template-columns` is where you draw your columns. Each value is one column, so three values make three columns. Here each column is 200 pixels wide.
>
> Now watch the items. They fill the first row from left to right: 1, 2, 3. The row is full, so Grid starts a new row on its own: 4, 5, 6. We never told it how many rows. Grid creates them as needed.
>
> But there's a problem with fixed pixels. Three times 200 is 600 pixels, always. On a phone that's too wide, and on a big monitor it's a little island in the corner. We need columns that stretch."

**Demonstrate**
1. Uncomment `grid-template-columns: 200px 200px 200px;` and save.
2. Change it to `200px 200px` (two columns) and save, then `200px 200px 200px 200px` (four). Show the counting rule.
3. Back to three. Drag the window narrow: the grid overflows.

**Ask**: "I have 7 items and 3 columns. How many rows do I get?"
**Expected answer**: 3. Two full rows, plus a third row with one item.

**Common confusion**: students think they need `grid-template-rows` to make items wrap to a new line. They don't; Grid wraps automatically.

**Transition**: "To get columns that stretch, Grid gives us a new unit."

---

## Slide 27 · The fr unit · ⏱ 5 min

**Say**
> "`fr` stands for 'fraction', meaning a share of the free space. Think of a pizza. With `1fr 1fr 1fr`, Grid adds them up, 3 shares, and gives each column one share, so three equal columns that stretch with the window.
>
> `1fr 2fr 1fr` is 4 shares in total. The middle column gets 2 of them, so it's twice as wide as the others.
>
> You can mix units. With `250px 1fr`, Grid takes the fixed 250 pixels out **first**, then gives everything that's left to the `1fr` column. That's a classic sidebar layout in one line.
>
> And `repeat(3, 1fr)` is just a shortcut for `1fr 1fr 1fr`. It's handy when you have 12 columns."

**Demonstrate** (in `04-grid-basics.html`, one at a time, dragging the window after each):
1. `1fr 1fr 1fr`: the columns stretch.
2. `1fr 2fr 1fr`: the middle is double.
3. `250px 1fr`: a sidebar shape (items flow 2 per row).
4. `repeat(3, 1fr)`: same as step 1.

**Ask**: "`1fr 3fr` in an 800px container with no gap. How wide is each column?"
**Expected answer**: 800 ÷ 4 = 200, so 200px and 600px.

**Common confusion**
- `fr` is **not** a percentage. Three columns of `33.33%` plus a gap overflow the container. Three `1fr` columns with a gap fit perfectly, because fr shares the space **after** the gaps.
- Thinking `2fr` means "2 pixels".

**Transition**: "Columns are done. What about rows?"

---

## Slide 28 · Step 3: grid-template-rows · ⏱ 3 min

**Say**
> "`grid-template-rows` works exactly like columns, but for heights. `100px 200px` means row 1 is 100 pixels tall and row 2 is 200 pixels.
>
> What if there are more items than cells? With 3 columns and 2 rows we have 6 cells, but we have 9 items. Grid simply adds an extra row, called an **implicit** row, and makes it as tall as its content.
>
> In practice you often don't set rows at all. For a card grid, let the rows size themselves to the content. You set rows when the layout needs it, for example 'the header is always 80 pixels tall.'"

**Demonstrate**: uncomment `grid-template-rows: 100px 200px;` in `04-grid-basics.html` (with columns at `repeat(3, 1fr)`). Rows 1 and 2 get the heights and row 3 is automatic. Show it in the overlay.

**Ask**: "Do you always need `grid-template-rows`?"
**Expected answer**: No. Rows are created automatically and sized to their content. Use it only when you need specific heights.

**Common confusion**: setting a fixed row height and then the text overflows the box. For rows holding text, prefer `auto`.

**Transition**: "Our boxes are touching each other. Let's give them some space."

---

## Slide 29 · Step 4: gap · ⏱ 2 min

**Say**
> "`gap` puts space **between** the rows and columns. One line on the container and every item is spaced evenly. You can set them separately with `row-gap` and `column-gap`.
>
> Notice where the orange is: only between the items, never around the outside. If you want space around the edge, that's `padding` on the container.
>
> Why not use margins on each item? Because margins double up between neighbours, add unwanted space at the edges, and you have to set them on every item. With gap it's one line on the parent, and the fr units take it into account automatically."

**Demonstrate**: uncomment `gap: 24px;`. Then try `row-gap: 40px; column-gap: 8px;`. The demo gives the container an orange background so the gap is visible.

**Ask**: "Why is gap better than giving every item a margin?"
**Expected answer**: It's one property on the parent, gives no extra space at the outer edges, never doubles up, and works with fr.

**Common confusion**: old tutorials write `grid-gap`. It still works; `gap` is the modern name.

**Transition**: "So far the items have just flowed into the next free cell. To put items exactly where we want, we need to understand grid lines."

---

## Slide 30 · Lines, tracks and cells · ⏱ 4 min

**Say**
> "Here's the vocabulary. The dark lines are **grid lines**, the dividers. They're numbered starting from 1 at the left edge and 1 at the top edge.
>
> A **track** is a whole column or a whole row, the space between two neighbouring lines. The blue column here is a track.
>
> A **cell** is a single box where a row and a column cross, like the orange one. An **area** is any rectangle of cells.
>
> The key fact: 3 columns have **4** column lines. Think of a fence: 3 sections of fence need 4 posts. We place items by saying which post to start at and which post to stop at. So whenever you place something, count the posts, not the sections."

**Demonstrate**: in `04-grid-basics.html` with `repeat(3, 1fr)` and two rows, open the grid overlay and tick **Show line numbers** in the Layout panel. Point out lines 1–4 across and 1–3 down. Also point out the negative numbers DevTools shows (−1 is the last line), which we'll use soon.

**Ask**: "A grid with 4 columns and 2 rows. How many column lines and row lines?"
**Expected answer**: 5 column lines and 3 row lines.

**Common confusion**: counting columns instead of lines. This causes the off-by-one error on the next slide.

**Transition**: "Now let's use the line numbers."

---

## Slide 31 · Placing items: grid-column and grid-row · ⏱ 5 min

**Say**
> "`grid-column: 1 / 3` means start at column line 1 and stop at column line 3. Read the slash as 'to'. Between line 1 and line 3 there are **two** columns, so the item is two columns wide. `grid-row: 1 / 3` does the same downwards, so it's two rows tall. Our featured item now covers four cells.
>
> The other items don't disappear. They flow around it into the free cells.
>
> There's another way to write it: `span`. `grid-column: span 2` means 'be two columns wide, wherever you end up.' Use line numbers when you care exactly **where** it goes, and span when you only care **how big** it is."

**Demonstrate**: open `demos/05-grid-placement.html`, Part A. Change `.featured`:
1. `grid-column: 1 / 3;` gives 2 columns.
2. `1 / 4` gives full width.
3. `2 / 4` gives the right two columns (watch item 2 move into column 1).
4. `span 2` gives 2 wide, placed automatically.

Have the line-number overlay on the whole time.

**Ask**: "An item has `grid-column: 2 / 4`. Which columns does it cover?"
**Expected answer**: Columns 2 and 3 (from line 2 to line 4).

**Common confusion**
- **Off by one:** "1 / 3" doesn't mean "columns 1 to 3". It means line 1 to line 3, which is two columns.
- Forgetting the slash (`grid-column: 1 3`) makes the property invalid.

**Transition**: "Here's a real use for this."

---

## Slide 32 · Real world: a news page with a full-width top story · ⏱ 3 min

**Say**
> "News sites do this all the time: a big top story across the full width, then smaller stories in a grid underneath. The grid has 3 columns. For the top story we write `grid-column: 1 / -1`.
>
> Negative numbers count from the end, so `-1` is the **last** line. '1 / -1' means from the very first line to the very last line, in other words full width.
>
> Why not write `1 / 4`? Because if we later change to 4 columns (and we will, with media queries), `1 / 4` would stop one column short. `1 / -1` always means full width, however many columns there are."

**Demonstrate**: in `05-grid-placement.html`, Part B. Change `.news` to `repeat(4, 1fr)`. The top story still spans the whole width. Change `.top-story` to `1 / 4` to show it break, then change it back.

**Ask**: "Why is `1 / -1` safer than `1 / 4`?"
**Expected answer**: It always reaches the last line, so it keeps working when the number of columns changes.

**Common confusion**: `-1` only counts the lines you defined with `grid-template-columns`, not extra implicit ones. For normal layouts this doesn't matter.

**Transition**: "Line numbers are great for one or two items. For a whole page layout there's an even more readable way: you can name things."

---

## Slide 33 · Grid areas: draw your layout with words · ⏱ 3 min

**Say**
> "This is my favourite part of Grid. With `grid-template-areas` you literally draw your layout in your CSS, like ASCII art.
>
> Each string in quotes is **one row**. Each word inside the string is **one cell**. So this map has three rows and two columns. In the first row, 'header header': the name header fills both cells, so the header spans both columns. In the second row the sidebar is on the left and main on the right. The third row is the footer across both.
>
> Look at the shape of the text and the shape of the picture. They're the same, which is why it's so easy to read. Anyone on your team can understand this layout in two seconds."

**Demonstrate**: point between the code and the picture. No typing yet.

**Ask**: "How many rows and how many columns does this map have?"
**Expected answer**: 3 rows, 2 columns.

**Common confusion**: thinking the extra spaces used to line up the words matter. They don't; any whitespace separates the names. We line them up only so humans can read the map.

**Transition**: "So how do the elements know which name is theirs?"

---

## Slide 34 · Grid areas: the code · ⏱ 5 min

**Say** *(live-code in this order)*
> "There are two steps. First, give each item a name with `grid-area`. The header element gets the name 'header', the aside gets 'sidebar', and so on. You invent these names; they could be 'banana' if you wanted. No quotes here.
>
> I'll save now, and… nothing happens, because the names don't mean anything yet.
>
> Second, on the container, draw the map with `grid-template-areas`, using exactly the same names, this time in quotes, one string per row. Save, and everything jumps into place.
>
> Now my favourite trick. I change 'sidebar main' to 'main sidebar'…" *(save)* "…and the sidebar moves to the right. I didn't touch the HTML. The HTML order doesn't decide where things go; the map does."

**Demonstrate**: in `demos/06-grid-areas.html`:
1. Comment out the `.page` rule. Show the `grid-area` lines and that nothing happens.
2. Uncomment `.page`. Everything snaps into place.
3. Swap to `"main sidebar"`. The sidebar moves right.
4. Point out that the HTML is in a strange order on purpose (footer first!) and the layout is still correct. Add: "In real pages, keep the HTML in a logical reading order, because screen readers and keyboard users follow the HTML, not the picture."

**Ask**: "Which property goes on the container, and which goes on the items?"
**Expected answer**: `grid-template-areas` (and the columns) on the container. `grid-area` on each item.

**Common confusion**
- The name in `grid-area: header` has nothing to do with the `<header>` tag. It's just a label you choose.
- Changing `grid-template-columns` widths: the map decides **which** cells, the columns decide **how wide**. You need both.

**Transition**: "The map is powerful but strict. Break a rule and the whole thing is thrown away."

---

## Slide 35 · Grid areas: the rules · ⏱ 3 min

**Say**
> "Rule one: every row must have the **same number of cells**. If row one has two names and row two has one, the map is invalid.
>
> Rule two: areas must be **rectangles**. You can't make an L shape. Here 'a' is in three cells forming an L, which isn't allowed.
>
> Rule three: if you want an **empty cell**, write a dot.
>
> Rule four: quotes go around each row in the **map**, but **not** around the name in `grid-area`.
>
> And here's how you find these bugs: when CSS is invalid, DevTools shows the property **crossed out** with a little warning triangle. If your grid suddenly collapses into one column, look for the strikethrough."

**Demonstrate**: in `06-grid-areas.html` break each rule (the TRY comments list them). After each, open the Styles panel and point at the crossed-out property. Fix it.

**Ask**: "I want the top-left cell empty and the header only in the right column. How do I write the first row?"
**Expected answer**: `". header"`

**Common confusion**: a typo in a name (e.g. `sidbar` in the map, `sidebar` on the item). The map is valid but the item has no matching area, so Grid places it automatically, often in a weird extra row at the bottom.

**Transition**: "We now have every tool we need. Let's build a real responsive page, step by step, starting with phones."

---

## Slide 36 · Build a responsive page, step 1: mobile first · ⏱ 4 min

**Say**
> "Here's the plan for our page: header, navigation, main content, a sidebar called aside, and a footer. We'll build it **mobile first**. That means the normal CSS, outside any media query, is the phone layout, and then we **add** columns as the screen gets bigger, using `min-width` media queries.
>
> Why phones first? The phone layout is the simplest, one column, so we start simple and add complexity. It's also easier to add columns than to take them away.
>
> So the base map is just one name per row: header, nav, main, aside, footer. One column, everything stacked."

**Demonstrate**: open `demos/07-responsive-layout.html`. Show the HTML first (a `.page` div with five children), then the `grid-area` names, then the base `.page` rule. Comment out both media queries for now. Phone view: everything is stacked.

**Ask**: "Why do we start with the phone layout?"
**Expected answer**: It's the simplest (one column), it's easier to add columns than remove them, and many users are on phones.

**Common confusion**: "mobile first" means `min-width` queries (getting bigger). Writing `max-width` queries is the desktop-first approach. Mixing both in one project gets confusing fast.

**Transition**: "Now let's give tablets a second column."

---

## Slide 37 · Step 2: tablet (768px and up) · ⏱ 4 min

**Say**
> "From 768 pixels there's enough room for a sidebar. Inside the media query we change only two things: the columns, `1fr 240px` (main stretches, aside is fixed), and the map. Header and nav go across both columns, main and aside sit side by side, and the footer is across both.
>
> Notice what we did **not** write again: `display: grid` and `gap`. Those still come from the base rule. A media query only needs to override what changes."

**Demonstrate**: uncomment the 768px media query. Drag the window across 768px slowly. The aside jumps beside main. (The demo also turns the nav list horizontal with `inline-block` and makes the gallery 3 columns; mention it briefly.)

**Ask**: "Which properties didn't we have to repeat inside the media query?"
**Expected answer**: `display: grid` and `gap`. They still apply from the base rule.

**Common confusion**: copying the whole `.page` rule into the media query. It works, but it's unnecessary duplication.

**Transition**: "And on a big screen, three columns."

---

## Slide 38 · Step 3: desktop (1024px and up) · ⏱ 4 min

**Say**
> "From 1024 pixels we have room for three columns: the nav becomes a 200-pixel sidebar on the left, main stretches in the middle, and the aside stays at 240 on the right. We redraw the map with three names per row.
>
> Look at what happened to the nav. On phones and tablets it was a bar across the top. On desktop it's a sidebar. Same HTML element; we just put its name in a different place on the map.
>
> One more important detail: on a big screen **both** media queries are true. 1200 is more than 768 *and* more than 1024. So which one wins? The one that comes **later** in the file. That's the normal CSS cascade, and it's why mobile-first queries always go from small to large."

**Demonstrate**: uncomment the 1024px query. Slowly drag from about 375px to 1400px. Stop just before each breakpoint and ask the class to predict what happens next.

**Ask**: "On a 1200px screen, both queries match. Why does the desktop layout win?"
**Expected answer**: It comes later in the CSS, and later rules override earlier ones with the same specificity.

**Common confusion**: putting the 1024 query **above** the 768 query. Then on big screens the 768 rules override the desktop ones.

**Transition**: "Let's step back and look at what we just did."

---

## Slide 39 · The big idea: same HTML, three layouts · ⏱ 2 min

**Say**
> "This is the big idea of today. One HTML file. Three completely different layouts. The colours on this slide match the code: orange header, purple nav, green main, blue aside, navy footer.
>
> HTML says **what** the content is. CSS Grid says **where** it goes. If your client wants the sidebar on the left tomorrow, you change one line of CSS, not your HTML."

**Demonstrate**: drag the demo window one more time from narrow to wide, without talking, and let them watch.

**Ask**: "The client wants the aside on the LEFT on desktop. What do you change?"
**Expected answer**: Only the desktop `grid-template-areas` (e.g. `"aside main nav"`) and the column widths to match.

**Common confusion**: none, but check that everyone is with you before moving on.

**Transition**: "Now let's connect Part 1 and Part 2."

---

## Slide 40 · A responsive photo gallery · ⏱ 4 min

**Say**
> "Here's where both halves of today meet. A photo gallery is a grid: 2 columns on phones, 4 on bigger screens. That's the media query, nothing new.
>
> The images inside get `width: 100%` so each one fills its grid cell. `aspect-ratio: 1 / 1` makes every image square. But our photos aren't square, so they'd normally be squashed. That's what `object-fit: cover` fixes: it says 'fill the box completely, keep your proportions, and crop whatever doesn't fit,' like a photo in a picture frame that's slightly too small.
>
> And remember `sizes` from Part 1? On desktop each photo is about a quarter of the screen, so `sizes` says 25vw. On phones, two columns, so 50vw. The grid and the `sizes` attribute describe the same thing."

**Demonstrate**: in `07-responsive-layout.html`, the gallery inside `main`.
1. Remove `object-fit: cover` and the photos squash. Put it back.
2. Try `object-fit: contain`: nothing is cropped, but you see empty bars.
3. Point to the `sizes` attribute and match it to the media queries.

**Ask**: "On a laptop the gallery has 4 columns. Roughly what fraction of the screen is one photo, and how does that show up in our HTML?"
**Expected answer**: About a quarter, so `25vw` in `sizes`.

**Common confusion**: "object-fit cut off part of my photo!" That's what `cover` does. Use `contain` if nothing may be cut, and accept the empty space.

**Transition**: "Here are the Grid mistakes I see in nearly every class."

---

## Slide 41 · Common Grid mistakes · ⏱ 3 min

**Say** *(again, read the titles and let students explain them)*
> "**Grid on the wrong element**: `display: grid` goes on the parent. **Grandchildren**: only direct children are grid items. **Off by one**: count lines, not columns. **Broken area map**: uneven rows or L shapes, and the whole map is ignored. **Fixed pixel columns**: three 300-pixel columns overflow every phone. **Queries in the wrong order**: small min-width first, bigger ones below."

**Demonstrate**: pick 2–3 and break them live in any demo.

**Ask**: "My sidebar appears below the footer in its own row. What's the likely cause?"
**Expected answer**: A typo in the area name, or the element is missing its `grid-area`, so Grid auto-places it in a new row.

**Common confusion**: students change random properties when something breaks. Teach the habit: **open the grid overlay first**, then look for crossed-out properties.

**Transition**: "And some good habits to finish."

---

## Slide 42 · Grid best practices · ⏱ 3 min

**Say**
> "Start mobile first: one column by default, add columns with `min-width` queries. Use `fr` for flexible columns and pixels for things that should stay fixed, like a sidebar. Use `gap`, not margins. Use named areas for page layouts, because they're readable; line numbers are fine for small tweaks like 'this card spans two'. And always use the DevTools grid overlay.
>
> And a bonus, if you're keeping up." *(only if time allows)* "Read this as a sentence: 'repeat, auto-fit, as many columns as fit, each at least 220 pixels wide and at most one share of the space.' Watch." *(drag the window)* "The number of columns changes on its own with **no media queries**. It's perfect for card grids. For page layouts you still want media queries, because auto-fit can only change the number of equal columns. It can't move your nav to the side."

**Demonstrate** (bonus): in `04-grid-basics.html`, set `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));` and drag the window.

**Ask**: "Why do we still need media queries for the page layout?"
**Expected answer**: auto-fit only changes how many equal columns there are. It can't rearrange named areas or move elements to different places.

**Common confusion**: `auto-fit` vs `auto-fill`. They only differ when there are fewer items than would fit. Don't go down that path today; `auto-fit` is the one to remember.

**Transition**: "Time to build."

---

## Slide 43 · Exercise 2: Build a course catalogue grid · ⏱ 25 min

**Say** *(before)*
> "Open `ex2-starter.html`. It's a coding school's course list. The cards are styled already; they just stack. Your job is the grid. The steps are on the slide, and do them in order. Start with three columns and the spans, then make it responsive. Use the grid overlay to check your lines."

**⏸ PAUSE HERE.** Don't continue until most students have at least steps 1–3 working.

**Hints to give out loud, one at a time, as people get stuck:**
1. "Which element is the parent of all the cards?"
2. "How many lines does a 3-column grid have? What's the last one called?"
3. "Where should the media queries go, before or after the base rule?"
4. "What happens if you span 2 columns on a grid that only has 1?" (Grid invents a second column and the page scrolls sideways. Put the span inside the 700px query.)

**After (5 min review)**: show `ex2-solution.html` and walk through the three widths in the device toolbar.

**Ask**: "Why is `grid-column: span 2` inside the media query and not in the base rule?"
**Expected answer**: On a 1-column grid, spanning 2 would create an extra implicit column and cause horizontal scrolling.

**Common confusion**: `display: grid` on `.card`. Also writing `grid-template-columns: 3` (Grid needs track sizes, not a number).

**Transition**: "Last one, the challenge. It combines everything from today."

---

## Slide 44 · Exercise 3: A responsive restaurant homepage · ⏱ 10 min in class + homework (40 min total)

**Say** *(before)*
> "Open `ex3-starter.html`. It's a homepage for an Italian restaurant. The HTML is complete and the colours are done. You add the layout and the media. This is everything from today in one page: grid areas, three breakpoints, a background video, a gallery grid inside the page grid, and srcset.
>
> Suggested order: name the areas, phone map, tablet query, desktop query, video, gallery, srcset. Test at 375, 800 and 1280 pixels. Whatever you don't finish today is homework."

**⏸ PAUSE HERE.** Give at least 10 minutes in class so everyone gets the phone and tablet maps working while you can still help.

**Common blockers to watch for:**
- In the desktop map, `nav` and `hours` need to appear in **two** rows to stretch beside hero and menu.
- `.gallery` needs its own `display: grid`. It's a grid inside a grid item, which shows that nesting works.
- The video is not muted, so it doesn't autoplay.

**Ask**: "The gallery is inside `.menu`, which is a grid item. Can a grid item also be a grid container?"
**Expected answer**: Yes. Any element can be a grid container for its own children.

**Common confusion**: expecting the gallery images to follow the **page** grid's columns. They follow their own parent (`.gallery`).

**Solution**: `ex3-solution.html`. Don't share it until students have tried at least the first three steps.

**Transition**: "Let's wrap up."

---

## Slide 45 · Wrap-up · ⏱ 3 min

**Say**
> "Let's look at what you can do now that you couldn't this morning. Images that never overflow: max-width and height auto. srcset and sizes so phones download smaller files. Video that fills its box, and autoplay only when it's muted. And Grid: `display: grid` on the parent, columns, rows and gap. Lines to place items, like 1 / 3 or span 2. And areas plus media queries: one HTML file, many layouts.
>
> Before you leave, take a piece of paper and write one thing srcset does and one thing `grid-template-areas` does. Hand it to me at the door."
>
> **Closing bridge** *(fill in your next topic)*: "Next session we'll look at [next topic]. Bring your finished Exercise 3, because we'll build on that layout."

**Demonstrate**: none.

**Ask**: the exit ticket above.
**Expected answer**: "srcset gives the browser a list of image files at different widths so it can download the right one" / "grid-template-areas lets you draw the layout with named areas, one string per row."

**Common confusion**: read the exit tickets before the next class. Any student who mixes up srcset and sizes, or container and items, needs a 2-minute check-in at the start of the next session.
