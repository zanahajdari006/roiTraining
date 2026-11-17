// ui.js
// ONE JOB: show things to the user.
// Today "show" means console.log, because that is what we know so far.
// Later we swap the inside of these functions for real page updates.
// api.js and main.js will not change at all. That is the point of the split.

export function showLoading(message) {
  console.log(message);
}

export function showUsers(users) {
  console.log('--- Writers ---');
  users.forEach((user) => console.log(user.id + '. ' + user.name));
}

export function showPosts(posts) {
  console.log('--- ' + posts.length + ' posts ---');
  posts.forEach((post) => console.log(post.id + '. ' + post.title));
}

export function showComments(comments) {
  console.log('--- ' + comments.length + ' comments ---');
  comments.forEach((comment) => console.log(comment.email + ': ' + comment.name));
}

export function showError(message) {
  console.log('Something went wrong: ' + message);
}
