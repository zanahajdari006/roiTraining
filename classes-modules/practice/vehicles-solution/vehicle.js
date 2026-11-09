// vehicle.js: the parent class, exported so other files can extend it.
export class Vehicle {
  constructor(make, wheels) {
    this.make = make;
    this.wheels = wheels;
  }

  describe() {
    return this.make + ' has ' + this.wheels + ' wheels.';
  }
}
