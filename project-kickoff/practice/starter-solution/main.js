// main.js
// ONE JOB: coordinate. One function per user story.

import { getRandomDog, getDogByBreed } from './api.js';
import { showLoading, showError, showDog, showBreedDog } from './ui.js';

// Story 1: As a dog lover, I want to see a random dog, so that I smile.
async function start() {
  try {
    showLoading('Loading...');
    const data = await getRandomDog();
    showDog(data);
  } catch (error) {
    showError(error.message);
  }
}

// Stretch, story 2: As a dog lover, I want to pick a breed and see a dog of that breed,
// so that I see the breed I like.
async function pickBreed(breed) {
  try {
    showLoading('Loading a ' + breed + '...');
    const data = await getDogByBreed(breed);
    showBreedDog(breed, data);
  } catch (error) {
    showError(error.message);
  }
}

// We play the user for now.
async function simulateUser() {
  await start();
  await pickBreed('husky');
}

simulateUser();

// Break the URL: change '/breeds/image/random' to '/breeds/image/randomz' in api.js.
// Expected: Something went wrong: HTTP error 404
