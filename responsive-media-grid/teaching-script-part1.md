# Teaching script, Part 1: Responsive Images & Video

Slides 1–21 · about **80 minutes** including Exercise 1

**How to use this script.** Each slide has:
- **Say**: what you explain in your own voice. Don't read the slide; the slide is the summary and this is the talk.
- **Demonstrate**: what to type or show in VS Code and the browser.
- **Ask / Expected answer**: questions for the class and the answer you're looking for.
- **Common confusion**: what students usually get wrong, so you can address it before they do.
- **Transition**: one line into the next slide.

**Before class**
- Open the `demos/` folder in VS Code. Open each demo in Chrome (double-click, or use the Live Server extension so it reloads on save).
- Make sure you have internet access. The images come from `picsum.photos` / `placehold.co` and the video from MDN's public sample files.
- Know the DevTools shortcuts: `F12` (open), `Ctrl+Shift+M` (device toolbar), and **Network → Disable cache**.
- Put `exercises/ex1-starter.html` somewhere students can download it.

---

## Slide 1 · Title: Responsive Media & CSS Grid · ⏱ 2 min

**Say**
> "Before we start, take out your phone and open any news website, like BBC or a local news site. Now look at the same site on my screen." *(Open it on the projector.)* "Same website, same HTML, but on your phone everything is in one column, and on mine there are three columns and the photos are bigger. Nobody built two websites. Today you'll learn the two tools that make that happen.
>
> The first is responsive media: making images and videos behave on every screen. The second is CSS Grid, which is how we arrange the boxes on the page. By the end of today you'll build a page that rearranges itself from phone to desktop."

**Demonstrate**: open a real news site on the projector, then toggle the DevTools device toolbar (`Ctrl+Shift+M`) so they see the same layout change on your screen.

**Ask**: "What changed between your phone and my screen?"
**Expected answer**: The number of columns, the image sizes, and maybe the menu (it turns into a hamburger icon).

**Common confusion**: students think "mobile version" means a separate website (m.example.com). Explain that modern sites use one HTML file with CSS that adapts.

**Transition**: "Here's the plan for today."

---

## Slide 2 · Agenda · ⏱ 1 min

**Say**
> "Two parts. Part 1 is images and video: how to stop them breaking your layout, and how to avoid sending a huge file to a small phone. Part 2 is CSS Grid. We'll start with the basics, then build a full page layout that changes at different screen sizes. There are three exercises, each a bit harder than the last, and the last one combines everything."

**Demonstrate**: nothing.

**Ask**: "Hands up if you've ever had a page with a horizontal scrollbar you couldn't get rid of." *(Most hands go up.)* "By the end of Part 1 you'll know the most common cause."

**Common confusion**: none.

**Transition**: "First, let's remind ourselves of three things you already know, because we'll use all three today."

---

## Slide 3 · Recap: three things you already know · ⏱ 4 min

**Say**
> "First, the viewport meta tag. Without it, a phone pretends it's a desktop screen about 980 pixels wide and zooms everything out, so the text is tiny. This line tells the phone to use its real width. Every responsive page needs it, and every file today has it at the top.
>
> Second, media queries. A media query is an if-statement for CSS: 'if the screen is at least 768 pixels wide, apply these rules.' We'll use them a lot in Part 2.
>
> Third, relative units. A percentage is relative to the **parent** element. If a box is inside an 800-pixel container, 50% is 400 pixels. `vw` means 'viewport width', the width of the browser window. 50vw is always half the screen, no matter what the parent is. Remember this difference, because `max-width: 100%` and `sizes` both depend on it."

**Demonstrate**: open any demo file, delete the viewport meta line, view it in device mode, and show the tiny zoomed-out page. Undo.

**Ask**
1. "What happens on a phone if you forget the viewport tag?"
   **Expected answer**: The page renders as if the screen were desktop-wide and zooms out, so the text is tiny and media queries don't fire as expected.
2. "A box is inside a 600px container. What's 50%? What's 50vw on a 1400px screen?"
   **Expected answer**: 300px, and 700px.

**Common confusion**: mixing up `%` and `vw`. Students often think 100% always means the full screen.

**Transition**: "Now, why do images need special treatment at all?"

---

## Slide 4 · One image, many screens · ⏱ 3 min

