// different data types in javascript //
// 7 types of data types in javascript //


// primitive data types// => string, number, boolean, undefined, null, bigint, symbol//
           
// //let name = "vivek" // string datatype//
// let age = 25 // number datatype//
// let isStudent = true // boolean datatype//
// let address // undefined datatype//
// let phoneNumber = null // null datatype// or standalone value//
// let bigintNumber = 1234567890123456789012345678901234567890n // bigint datatyp e//
// let symbolValue = Symbol("uniqueIdentifier") // symbol datatype//


//  JAVASCERIPT IS DYNAMICALLY TYPED LANGUAGE//
// WE DONT NEED TO SPECIFY DATA TYPE WHILE DECLARING A VARIABLE//
// DATA TYPE WILL BE ASSIGNED AUTOMATICALLY BASED ON THE VALUE//


// (Reference)or non-primitive data types// => object, array, function//

// let person = {  // object datatype//
//     name: "vivek",
//     age: 25,
//     isStudent: true
// }
// array datatype//
// let colors = ["red", "green", "blue"] // array datatype//
// function datatype//
// function greet() {  // function datatype//
//     console.log("Hello!") 
// }





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Stack (primitive) vs Heap (reference) memory//


let myYotubeChannel = "vivek tech" // stored in stack memory//
let anotherChannel = myYotubeChannel // anotherChannel stores the value of myYotubeChannel in stack memory//
myYotubeChannel = "vivek coding" // updating myYotubeChannel value//
console.log(myYotubeChannel) // output: vivek coding//
console.log(anotherChannel) // output: vivek tech//


let myName = "vivek"
let anothername = myName
myName = "john"
console.log(myName) // output: john//
console.log(anothername) // output: vivek//

