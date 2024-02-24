// const coding = ["java","python","php","javascript","cpp"]

// const value = coding.forEach((items)=>{
//     console.log(items)
//     return items
// })

// console.log(value)

// const nums = [1,2,3,4,5,6,7,8,9,10]
// const result = nums.filter((items)=>{
//     return items>5
// })
// console.log(result)

const books = [
    {title:"c programming",genere:"programming", publish:"1970",edition:"2005"},
    {title:"java",genere:"programming", publish:"1976",edition:"2009"},
    {title:"computer networking",genere:"networking", publish:"1996",edition:"2019"},
    
]

let result = books.filter((items)=> items.genere==="networking")
result = books.filter((items)=>{ return items.edition >= 2000})
console.log(result)