**Say**
> "Responsive media means images and videos that adapt to the screen. There are two separate problems here, and people often mix them up.
>
> Problem one is how big the image **looks**. A photo must never be wider than the box it's in, and it must never be squashed or stretched. We fix that with CSS.
>
> Problem two is how big the **file** is. Even if a photo is shown small on a phone, the phone might still download a huge file. That costs mobile data and time, and makes the page slow. We fix that with HTML, using an attribute called `srcset`.
>
> Keep the two in separate boxes in your head: CSS controls what you see, and srcset controls what you download."

**Demonstrate**: nothing. Point at the three device drawings.

**Ask**: "Why does the file size matter more on a phone than on a laptop?"
**Expected answer**: Mobile data is limited or costs money, connections can be slow, and big downloads drain the battery.

**Common confusion**: "If CSS makes the image smaller, the download is smaller too." **No.** CSS only changes how it's drawn. The full file is still downloaded.

**Transition**: "Let's see problem one in action."

---

## Slide 5 · The problem: images show at their real size · ⏱ 3 min

**Say**
> "Here's a normal image tag. The photo file is 1600 pixels wide. If you don't tell the browser anything else, it draws the image at its real size, 1600 pixels. On a laptop that may be fine. A phone screen is about 360 to 430 CSS pixels wide, so the image sticks out of the screen, and because one element is too wide the whole page gets a sideways scrollbar. That wobbly page you can drag left and right on your phone is very often caused by one image."

**Demonstrate**
1. Open `demos/01-responsive-image.html`. The `img` rule is commented out.
2. Press `Ctrl+Shift+M` and pick a phone. Scroll sideways to show the overflow.
3. In Elements, hover the `<img>` to show its 1600px box sticking out.

**Ask**: "Why doesn't the browser just shrink it automatically?"
**Expected answer**: By default an image is shown at its natural (intrinsic) size. Nothing in our CSS tells it to shrink.

**Common confusion**: students blame the viewport tag. It's correct; the image is the problem.

**Transition**: "The fix is two lines of CSS, and you'll probably use them in every project you ever build."

---

## Slide 6 · The CSS fix: max-width: 100% and height: auto · ⏱ 5 min

**Say**
> "`max-width: 100%` says: 'you may be as wide as your real size, but never wider than your container.' The 100% is 100% of the **parent**, not of the screen. So inside a 700-pixel article the image can be at most 700 pixels, and inside a 300-pixel sidebar at most 300.
>
> `height: auto` says: 'work out the height yourself from the width, keeping the original proportions.' If the width shrinks to half, the height shrinks to half too, and the photo never looks squashed.
>
> Look at the drawing on the right: same rule, three different containers. The image always fits and always keeps its shape. This rule doesn't know or care about phones. It just fits whatever box it's in, which makes it work everywhere."

**Demonstrate**
1. Uncomment the `img { max-width: 100%; height: auto; }` rule and save. The phone view now fits.
2. Turn off device mode and drag the browser window narrower and wider. The image shrinks and grows, but never beyond 1600px.
3. **Break it:** delete `height: auto`. Because the `<img>` has `width="1600" height="1000"` attributes, it now keeps a 1000px height while getting narrower, so it's squashed. Put it back.

**Ask**
1. "What does the 100% refer to?"
   **Expected answer**: The width of the parent/containing element.
2. "Why do we keep the width and height attributes in the HTML if CSS controls the size?"
   **Expected answer**: They tell the browser the proportions before the image downloads, so it can reserve space and the page doesn't jump. CSS `height: auto` keeps it proportional.

**Common confusion**
- Students think `max-width: 100%` makes small images bigger. It never enlarges.
- Forgetting `height: auto` when the img has a height attribute gives squashed photos.

**Transition**: "You might ask: why `max-width`? Why not just `width: 100%`?"

---

## Slide 7 · Why max-width and not width? · ⏱ 3 min

**Say**
> "With a big image in a small box, both do the same thing. The difference shows with a **small** image in a **big** box. `width: 100%` forces the image to fill the container, so a 300-pixel photo is stretched to 760 pixels and goes blurry, because the browser is inventing pixels that aren't there. `max-width: 100%` leaves it at 300 pixels. It only shrinks when it has to.
>
> So `max-width` is the safe default for content images. Use `width: 100%` on purpose when you *want* something edge to edge, like a banner where you've made sure the file is big enough."

**Demonstrate**: in demo 01, uncomment the `.small-photo { width: 100%; }` rule. The 300px dog photo stretches and goes soft. Comment it out again.

