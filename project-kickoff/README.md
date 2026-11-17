# Session 21 · Project Kickoff: Interactive Web Application

Lesson code for Session 21. Open any `index.html` with Live Server (the files use modules, so double-clicking the file will not work), then press F12 and choose Console to see the output.

| File | Slide | What it shows |
| --- | --- | --- |
| `demos/blog-reader-plan.md` | 5 to 8 | The worked example plan: goal, user stories, MVP, API, wireframe, module map |
| `demos/blog-reader/api.js` | 9 | One job: talk to the server. The only file that calls `fetch` |
| `demos/blog-reader/ui.js` | 10 | One job: show things to the user. For now it logs to the console |
| `demos/blog-reader/main.js` | 10 | One job: coordinate. One function per user story |
| `demos/blog-reader/index.html` | 9, 10 | Loads `main.js` as a module |
| `practice/project-plan-template.md` | 11 | Practice Part A: the plan template, with a list of free APIs |
| `practice/starter/` | 11 | Practice Part B: the three-file skeleton, with TODO 1 to 5 |
| `practice/starter-solution/` | 11 | Practice solution with the Dog CEO API, including the stretch |

The Blog Reader and the practice APIs need an internet connection. None of the APIs needs an account or a key.

The Blog Reader uses JSONPlaceholder (`https://jsonplaceholder.typicode.com`), the same API as Session 20. To see the error path, change `'/users'` to `'/userz'` in `api.js` and save: the console prints `Something went wrong: HTTP error 404`.

Slide 4 is a concept slide with no file.

Branch: `lesson/project-kickoff`
