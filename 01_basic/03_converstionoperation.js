let score = 33
console.log(typeof (score))
console.log("Score as number: " + score)
let valueINumber = Number(score)
console.log(typeof (valueINumber))
console.log(valueINumber)

//"33" => 33//
//"33abc" => NaN//
//true => 1//
//false => 0//
//null => 0//
//undefined => NaN//



let isloggedIn = "vivek"

let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn)

//1 => true to 1 , false to 0//
//null => 0//
//undefined => NaN//
//string => if string is valid number then convert to that number otherwise NaN//
//vivek => true//
//"" => false//

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)