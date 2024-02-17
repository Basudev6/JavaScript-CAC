// Date

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2023,1,25,5,25)
// let myCreatedDate = new Date("2023-05-12")
let myCreatedDate = new Date("01-16-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now() / 1000))  // date in second

let newDate = new Date()
console.log(newDate.getDay()) 

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))

