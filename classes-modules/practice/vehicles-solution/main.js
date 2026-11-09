// main.js: the only file that runs. It imports and uses the classes.
import { Bike } from './bike.js';

const bike = new Bike('Giant');
console.log(bike.describe());   // Giant has 2 wheels.
console.log(bike.ring());       // Ring ring!
