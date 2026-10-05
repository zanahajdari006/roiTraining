# Practical exercises: Responsive Media & CSS Grid

Each exercise has a **starter** file (hand this to students) and a **solution** file (yours). Open them straight in the browser. No build step is needed, but you do need internet access because the images and videos load from public URLs.

| # | Topic | Time | Files |
|---|-------|------|-------|
| 1 | Responsive image + video | 20 min | `ex1-starter.html`, `ex1-solution.html` |
| 2 | Basic CSS Grid | 25 min | `ex2-starter.html`, `ex2-solution.html` |
| 3 | Full responsive page: Grid + media | 40 min (or homework) | `ex3-starter.html`, `ex3-solution.html` |

Students write all their CSS under the `/* ===== YOUR CSS GOES BELOW THIS LINE ===== */` comment. The look-and-feel CSS is already written, so they only work on today's topic.

---

## Exercise 1: Make a travel article's media responsive

### Scenario
A botanical garden's blog post looks fine on a laptop, but on phones the photo and the video stick out of the screen. The page also downloads a 1200px photo even on small phones.

### Requirements
1. The photo must never be wider than the article, and must never look squashed.
2. Add `srcset` with the three files (400w, 800w, 1200w) and a `sizes` attribute. The article is full width up to 700px and never wider than 700px.
3. The article video must fill the article width on every screen and keep its shape.
4. Give the article video `controls` and a `poster` image.
5. Turn the hero video into a silent background clip that starts by itself, loops, stays inside the page on iPhone, and fills the hero box.

### Starting code
`exercises/ex1-starter.html`. Key parts:

```html
<section class="hero">
  <video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"></video>
  <h1>Spring in the Botanical Garden</h1>
</section>

<article>
  <img src="https://placehold.co/1200x800/png?text=1200w+file"
       alt="Rows of tulips in a garden">

  <video width="900"
         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4">
  </video>
</article>
```

### Expected result
- At **375px** (DevTools device toolbar): there's no horizontal scrollbar, and the photo and video fit the article.
- The file name printed on the photo **changes with the device** (Network → Disable cache, then reload each time):

  | Device in DevTools | Needs (slot × density) | Text on photo |
  |---|---|---|
  | 375px wide, DPR 1 (pick "Responsive", set DPR 1) | 375 × 1 = 375 | **400w** |
  | 375px wide, DPR 2 (e.g. iPhone SE) | 375 × 2 = 750 | **800w** |
  | 1200px wide, DPR 1 | 700 × 1 = 700 | **800w** |
  | 1200px wide, DPR 2 | 700 × 2 = 1400 | **1200w** (largest available) |

  Browsers may differ slightly. A browser that already holds a bigger file may keep using it.
- The hero clip plays silently on loop and covers the hero box. The article video has play/pause controls and shows the poster before it plays.

### Hints
1. The image fix is two CSS properties. One stops it growing past its container, the other keeps the proportions.
2. In `srcset`, each entry is `file-url  width + w`, separated by **commas**.
3. `sizes` can end with a fixed size: `sizes="(max-width: 700px) 100vw, 700px"`.
4. Remove `width="900"` from the video and let CSS control the size.
5. Autoplay won't work unless the video is **muted**.
6. To make the hero video fill its box without stretching, use `height: 100%` and `object-fit: cover`.
7. Testing srcset? Tick **Disable cache** in the Network tab, then reload.

### Solution

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}

video {
  width: 100%;
  height: auto;
  display: block;
}

.hero video {
  height: 100%;
  object-fit: cover;
}
```

```html
<video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
       autoplay muted loop playsinline></video>

<img src="https://placehold.co/800x533/png?text=800w+file"
     srcset="https://placehold.co/400x267/png?text=400w+file 400w,
             https://placehold.co/800x533/png?text=800w+file 800w,
             https://placehold.co/1200x800/png?text=1200w+file 1200w"
     sizes="(max-width: 700px) 100vw, 700px"
     width="1200" height="800"
     alt="Rows of tulips in a garden">

