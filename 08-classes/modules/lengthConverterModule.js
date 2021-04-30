/* eslint-disable max-classes-per-file */
const Units = {
  Meters: 100,
  Centimeters: 1,
  Kilometers: 100000,
  Yards: 91.44,
  Feet: 30.48,
  Miles: 160934,
  Furlongs: 20116.8,
  Elephants: 625,
  Boeing747s: 7100
};

class InvisibleLogger {
  static log() {
    console.log('Greetings from the invisible logger');
  }
}

class LengthConverter {
  static Convert(value, fromUnit, toUnit) {
    InvisibleLogger.log();
    return value*fromUnit/toUnit;
  }
}

export {Units, LengthConverter}