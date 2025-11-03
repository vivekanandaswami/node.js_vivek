 console.log("2" > 1)
 console.log("02" > 1)
 console.log(2 > 1)
 console.log(2 >= 1)
 console.log(2 < 1)
 console.log(2 <= 1)
 console.log(2 == 1)
 console.log(2 != 1)
 
  // comparison with null and undefined//and we should be careful while comparing with null and undefined//
  // and we should avoid using abstract comparison operator with null and undefined//

 console.log(null > 0) // false//
 console.log(null == 0) // false//
 console.log(null >= 0) // true//
 
 console.log(undefined > 0) // false//
 console.log(undefined < 0) // false//
 console.log(undefined == 0) // false//

 console.log("2" === 1) // false//
 console.log("2" !== 1) // true//
 console.log("2"== 2) // true//
 console.log("2"!= 2) // false//

 // strict equality operator (===)//
 // type + value should be same//

 // abstract equality operator (==)//
 // only value should be same , type conversion happens if types are different//