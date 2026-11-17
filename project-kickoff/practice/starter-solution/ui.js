// ui.js
// ONE JOB: show things to the user. For now, in the console.

export function showLoading(message) {
  console.log(message);
}

export function showError(message) {
  console.log('Something went wrong: ' + message);
}

// Dog CEO puts the photo link in data.message
export function showDog(data) {
  console.log('Your dog: ' + data.message);
}

// Stretch
export function showBreedDog(breed, data) {
  console.log('Your ' + breed + ': ' + data.message);
}
