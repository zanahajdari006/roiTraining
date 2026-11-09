// STARTER: prototypes in one file. Refactor this into classes and modules.
// Hints:
//   - A class uses the class keyword, a constructor method, and methods without the word function.
//   - Bike must call super(make, 2) instead of Vehicle.call(this, make, 2).
//   - Put Vehicle in vehicle.js and Bike in bike.js. Use export and import.

function Vehicle(make, wheels) {
  this.make = make;
  this.wheels = wheels;
}

Vehicle.prototype.describe = function () {
  return this.make + ' has ' + this.wheels + ' wheels.';
};

function Bike(make) {
  Vehicle.call(this, make, 2);
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

Bike.prototype.ring = function () {
  return 'Ring ring!';
};

const bike = new Bike('Giant');
console.log(bike.describe());   // Giant has 2 wheels.
console.log(bike.ring());       // Ring ring!
