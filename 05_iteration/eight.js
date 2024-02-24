const number = [1,2,3,4]

const totalNumber = number.reduce(function(accu,curval){
    // console.log(`accu: ${accu} and current value : ${curval}`)
    return accu+curval
},0)
// console.log(totalNumber)

const shoppingCart = [
    {
        course:"javascript",
        price: 1500
    },
    {
        course:"python",
        price:2000
    },
    {
        course:"ccna",
        price:4000

    }

]

const totalPrice = shoppingCart.reduce((accu,items)=> accu+items.price,0)
console.log(totalPrice)