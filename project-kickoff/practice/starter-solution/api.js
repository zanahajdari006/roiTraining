// api.js
// ONE JOB: talk to the server. No other file calls fetch.

const API_URL = 'https://dog.ceo/api';

async function request(path) {
  const response = await fetch(API_URL + path);

  if (!response.ok) {
    throw new Error('HTTP error ' + response.status);
  }

  const data = await response.json();
  return data;
}

// Story 1: a random dog
export function getRandomDog() {
  return request('/breeds/image/random');
}

// Stretch, story 2: a random dog of one breed
export function getDogByBreed(breed) {
  return request('/breed/' + breed + '/images/random');
}
