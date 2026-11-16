# Session 20 · Async/Await & Working with APIs

Lesson code for Session 20. Open any `.html` file with Live Server, then press F12 and choose Console to see the output.

| File | Slide | What it shows |
| --- | --- | --- |
| `demos/01-async-await-keywords.html` | 4 | `async` makes a function return a promise; `await` pauses the function, not the program |
| `demos/02-chain-to-async-await.html` | 5 | The same job as a promise chain and as async/await, side by side |
| `demos/03-try-catch.html` | 6 | `try` / `catch` / `finally` around `await`, and what happens without them |
| `demos/04-json.html` | 8 | JSON is text: `JSON.parse` and `JSON.stringify` |
| `demos/05-first-api-call.html` | 9 | `fetch` + `response.json()` against a real API |
| `demos/06-fetch-error-handling.html` | 10 | The `response.ok` check, `throw`, and one `catch` for every failure |
| `practice/user-posts.html` | 11 | Practice starter |
| `practice/user-posts-solution.html` | 11 | Practice solution, including the stretch |

Demos `05` and `06` and both practice files call the free JSONPlaceholder API (`https://jsonplaceholder.typicode.com`), so they need an internet connection. No account or key is needed.

Demos `01` and `03` have commented-out lines that cause an error on purpose. Uncomment them to see the error in the console, then comment them out again.

Slide 7 (APIs and fetch) is a concept slide with no code file.

Branch: `lesson/async-await-fetch`
