# Project Plan: Blog Reader

The worked example from Session 21 (slides 5 to 8). Your own plan uses the same headings: copy `practice/project-plan-template.md`.

## 1. Goal

Blog Reader helps a reader browse what each writer has posted and see what people said about it.

## 2. User stories

1. As a reader, I want to see a list of writers, so that I can pick one.
2. As a reader, I want to pick a writer and see their posts, so that I can choose what to read.
3. As a reader, I want to open a post and see its comments, so that I know what other people said about it.
4. As a reader, I want a clear message when something fails, so that I know to try again.
5. As a reader, I want to search posts by a word, so that I find a topic fast.

## 3. MVP: version 1

| Must have (version 1) | Done when |
| --- | --- |
| List of writers (story 1) | All 10 writers show, with their names |
| A writer's posts (story 2) | Writer 1 shows 10 post titles |
| A post's comments (story 3) | Post 1 shows 5 comments |
| Loading and error messages (story 4) | A broken URL shows "Something went wrong" instead of nothing |

Nice to have, later: search posts by a word (story 5), remember the last writer I opened, dark mode.

## 4. API

JSONPlaceholder, `https://jsonplaceholder.typicode.com`. Free, no account, no key.

| Endpoint | Gives us | Fields we use |
| --- | --- | --- |
| `/users` | 10 writers | `id`, `name` |
| `/posts?userId=1` | one writer's posts | `id`, `title` |
| `/comments?postId=1` | one post's comments | `email`, `name` |

## 5. Wireframe

```
+----------------------------------------------------------+
|  Blog Reader                                             |
+------------------+---------------------------------------+
|  Writers         |  Posts                                |
|  > Leanne Graham |  1. sunt aut facere repellat ...      |
|    Ervin Howell  |  2. qui est esse                      |
|    ...           |  ...                                  |
|                  +---------------------------------------+
|                  |  Comments                             |
|                  |  Eliseo@gardner.biz: id labore ...    |
+------------------+---------------------------------------+
|  Loading... / Something went wrong: HTTP error 404       |
+----------------------------------------------------------+
```

## 6. Architecture: one job per file

| File | Its one job | Its functions |
| --- | --- | --- |
| `api.js` | Talk to the server | `getUsers`, `getPostsByUser`, `getCommentsByPost` |
| `ui.js` | Show things to the user | `showLoading`, `showUsers`, `showPosts`, `showComments`, `showError` |
| `main.js` | Coordinate: one function per user story | `start`, `selectUser`, `openPost` |

The rules:

- Only `api.js` calls `fetch`.
- Only `ui.js` shows things to the user.
- `main.js` connects them: it asks `api.js` for data and hands the data to `ui.js`.
- `index.html` loads only `main.js`, with `type="module"`.
