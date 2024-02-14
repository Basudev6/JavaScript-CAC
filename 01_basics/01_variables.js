const accountId = 12349
let accountEmail = "basudev@gmail.com"
var accountPass = "123445"
accountCity = "Bharatpur"
let accountState

// accountId = 1234

accountEmail = "hello@hello.com"
accountPass = "999999"
accountCity = "Kathmandu"

console.log(accountId);

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState])