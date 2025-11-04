const measureRain = (inches) => {
  if (inches === 0) {
    return "drought"
  }
  else if (inches < 2) {
    return "dry"
  }
  else if (inches < 4) {
    return "average"
  }
  else if (inches < 6) {
    return "rainy"
  }
  else if (inches >= 6) {
    return "flood"
  }
};

const happyBirthdayPet = (breed, age) => {
  if (breed === `snake`) {
    return "Hiss hiss!"
  } else if (breed === `cat` && age < 5) {
    return "Mew mew!"
  } else if (breed === `cat` && age >= 5) {
    return "Meow meow!"
  } else if (breed === `dog` && age < 5) {
    return "Arf arf!"
  } else if (breed === `dog` && age >= 5 && age < 10) {
    return "Woof woof!"
  } else if (breed === `dog` && age >= 10) {
    return `Boof!`
  } else return "Happy birthday!"

};

const funTypes = (jsType) => {
  if (typeof jsType === `string`) {
    return "That's just some text.";
  }
  if (Number.isNaN(jsType)) {
    return "Well, now you're just showing off.";
  }
  if (typeof jsType === `number`) {
    return "That's a good number.";
  }
  if (typeof jsType === `boolean`) {
    return "To bool, or not to bool?";
  }
  if (typeof jsType === `undefined`) {
    return "Nothing, but I didn't set that.";
  }
  if (jsType === null) {
    return "Nothing, and I did set that.";
  }
  if (Array.isArray(jsType)) {
    return "I order you to be indexed.";
  }
  if (typeof jsType === `object`) {
    return "Anybody got the key?";
  }

};

const rounder = (float, roundSetting) => {
  if (roundSetting === `up`) {
    return Math.ceil(float)
  }
  if (roundSetting === `down`) {
    return Math.floor(float)
  }
  if (roundSetting === `honest`) {
    return Math.round(float)
  }
};

const formatName = (first, last) => {
  const captialize = str =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return `${captialize(first)} ${captialize(last)}`;
};

const extractDomain = (email) => {
  let domain = '';
  const at = email.indexOf('@');
  domain = email.slice((at + 1), email.length);
  return domain;
};

const startsWithVowel = (str) => {
  if (str[0].toLowerCase() === 'a' || str[0].toLowerCase() === 'e' || str[0].toLowerCase() === 'i' || str[0].toLowerCase() === 'o' || str[0].toLowerCase() === 'u') {
    return true
  }
  else {
    return false
  }

};

console.log(startsWithVowel('Elephant'))



const rotate = (str, num) => {
  if (!str || num <= 0) return str;
  const arr = str.split('');
  for (let i = 0; i < num; i++) {
    arr.unshift(arr.pop());
  }
  return arr.join('');
};

console.log(rotate("hello", 1));


module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
