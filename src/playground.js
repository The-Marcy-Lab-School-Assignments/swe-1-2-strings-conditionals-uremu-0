const {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
} = require('./from-scratch');

// Test your functions here!


// Q1
// console.log(inches(0))

//Q2
// console.log(happyBirthdayPet('cat', 5))

//Q3 
//console.log(funTypes(8))


//Q4 
//console.log(rounder(4.9, `up`))

//Q5
console.log('uremu', 'omowale')




// Q7

const startsWithVowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  let lowercase = str[0].toLowerCase()
  //^^ initiating variables 
  if (vowels.includes(lowercase)) {
    return true
  }
  else {
    return false
  }
}

//^^ making functions


// ? is only used in normal if else
// condition ? true : false  <-- ternary