**Ask**: "A profile picture, 150px, inside a wide blog post. Which one?"
**Expected answer**: `max-width: 100%`, so it stays 150px and stays sharp.

**Common confusion**: "They're the same." They only behave the same when the image is bigger than its container.

**Transition**: "That's problem one solved: how big it looks. Now problem two: how big the file is."

---

## Slide 8 · CSS changes how big it looks, not how big the file is · ⏱ 3 min

**Say**
> "Our 1600-pixel photo now *looks* 375 pixels wide on a phone, but the phone still downloaded every one of those 1600 pixels. That's wasted data.
>
> Here's the idea behind srcset. Think of a restaurant menu with small, medium and large portions. You, the developer, write the menu: 'I have this photo at 400, 800 and 1600 pixels wide.' The browser is the customer. It knows things you don't: how wide the screen is and how sharp it is. It orders the right size for itself.
>
> You don't write 'if phone, use this file.' You describe the files, and the browser decides."

**Demonstrate**: nothing yet. Point at the flow: files → browser checks → downloads one.

**Ask**: "Who makes the final decision about which file to download, you or the browser?"
**Expected answer**: The browser.

**Common confusion**: students expect to control the choice directly, like a media query. srcset is a list of options plus hints, and the browser is allowed to choose.

**Transition**: "Let's write the menu."

---

## Slide 9 · srcset with width descriptors · ⏱ 4 min

**Say** *(type it live, slowly)*
> "We start with a normal image: `src` and `alt`. We keep `src`; it's the fallback for very old browsers that don't understand srcset.
>
> Now `srcset`. Inside the quotes we list our files. First entry: the file name, a space, then `400w`. The `w` means 'width in pixels', so this says: *this file is 400 pixels wide*. A comma, then the next file, `800w`, then `1600w`.
>
> I'm putting each one on its own line just so it's readable. The browser doesn't care about the line breaks. It cares about the commas."

**Demonstrate**: in a blank HTML file (or demo 02), type the `<img>` with `src`, `srcset` (one line at a time) and `alt`. Say each entry out loud: "photo-400.jpg, which is 400 wide."

**Ask**: "What does `800w` mean?"
**Expected answer**: The file is 800 pixels wide.

**Common confusion**
- **The big one:** students read `800w` as "use this on screens 800 pixels wide." It describes the **file**, not the screen.
- Forgetting commas between entries breaks the whole list.
- Without a `sizes` attribute, the browser assumes the image will be as wide as the whole screen (`100vw`), so it often picks too big a file on desktop. That's why we need the next slide.

**Transition**: "The browser now knows how big each file is. What it doesn't know yet is how big the image will be on the page."

---

## Slide 10 · sizes tells the browser how wide the image will be shown · ⏱ 4 min

**Say**
> "Why can't the browser just look at our CSS? Because it starts downloading images very early, often before the CSS has even arrived. So we give it a hint in the HTML.
>
> Read `sizes` like an if/otherwise: *if* the screen is 600 pixels or less, the image is 100vw, the full width of the screen. *Otherwise* it's 50vw, half the screen. The last value has no condition, so it's the default.
>
> One important thing: `sizes` doesn't resize the image. Your CSS does that. `sizes` is just a promise to the browser about what your CSS will do. If the promise is wrong, the image still looks right, but the browser downloads the wrong file. So keep `sizes` and your CSS in sync."

**Demonstrate**: open `demos/02-srcset-sizes.html` in VS Code. Show the `sizes` attribute next to the CSS: `.photo` is 100% width, then 50% above 600px. Point out that the two match.

**Ask**: "On a 1200px laptop, how wide is the image slot according to this `sizes`?"
**Expected answer**: 50vw = 600px.

**Common confusion**
- Students think `sizes` changes the display size. It doesn't; CSS does.
- The browser uses the **first** condition that matches, so order matters.

**Transition**: "So how does the browser combine srcset and sizes? Let's do the maths it does."

---

## Slide 11 · How the browser does the maths · ⏱ 5 min

