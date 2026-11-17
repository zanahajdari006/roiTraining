// main.js
// ONE JOB: coordinate. Each function below is one user story from our plan.
// It asks api.js for data and hands the data to ui.js.
// It never calls fetch and never calls console.log itself.

import { getUsers, getPostsByUser, getCommentsByPost } from './api.js';
import { showLoading, showUsers, showPosts, showComments, showError } from './ui.js';

// Story 1: As a reader, I want to see a list of writers, so that I can pick one.
async function start() {
  try {
    showLoading('Loading writers...');
    const users = await getUsers();
    showUsers(users);
  } catch (error) {
    showError(error.message);
  }
}

// Story 2: As a reader, I want to pick a writer and see their posts,
// so that I can choose what to read.
async function selectUser(userId) {
  try {
    showLoading('Loading posts...');
    const posts = await getPostsByUser(userId);
    showPosts(posts);
  } catch (error) {
    showError(error.message);
  }
}

// Story 3: As a reader, I want to open a post and see its comments,
// so that I know what other people said about it.
async function openPost(postId) {
  try {
    showLoading('Loading comments...');
    const comments = await getCommentsByPost(postId);
    showComments(comments);
  } catch (error) {
    showError(error.message);
  }
}

// For now WE play the user and call the stories in order.
// Once the page is connected, a click will call selectUser and openPost instead.
async function simulateUser() {
  await start();
  await selectUser(1);   // "the user clicked writer 1"
  await openPost(1);     // "the user clicked post 1"
}

simulateUser();

// Try it: break the URL in api.js (change '/users' to '/userz') and save.
// Expected: Something went wrong: HTTP error 404
// Only api.js changed, and the error still reached the user through ui.js.
