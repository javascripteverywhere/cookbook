import {Units, LengthConverter} from './lengthConverterModule.js';   // eslint-disable-line import/extensions

function doSampleConversion() {
  const lengthInMiles = 495;
  const lengthInElephants = LengthConverter.Convert(lengthInMiles, Units.Feet, Units.Yards);
  alert(lengthInElephants);   // eslint-disable-line no-alert
}

export {doSampleConversion}   // eslint-disable-line import/prefer-default-export