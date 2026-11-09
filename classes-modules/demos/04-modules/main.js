// main.js
// Import what temperature.js exports. The path must start with ./ and include .js
import { Temperature } from './temperature.js';

const t = new Temperature(25);
console.log(t.fahrenheit);     // 77
t.celsius = 30;                // runs the setter
console.log(t.fahrenheit);     // 86

const boiling = Temperature.fromFahrenheit(212);
console.log(boiling.celsius);  // 100

// Module scope: FAHRENHEIT_PER_CELSIUS was not exported, so this file cannot see it.
// Uncomment to see: ReferenceError: FAHRENHEIT_PER_CELSIUS is not defined
//console.log(FAHRENHEIT_PER_CELSIUS);
