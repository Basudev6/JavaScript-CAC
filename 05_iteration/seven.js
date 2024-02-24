const number = [1,3,4,5,6,2,7,8,9]
// const result = number.map((num)=>{
//    return num+10
// })

const result = number.map((num)=> num*10).map((num)=>num+1).filter((num)=> num>=50)
console.log(result)