**Say** *(work through one row on the whiteboard)*
> "Take the small phone, 360 pixels wide. `sizes` says that on a screen up to 600 pixels the image is 100vw, so the slot is 360 pixels.
>
> Now there's one more thing: pixel density. Modern phone screens are very sharp. They pack two or three real screen pixels into every CSS pixel. So to look crisp, a 360-pixel slot on a 2x screen needs 720 real pixels. The browser looks at our menu, 400, 800 or 1600, and usually takes the smallest file that's big enough: 800.
>
> The tablet is 800 wide, more than 600, so the slot is 50vw, 400 pixels. Times 2 is 800, so it picks 800w. The laptop slot is 720 at 1x, so it needs 720 and picks 800w as well. The big modern phone at 3x needs 1290, so it gets the 1600 file.
>
> You don't do this maths when coding. The browser does it. But knowing it explains why it picks what it picks."

**Demonstrate**
1. In `02-srcset-sizes.html`, the dark box under the image shows the viewport width, the pixel density and the chosen file (a small helper script prints `currentSrc`).
2. In DevTools Network, tick **Disable cache**.
3. Pick different devices in the device toolbar, **reload** each time, and read the chosen file aloud.
4. Delete the `sizes` attribute and reload on a desktop size: it now picks a bigger file, because it assumes 100vw. Put it back.

**Ask**: "A laptop with a sharp 2x screen, 1440 wide. How many pixels does it need, and which file?"
**Expected answer**: 50vw = 720, × 2 = 1440, so the 1600w file.

**Common confusion**
- "I made the window smaller and it didn't switch to a smaller file!" Browsers won't download a smaller file once they already have a bigger one. Test with cache disabled and a reload.
- Browsers can make slightly different choices (e.g. on slow connections). That's allowed.

**Transition**: "There's an even simpler version for images that are always the same size."

---

## Slide 12 · Fixed-size images: 1x and 2x · ⏱ 2 min

**Say**
> "Some images never change size: a logo that's always 200 pixels wide, an avatar, an icon. The layout doesn't matter; only the screen sharpness does. For those we use `x` descriptors instead: `logo.png 1x` for normal screens and `logo-2x.png 2x` for sharp screens. The 2x file is just twice as many pixels, so 400 by 120 for a 200 by 60 logo. No `sizes` needed.
>
> The rule of thumb is on the slide: if the image changes size with the layout, use `w` and `sizes`. If it's always the same size, use `1x` and `2x`. And never mix `w` and `x` in the same srcset."

**Demonstrate**: optional. Show a logo `<img>` with `1x/2x` in any file.

**Ask**: "A 200px wide avatar on a Retina laptop. Which file, and how wide is it?"
**Expected answer**: The 2x file, 400px wide.

**Common confusion**: mixing `400w, 2x` in one list. The whole srcset is invalid and the browser falls back to `src`.

**Transition**: "Before we move to video, here are the image mistakes I see most often."

---

## Slide 13 · Common image mistakes · ⏱ 3 min

**Say** *(read only the card titles and let the class guess the problem before you explain)*
> "**w without sizes**: the browser assumes the image is full screen width and downloads too big a file on desktops.
> **Wrong w values**: the `w` must be the real width of the file. If you lie, the browser picks badly.
> **Squashed images**: you set a CSS width but forgot `height: auto`.
> **Expecting a crop**: srcset files must be the *same picture* at different sizes. If you want a close-up crop on phones and a wide shot on desktops, that's called art direction and uses the `<picture>` element. We'll see it another time; just know it exists.
> **'It didn't switch!'**: that's the cache. Disable it while testing.
> **Missing alt**: every meaningful image needs alt text for screen-reader users and for when the image fails to load."

**Demonstrate**: optional. Show a broken srcset (missing comma) in demo 02 and point out that the image falls back to `src`.

**Ask**: "I resized my window from big to small and the image file didn't change. Is my srcset broken?"
**Expected answer**: Probably not. The browser already has the bigger file and won't download a smaller one. Test with cache disabled and a reload in the smaller size.

**Common confusion**: thinking srcset is broken when it's caching.

**Transition**: "Good news: video is easier, because it follows the same rule."

---

## Slide 14 · Responsive video: the same rule as images · ⏱ 3 min

**Say**
> "The `<video>` tag works a lot like `<img>`. It has a `src`, and the text between the tags only appears in browsers that can't play video at all.
>
> To make it responsive we use almost the same CSS: `width: 100%` and `height: auto`. For video I usually use `width` rather than `max-width`, because I want the player to fill the column. Video players look odd floating at a small size. If your video file is small and must never stretch, use `max-width` instead, exactly like images.
>
> One thing to avoid is a fixed `width="800"` attribute with no CSS. That's exactly the overflow problem we had with the photo."

