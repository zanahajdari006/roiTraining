// main.js
// ONE JOB: coordinate. One function per user story.

// TODO 4: import your function from api.js, for example:
//   import { getRandomDog } from './api.js';
import { showLoading, showError } from './ui.js';
// ...and add your show function to the line above, for example: showDog

// Story 1: As a ..., I want to ..., so that ...   (copy it from your plan)
async function start() {
  try {
    showLoading('Loading...');
    // TODO 5: await your api function, then pass the result to your show function.
    //   const data = await getRandomDog();
    //   showDog(data);
  } catch (error) {
    showError(error.message);
  }
}

start();
