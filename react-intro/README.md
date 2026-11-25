# Session 23 · Introduction to React

Lesson code for Session 23. These files do not open with Live Server: React code runs inside a Vite project, which you create once (below). Then copy a file's contents into `hello-react/src/App.jsx` and save. The browser updates by itself.

## Set up the project (once)

You need Node.js. Check in a terminal with `node -v`. Vite needs Node 20.19+ or 22.12+; if the command is not found, install the LTS version from [nodejs.org](https://nodejs.org).

Run these from this `react-intro` folder:

```bash
npm create vite@latest hello-react -- --template react
```

1. `Need to install the following packages ... Ok to proceed?` Type `y` and press Enter.
2. `Install with npm and start now?` Choose **Yes**. npm downloads React into `node_modules` (about a minute), then starts the dev server.
3. Open `http://localhost:5173`. Ctrl+click the link in the terminal.
4. Stop the server with **Ctrl+C** in the terminal.

Answered No by mistake, or starting again another day:

```bash
cd hello-react
npm install    # only the first time, or after a pull
npm run dev
```

Last step before the demos: open `hello-react/src/index.css`, delete everything in it and save. That removes the starter page's styles.

## Files

| File | Slide | What it shows |
| --- | --- | --- |
| `demos/01-first-jsx.jsx` | 10 | One parent element, `className`, self-closing tags |
| `demos/02-expressions.jsx` | 10 | `{ }` with a function call, an object property, maths, a string method |
| `demos/03-lists.jsx` | 11 | `.map()` into `<li>` elements, and `key` |
| `demos/04-conditionals.jsx` | 12 | `if` before `return`, `&&` (this or nothing), `? :` (this or that) |
| `practice/writers-page.jsx` | 13 | Practice starter |
| `practice/writers-page-solution.jsx` | 13 | Practice solution, including the stretch |

Each demo ends with a **Try it** comment: a change to make on purpose, and what you should see.

## Troubleshooting

| You see | Do this |
| --- | --- |
| `node: command not found` | Install Node.js LTS, then close and reopen VS Code |
| PowerShell: `running scripts is disabled on this system` | In the VS Code terminal, click the arrow next to **+** and choose **Git Bash** or **Command Prompt** |
| `npm run dev`: `Missing script: "dev"` | You are in the wrong folder. `cd hello-react` first |
| A red error box in the browser | Read it: it names the file and line. Usually `class` instead of `className`, a tag not closed, or two elements with no parent |
| The page is blank | Press F12 and read the Console |

## Git

The project's `.gitignore` keeps `node_modules` out of Git. Never commit it: it is thousands of files, and `npm install` rebuilds it from `package.json`. If you see `node_modules` in your list of changes, stop and ask.

The course outline mentions Create React App. The React team deprecated it in February 2025, so we use Vite. Old tutorial? `npm start` is `npm run dev`, port 3000 is 5173, and `src/index.js` is `src/main.jsx`.


