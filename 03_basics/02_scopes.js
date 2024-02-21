let a = 300
if(true){
    let a = 20
    const b = 40
    // console.log("Inner: ",a)
}
// console.log("Outer: ",a)


function one(){
    const username = "Basudev"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

if(true){
    const username = "Basudev"
    if(true){
        const website = "google"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)


// *****************************************//

console.log(addOne(2))

function addOne(num){
    return num + 1
}




console.log(addTwo(3))
const addTwo = function(num){
    return num + 2
}
