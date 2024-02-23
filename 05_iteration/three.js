// for of

const arr = [5,6,1,3,9,0,4]
for(const num of arr){
    // console.log(num)
}

const greeting = "Namaste"
for(const char of greeting){
    // console.log(`Each character are ${char}`);
}

const map = new Map()
map.set("NP","Nepal")
map.set("IN","India")
map.set("USA","United States of America")
map.set("NP","Nepal")

// console.log(map)

for(const [key,value] of map){
    console.log(key,":-",value)
}