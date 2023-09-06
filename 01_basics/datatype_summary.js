// Primitive

// 7 types : string, Number, Boolean, null, undefined, symbal, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')    // symbol use in js liberary or framework for uniqueness
const anotherId = Symbol('123')

console.log(id === anotherId);


//Renfrence (Non Primitive)   // non-premitive returns always Function datatype

// Array, Objects, Function    // AND only function returns Object datatype

const myArray = [Imran, Khan, Ali]   //Array

let myObject{
  name: imran,
    age: 22
  city: lhr
}

const myFunction = function (){
  console.log('Hello')
}
