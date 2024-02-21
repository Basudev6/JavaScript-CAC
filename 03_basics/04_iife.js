// Immediately Invoked Function Expressions(IIFE)

(function database(){
    console.log("DB connected")
})();

( (name) => {
    console.log(`DB connected two ${name}`)
} ) ("ram")