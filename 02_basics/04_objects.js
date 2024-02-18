// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "hari"

// console.log(tinderUser)

const regularUser = {
    email:"someone@gmail.com",
    name:{
        firstname:"ramprasad",
        lastname:"dhakal"
    }
}
// console.log(regularUser.name.firstname)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3= Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id:13,
        name:"ram"
    },
    {
        id:1234,
        name:"shyam"
    },
    {
        id:12923,
        name:"hari"
    }
]

// console.log(users[1].name)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('id'))
