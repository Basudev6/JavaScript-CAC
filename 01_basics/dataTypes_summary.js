// premitive

// 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId)

// let bigNumber = 2993430020394859839403n 

// Reference (Non-Premitive)

// Array, Objects, Function

const heros = ["shaktiman","naagraj","doga"]
let myObj={
    name : "Basu",
    age : "23",

}

const fun = function(){
    console.log("hello world")
}