**Demonstrate**
1. Open `demos/03-video.html`. Comment out the `video { width: 100%; height: auto; }` rule and look at a phone viewport.
2. Uncomment it. The video now fits.

**Ask**: "What's different from the image rule?"
**Expected answer**: Nothing new. It's the same idea; we chose `width` so the player fills its container.

**Common confusion**: students think video needs JavaScript or a library to be responsive. It doesn't.

**Transition**: "Videos have a few special attributes you'll use all the time."

---

## Slide 15 · The video attributes you'll use most · ⏱ 4 min

**Say**
> "`controls` shows the play button, the timeline, volume and fullscreen. Without it, users can't control the video at all, so for any video someone is meant to *watch*, add controls.
>
> `autoplay` starts the video as soon as the page loads. `muted` starts it with the sound off. In a minute you'll see why those two always go together.
>
> `loop` starts it again when it ends. That's good for short background clips.
>
> `playsinline` matters on iPhones. Without it, some iPhones jump into fullscreen when the video plays. With it, the video stays inside the page.
>
> `poster` is an image shown before the video plays, like a thumbnail. It's the only one here that takes a value.
>
> The others are **boolean attributes**: if the attribute is there, it's on. If it's not, it's off. That has a funny side effect: `muted="false"` still mutes the video, because the browser only checks whether the word `muted` is there. To turn it off, delete it."

**Demonstrate**: in `03-video.html`, on the content video:
1. Remove `controls` and reload. There's no way to pause.
2. On the hero video, change `muted` to `muted="false"` and reload. It still plays silently, which proves the value is ignored and only the attribute's presence counts. Change it back.
3. Change the `poster` URL and reload to show the poster change.

**Ask**: "How do you turn autoplay **off**?"
**Expected answer**: Remove the attribute completely. Writing `autoplay="false"` doesn't work.

**Common confusion**: boolean attributes. Students coming from JavaScript expect `="false"` to work.

**Transition**: "Now let's talk about autoplay, because it has a rule most people learn the hard way."

---

## Slide 16 · Browsers only autoplay silent videos · ⏱ 3 min

**Say**
> "Imagine opening a website at night and a video starts shouting at you. Browsers decided users hate that, so Chrome, Safari and Firefox all **block autoplay with sound**. The top example on the slide simply won't start.
>
> Muted autoplay is allowed. So the recipe for a background video is: `autoplay muted loop playsinline`, plus a `poster` so something shows while it loads.
>
> A real-world example is a landing page hero: a few seconds of silent footage of coffee being poured, looping behind the headline. Keep these clips short and small, and if a video is long or important, give users a way to pause it."

**Demonstrate**
1. In `03-video.html`, the hero video at the top plays.
2. Remove `muted` and reload. It doesn't start. Open the Console to show Chrome's autoplay message (if shown).
3. Put `muted` back and it plays.

**Ask**: "Your autoplay video won't start. What's the first thing you check?"
**Expected answer**: Is it muted?

**Common confusion**: "It works on my computer." Chrome sometimes allows sound on sites you visit often (it learns your habits), so it can work for you and fail for everyone else. Always include `muted`.

**Transition**: "Let's put the attributes together in a realistic example."

---

## Slide 17 · A product demo video, done properly · ⏱ 2 min

**Say**
> "Here's a 'see it in action' video for an online shop. Instead of a `src` on the video, we have two `<source>` children. The browser goes top to bottom and plays the first format it supports. The `type` attribute lets it skip a format it can't play *without* downloading it first.
>
> WebM files are often smaller. MP4 plays basically everywhere. If you only have one file, make it MP4.
>
> The paragraph inside is the fallback, with a download link for the rare browser that can't play video. And the CSS is the same `width: 100%; height: auto;` we've already seen."

**Demonstrate**: in `03-video.html`, show the content video's two `<source>` tags. Optional: in DevTools Network, filter by "media" and show that only one file was downloaded.

**Ask**: "The browser supports both WebM and MP4. Which one plays?"
**Expected answer**: WebM, because it's listed first.

**Common confusion**: putting `src` on `<video>` **and** adding `<source>` tags. The `src` wins and the sources are ignored.

**Transition**: "What about YouTube videos? They don't use the video tag at all."

---

## Slide 18 · Embeds (YouTube, Vimeo) need aspect-ratio · ⏱ 3 min

