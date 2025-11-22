const measureRainSwitch = (value) => {
  switch (value + 1) {
    case 0:
      console.log("drought")
      break;
    case 1:
      console.log("drought")
      break;
    case 2:
      console.log("dry")
      break;
    case 3:
      console.log("average")
      break;
    case 4:
      console.log("average")
      break;
    case 5:
      console.log("rainy")
      break;
    case 6:
      console.log("rainy")
    case 7:
      console.log("flood")
      break;
    case 8:
      console.log("flood")
      break;
    case 9:
      console.log("flood")
      break;
  }
};

const rounderSwitch = (value, direction) => {
  let result = 0
  switch (direction) {
    case "up":
      result = Math.ceil(value)
      break;
    case "down":
      result = Math.floor(value)
      break;
    case "honest":
      result = Math.round(value)
  }

  return result
};


module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