<video controls
       poster="https://placehold.co/1280x720/png?text=Click+to+play"
       src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4">
  Your browser does not support video.
</video>
```

Full file: `ex1-solution.html`.

**Why each part matters:**
- `max-width: 100%` lets the image shrink but not stretch. `height: auto` recalculates the height from the width.
- `width`/`height` attributes on the `<img>` let the browser reserve the right amount of space before the image loads, so the page doesn't jump. CSS `height: auto` keeps it proportional.
- The `sizes` value `700px` describes the article's maximum width, so desktops don't download the 1200w file unless the screen is 2x.

---

## Exercise 2: Build a course catalogue grid

### Scenario
A coding school wants its course list shown as a card grid. There's a promo banner across the top, and a featured course card that's bigger than the others.

### Requirements
1. Turn `.catalogue` into a grid. On large screens it has **3 equal columns**.
2. Add a **24px** gap between all cards.
3. The **featured** card spans **2 columns** (on screens wide enough to have 2+ columns).
4. The **banner** always spans the **full width**. Use `1 / -1`.
5. Responsive: **1 column** below 700px, **2 columns** from 700px, **3 columns** from 1000px. Write it mobile-first.

### Starting code
`exercises/ex2-starter.html`:

```html
<div class="catalogue">
  <div class="banner">…</div>
  <div class="card featured">…</div>
  <div class="card">…</div>
  <div class="card">…</div>
  <div class="card">…</div>
  <div class="card">…</div>
  <div class="card">…</div>