**Say**
> "When you embed a YouTube video you get an `<iframe>`, which is a window into another web page. The problem is that an iframe has no natural shape. A photo knows it's 3 by 2 and a video file knows it's 16 by 9, but an iframe is just a 300 by 150 box by default. If you set `width: 100%`, the width grows but the height stays small, and you get a letterbox strip.
>
> The modern fix is one property: `aspect-ratio: 16 / 9`. It means 'whatever my width is, make my height width times 9 divided by 16.' Resize the window and the shape stays perfect.
>
> In older tutorials you'll see a trick with `padding-top: 56.25%` on a wrapper div. It does the same thing, but you don't need it any more."

**Demonstrate**
1. In `03-video.html`, replace `VIDEO_ID` with a real YouTube ID (YouTube → Share → Embed, copy the id after `/embed/`).
2. Comment out `aspect-ratio` and the embed becomes a wide, short strip. Uncomment it.
3. Drag the window. The embed keeps its shape.

**Ask**: "The container is 640 pixels wide. How tall is the 16:9 embed?"
**Expected answer**: 640 × 9 ÷ 16 = 360px.

**Common confusion**: students try `height: auto` on the iframe. That works for `img` and `video` because they have natural proportions. It doesn't work for an iframe.

**Transition**: "Quick round of video mistakes, then you'll try it yourselves."

---

## Slide 19 · Common video mistakes · ⏱ 2 min

**Say** *(quick-fire: read each title and let students shout out what goes wrong)*
> "Autoplay without muted: it won't play. A fixed width with no CSS: it overflows phones. No controls on a content video: users are stuck. Huge files: compress them, and keep background clips to a few seconds. `muted="false"`: still muted. And `src` plus `source` tags: the sources are ignored."

**Demonstrate**: none needed.

**Ask**: "The hero video works on desktop Chrome but not on an iPhone. What would you check?"
**Expected answer**: `muted` and `playsinline`.

**Common confusion**: forgetting that iPhones need `playsinline`.

**Transition**: "Your turn."

---

## Slide 20 · Exercise 1: Make a travel article's media responsive · ⏱ 20 min

**Say** *(before)*
> "Open `ex1-starter.html` from the exercises folder. It's a garden blog post where everything is broken on phones. The tasks are on the slide, in order. Write your CSS under the comment that says 'YOUR CSS GOES BELOW THIS LINE'. You can change the HTML as well; you'll need to for srcset and the video attributes.
>
> When you're done, test it in the device toolbar at 375 pixels and at 1200. The image has its file name printed on it, so you can *see* which file the browser chose. Remember to disable the cache."

**⏸ PAUSE HERE.** Don't continue until most students have finished at least tasks 1–3. Walk around.

**While circulating, look for:**
- A missing comma in `srcset` (the image shows "1200w" everywhere).
- `autoplay` without `muted` (the hero is frozen).
- `width="900"` still on the video.
- `max-width` on the video but the hero video not filling its box. Hint: `height: 100%; object-fit: cover;` on `.hero video`.

**After (5 min review)**: open `ex1-solution.html`. Ask two students to each explain one change. Show the srcset switching between devices.

**Ask**: "Why did we use `700px` at the end of `sizes` instead of `50vw`?"
**Expected answer**: The article never gets wider than 700px, so on big screens the image is always 700px, a fixed size rather than a percentage of the screen.

**Common confusion**: students write `sizes="100vw"`. It works, but desktops download a bigger file than needed.

**Transition**: "Let's wrap up Part 1."

---

## Slide 21 · Part 1 takeaways · ⏱ 2 min

**Say**
> "Three things to remember. One: in CSS, `max-width: 100%` and `height: auto`, so images never overflow and never squash. Two: in HTML, srcset is the menu of files and sizes is the hint about display width, and the browser picks. Three: video gets `width: 100%`, controls if people should watch it, autoplay only with muted, and embeds need `aspect-ratio`.
>
> Our images now fit whatever box we put them in. But who decides how big the boxes are, and where they go on the page? That's layout, and that's what CSS Grid is for."

**Demonstrate**: none.

**Ask**: "One sentence each: what does srcset do, and what does sizes do?"
**Expected answer**: srcset lists the available files and their widths. sizes tells the browser how wide the image will be displayed so it can pick the right file.

**Common confusion**: swapping srcset and sizes.

**Transition** *(if continuing in the same session, take a 5–10 min break here)*: "After the break: CSS Grid."

---

*Continue with `teaching-script-part2.md`.*
