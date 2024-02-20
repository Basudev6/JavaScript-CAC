function myName() {
    console.log("Basudev")
}

// myName()

// function sum(num1, num2){
//     console.log(num1+num2)
// }

function sum(num1, num2){
    // const result = num1+num2
    // return result
    return num1+num2
}
const result = sum(5,4)
// console.log("Result:",result)

function loginUserMessage(username="ram"){
    return `${username} just logged in`
}
console.log(loginUserMessage("Basu"))