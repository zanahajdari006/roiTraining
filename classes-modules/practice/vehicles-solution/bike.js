// bike.js: a child class. It imports the parent, then extends it.
import { Vehicle } from './vehicle.js';

export class Bike extends Vehicle {
  constructor(make) {
    super(make, 2);                // calls Vehicle's constructor with 2 wheels
  }

  ring() {
    return 'Ring ring!';
  }
}
