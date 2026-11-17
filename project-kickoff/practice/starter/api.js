// api.js
// ONE JOB: talk to the server. No other file calls fetch.

// TODO 1: put your API's base URL here, for example 'https://dog.ceo/api'
const API_URL = '';

// Ready to use: fetch, check, parse. Same as the Blog Reader.
async function request(path) {
  const response = await fetch(API_URL + path);

  if (!response.ok) {
    throw new Error('HTTP error ' + response.status);
  }

  const data = await response.json();
  return data;
}

// TODO 2: export one function for your first user story.
// Example for Dog CEO:
//   export function getRandomDog() {
//     return request('/breeds/image/random');
//   }
