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
// console.log(loginUserMessage("Basu"))

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(500,200,100,50,40))

const user = {
    username: "Basudev",
    age : "23"
}

function handleObject(anybody){
    console.log(`Username is ${anybody.username} and age is ${anybody.age}`)
}
// handleObject(user)
handleObject({
    username:"ram",
    age: 20
})

const array = [100,900,150,200,400]
function returnSecondArray(getArray){
    return getArray[1]
}

// console.log(returnSecondArray(array))

console.log(returnSecondArray([10,20,40,50]))
