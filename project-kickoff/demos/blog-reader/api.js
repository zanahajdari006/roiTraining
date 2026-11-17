// api.js
// ONE JOB: talk to the server. No other file calls fetch.

const API_URL = 'https://jsonplaceholder.typicode.com';

// Not exported: a helper only this file uses (module scope, Session 18).
// Every request goes through here: fetch, check, parse. The Session 20 pattern, written once.
async function request(path) {
  const response = await fetch(API_URL + path);

  if (!response.ok) {
    throw new Error('HTTP error ' + response.status);
  }

  const data = await response.json();
  return data;
}

// One exported function per thing the app needs from the server.
// request() gives back a promise, so these do too. Whoever calls them uses await.

export function getUsers() {
  return request('/users');
}

export function getPostsByUser(userId) {
  return request('/posts?userId=' + userId);
}

export function getCommentsByPost(postId) {
  return request('/comments?postId=' + postId);
}
