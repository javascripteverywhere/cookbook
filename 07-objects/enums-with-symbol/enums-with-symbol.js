// Create three constants to use as an enum
const TrafficLight = {
  Green: Symbol('green'),
  Red: Symbol('red'),
  Yellow: Symbol('yellow')
}

// This function uses the light enum
function switchLight(newLight) {
  if (newLight === TrafficLight.Green) {
    console.log("Turning light green");
  }
  else if (newLight === TrafficLight.Yellow) {
    console.log("Get ready to stop");
  }
  else {
    console.log("Turning light red");
  }
  return newLight;
}

let light = TrafficLight.Green;
light = switchLight(TrafficLight.Yellow);
light = switchLight(TrafficLight.Red);

console.log(light);