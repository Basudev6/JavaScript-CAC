// singleton
// Object.create

// object literals
const mySym = Symbol("key1")
const jsUser = {
    name:"Ram",
    [mySym]:"mykey1",
    "surname":"Neupane",
    age:23,
    email:"ram@google.com",
    isLoggedIn:false,
    lastLogInDays:["Saturday","sunday"]
}

// console.log(jsUser.name)
// console.log(jsUser["surname"])
// console.log(typeof(jsUser[mySym]))

jsUser.email = "ram123@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "ram@yahoo.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user")
}
jsUser.greetingTwo = function(){
    console.log(`hello ${this.name}`)
}


console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())