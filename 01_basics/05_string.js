const name = "Basudev"
const repoCount = 10

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const surname = new String("Neupane")
console.log(surname[0])
console.log(surname.__proto__)

console.log(surname.length)
console.log(surname.toUpperCase())
console.log(surname.charAt(4))
console.log(surname.indexOf('e'))

const newString = surname.substring(0,4)
console.log(newString)

const anotherString = surname.slice(-5,7)
console.log(anotherString)

const one = "     ram    "
console.log(one.trim())

const url = "https://basudev%20neupane.com.np"
console.log(url.replace('%20','-'))
console.log(url.includes('basu'))
console.log(url.split(':'))