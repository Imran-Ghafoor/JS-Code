let score = "imran"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// "true" => 1; false => 0

let isLogedIn = "khan"
let booleanIsLogedIn = Boolean(isLogedIn)
//console.log(booleanIsLogedIn)

// 1 => true ; 0 => false
// "" empty-string => false
// "khan" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// *****************************Opertaions******************************

let value = 3
let negValue = -value
// console.log(negValue);


// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "Hello"
let str2 = " imran"
// console.log(str1+str2);

//Problem is here>>

// console.log("1" + 2);  //>>12
// console.log(1 + "2");  //>>12
// console.log("1" + 2+3); //>>123
// console.log(1 + 2+ "3"); // >>33

// console.log(+ true); // usable
// console.log(true +); //not use

let gameCounter = 100
gameCounter++ ;
++gameCounter;   // prefix postfix  prefix>> increment value first >> postfix>> value increment after search
console.log(gameCounter);
