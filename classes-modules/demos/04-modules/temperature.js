// temperature.js
// This file is a module: it has its own scope. Only what is exported is visible elsewhere.

// Not exported, so only this file can see it (module scope).
const FAHRENHEIT_PER_CELSIUS = 9 / 5;

export class Temperature {
  constructor(celsius) {
    this.celsius = celsius;          // runs the setter below
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (typeof value !== 'number') {
      throw new Error('Temperature must be a number');
    }
    this._celsius = value;           // the underscore: internal, by convention
  }

  get fahrenheit() {
    return this._celsius * FAHRENHEIT_PER_CELSIUS + 32;
  }

  static fromFahrenheit(f) {         // static: called on the class, Temperature.fromFahrenheit(...)
    return new Temperature((f - 32) / FAHRENHEIT_PER_CELSIUS);
  }
}
