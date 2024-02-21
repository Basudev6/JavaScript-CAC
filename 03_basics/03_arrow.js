const user ={
    username: "Basu",
    age: 23,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "ram"
// user.welcomeMessage()

// console.log(this)

// function coke(){
//    let name = "sprite"
//     console.log(this.name)

// }
// coke()

// const coke = function(){
//    let name = "sprite"
//    console.log(this.name)
// }
// coke()

// const coke = () =>{
//     let name = "sprite"
//     console.log(this)
// }
// coke()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"ram"})


console.log(addTwo(5,2))