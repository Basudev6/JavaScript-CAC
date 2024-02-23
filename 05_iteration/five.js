// for each loop

const coding = ["java","python","php","javascript","cpp"]

coding.forEach(function (items){
    // console.log(items)
})

coding.forEach((items)=>{
    // console.log(items)
})

function printMe(items){
    console.log(items)
}
// coding.forEach(printMe)

coding.forEach( (items, index,arr)=>{
    // console.log(items, index, arr)
})

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach( (items)=>{
    console.log(items.languageName)
})