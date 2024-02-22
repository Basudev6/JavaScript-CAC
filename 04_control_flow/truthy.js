// const userEmail = "basu@gmail.com"
// const userEmail = ""
const userEmail = []

// if(userEmail){
//     console.log("have email address")
// }
// else{
//     console.log("Don't have email address")
// }

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0",'false'," ", [], {}, function(){}

if(userEmail.length ===0){
    console.log("Array is empty")
}

const emptyObject = {}
if(Object.keys(emptyObject).length===0){
    console.log("object is empty")
}

// Nullish coalescing Operator (??): null undefined

let val1
// val1 = 10 ?? 15
// val1 = null ?? 10
val1 = undefined ?? 15

// console.log(val1)

// Ternary operator

const price = 200
const report = price>100 ? "more than 100" : "less than 100"
console.log(report)