</div>
```

### Expected result
- **Laptop (≥1000px):** the banner runs across the top. Row 2 has the featured card (2 columns wide) and one normal card. The remaining cards fill the next rows 3 per row.
- **Tablet (700–999px):** banner on top, featured card full width (2 of 2 columns), other cards 2 per row.
- **Phone (<700px):** everything stacks in one column, with no sideways scrolling.

### Hints
1. Which element is the **parent** of all the cards? That's where `display: grid` goes.
2. `repeat(3, 1fr)` is the same as `1fr 1fr 1fr`.
3. A 3-column grid has **4** column lines. `-1` is always the last line.
4. Write the 1-column version first, then add `@media (min-width: 700px)` and `@media (min-width: 1000px)` **below** it.
5. Watch out: `grid-column: span 2` on a **1-column** grid makes Grid invent a second column, and the page scrolls sideways. Put the span inside the media query.
6. Turn on the DevTools grid overlay to check your lines.

### Solution

```css
.catalogue {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.banner {
  grid-column: 1 / -1;
}

@media (min-width: 700px) {
  .catalogue {
    grid-template-columns: repeat(2, 1fr);
  }

  .featured {
    grid-column: span 2;
  }
}

@media (min-width: 1000px) {
  .catalogue {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Full file: `ex2-solution.html`.

**Extension for fast finishers:** replace the two media queries with
`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));`
and see what happens. (The featured span still needs care on narrow screens.)

---

## Exercise 3: A responsive restaurant homepage (Grid + responsive media)

### Scenario
"Trattoria Sole" needs a homepage that works on every device. It has a header, navigation, a hero section with a looping video, a gallery of menu photos, opening hours, and a footer.

### Requirements
1. Build the page layout with **`grid-template-areas`** on `.page`. Name the areas: `header`, `nav`, `hero`, `menu`, `hours`, `footer`.
2. **Phone (default):** one column, in this order: header, nav, hero, menu, hours, footer.
3. **Tablet (≥768px):** two columns (`2fr 1fr`). Header, nav, hero and footer go full width. Menu and hours sit side by side.
4. **Desktop (≥1024px):** three columns (`200px 1fr 260px`). Nav is a left sidebar, hero and menu are stacked in the middle, hours is the right sidebar, and header and footer go full width.
5. The **hero video** is silent, loops, starts by itself, and fills the width of its area.
6. The **menu gallery** is its own grid: 2 columns on phones, 3 from 768px. Photos are square crops and never squashed.
7. Every gallery image has **srcset** (300w, 600w) and **sizes**.
8. There's no horizontal scroll at any width from 320px to 1600px.

### Starting code
`exercises/ex3-starter.html`. The HTML is complete and the colours are done. Only the layout and media CSS are missing:

```html
<div class="page">
  <header>…</header>
  <nav>…</nav>
  <section class="hero"> <h2>…</h2> <video src="…flower.mp4"></video> </section>
  <section class="menu"> <h2>…</h2> <div class="gallery"> 6 × <img> </div> </section>
  <aside class="hours">…</aside>
  <footer>…</footer>
</div>
```

### Expected result
| Width | Layout |
|-------|--------|
| 375px | Everything stacked. Gallery has 2 square photos per row. Video plays silently. |
| 800px | Header, nav (links in a row), hero full width. Below that, menu (wide) beside hours (narrow). Gallery has 3 per row. |
| 1280px | Header on top. Nav as a left column, hero above menu in the middle, hours on the right. Footer at the bottom. |

### Hints
1. Do it in this order: (a) `grid-area` names, (b) the phone map, (c) the tablet query, (d) the desktop query, (e) video, (f) gallery, (g) srcset.
2. For the desktop map, `nav` and `hours` each appear in **two rows** so they stretch down beside hero and menu.
3. Inside media queries you only need to change `grid-template-columns` and `grid-template-areas`. `display: grid` and `gap` carry over.
4. Square photos: `aspect-ratio: 1 / 1;` plus `object-fit: cover;`.
5. Navigation links in a row on tablet: `nav li { display: inline-block; }`. Put them back to `display: block` on desktop.
6. If an area ends up in a strange extra row, check the spelling of its name in both places.
7. `sizes` doesn't have to be exact. A good estimate is `(min-width: 768px) 20vw, 50vw`.

### Solution (layout and media CSS)

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}

.hero video {
  width: 100%;
  height: auto;
  display: block;
}

header { grid-area: header; }
nav    { grid-area: nav; }
.hero  { grid-area: hero; }
.menu  { grid-area: menu; }
.hours { grid-area: hours; }
footer { grid-area: footer; }

.page {
  display: grid;
  gap: 16px;
  padding: 16px;
  grid-template-areas:
    "header"
    "nav"
    "hero"
    "menu"
    "hours"
    "footer";
}

.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.gallery img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

@media (min-width: 768px) {
  .page {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "header header"
      "nav    nav"
      "hero   hero"
      "menu   hours"
      "footer footer";
  }
  nav li { display: inline-block; margin-right: 16px; }
  .gallery { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1024px) {
  .page {
    grid-template-columns: 200px 1fr 260px;
    grid-template-areas:
      "header header header"
      "nav    hero   hours"
      "nav    menu   hours"
      "footer footer footer";
  }
  nav li { display: block; margin: 0 0 8px; }
}
```

```html
<video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
       autoplay muted loop playsinline></video>

<img src="https://picsum.photos/id/292/600/600"
     srcset="https://picsum.photos/id/292/300/300 300w,
             https://picsum.photos/id/292/600/600 600w"
     sizes="(min-width: 768px) 20vw, 50vw"
     width="600" height="600"
     alt="Fresh vegetables on a wooden table">
<!-- …same pattern for the other five photos -->
```

Full file: `ex3-solution.html`.

### Marking checklist (for you)
- [ ] `display: grid` on `.page` and on `.gallery`, not on their children
- [ ] Every row of every `grid-template-areas` has the same number of names
- [ ] Media queries are `min-width`, written small → large
- [ ] Video has `muted` (and `autoplay loop playsinline`)
- [ ] Images: `max-width: 100%` / `height: auto`, gallery uses `object-fit: cover`
- [ ] `srcset` entries use `w` with real file widths and are comma-separated
- [ ] No horizontal scrollbar at 320px
