const accountId = 14456;
let accountEmail = "imran112@gmail.com";
var accountPassword = "45678";

accountCity = "Lahore";
let accountState;

//accountId = 12345 / not allowed / const not update

accountEmail = "khan123@gmail.com"
accountPassword= "786786"
accountCity ="Islamabad"

console.log(accountId)

/*
prefer not to use var variable
because of issue in block scope and function scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState] )