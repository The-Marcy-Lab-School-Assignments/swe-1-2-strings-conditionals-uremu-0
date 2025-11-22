const coolnessGauge = (numOfFridges) => {
  if (numOfFridges >= 4) {
    return 'You are downright chilly!';
  } else {
    return 'You need more fridges.';
  }
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    return 'No pops? Maybe try one.'
  } else if (numOfFunkoPops <= 10) {
    return 'Only a few? Keep having fun!';
  } else if (numOfFunkoPops >= 11 && numOfFunkoPops <= 20) {
    return 'You have a problem.';
  } else if (numOfFunkoPops >= 21 && numOfFunkoPops <= 30) {
    return 'You need help!';
  } else {
    return 'You need an intervention!!!';
  }
};

const returnPositiveNegativeZero = (num) => {
  if (num === 0) {
    return 'Zero';
  } else if (num > 0) {
    return 'Positive';
  } else {
    return 'Negative';
  }
};

module.exports = {
  coolnessGauge,
  funkoPopAddictionLevel,
  returnPositiveNegativeZero,
};
