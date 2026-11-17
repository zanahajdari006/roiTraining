// ui.js
// ONE JOB: show things to the user. For now, in the console.

export function showLoading(message) {
  console.log(message);
}

export function showError(message) {
  console.log('Something went wrong: ' + message);
}

// TODO 3: export one show function for your first story's data.
// Example for Dog CEO (the photo link is in data.message):
//   export function showDog(data) {
//     console.log('Your dog: ' + data.message);
//   }
