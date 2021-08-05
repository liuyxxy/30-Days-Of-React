const everything = [0, 1, 'apples', 'bananas', 0.00001,
    {country: 'Finland'}, 
    {anotherarr: ['hi', 'nice']}]
console.log(everything)
console.log("Length of array everything is", everything.length)

let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.replace(/[^a-zA-Z0-9 ]/g, "").split(" ") //removes special characters as well

console.log(words)

const change = [0, 1, 2, 3, 4, 5]
change[3] = 4

console.log(change)

const zeroes = Array(5).fill(0)

console.log(zeroes)

const first = [0, 1, 2]
const second = [3, 4, 5]
const third = first.concat(second)

console.log("third list = ", third)

third.indexOf(6) != -1
    ? console.log("wahoo it exists")
    : console.log("damn it doesn't exist")
console.log(change.indexOf(4))
console.log(third.slice(2, 7))