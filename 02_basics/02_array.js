const marvel_heros =["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

const newArray = [1,2,4,[0,5,3],2,[4,9,[3,1]]]
const anotherArray = newArray.flat(Infinity)
// console.log(anotherArray)

// console.log(Array.isArray("Basudev"))
// console.log(Array.from("Basudev"))
// console.log(Array.from({name:"Basu"}))   // gives empty array

let score1 = 500
let score2 = 600
let score3 = 100
console.log(Array.of(score1,score2,score3))
