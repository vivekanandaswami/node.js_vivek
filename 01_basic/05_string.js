// const gamename = new String(    "chess"    ); // String Object
// // console.log(typeof gamename); // object
// // console.log(gamename.charAt(0)); // [String: 'chess']
// // console.log(gamename.toUpperCase()); // CHESS
// // console.log(gamename.valueOf()); // chess
// // console.log(gamename.charCodeAt(0)); // 99


// const newString = gamename.substring(0,3);
// console.log(newString); // ches

// const anotherString = gamename.slice(1,4);
// console.log(anotherString); // hes

// console.log(anotherString.trim())

// const newString2= "     hello world      ";
// console.log(newString2); // "     hello world      "
// console.log(newString2.trim()); // "hello world" (no leading or trailing spaces to remove)


// const url = "https://www.vivektech.com/about-us";
// console.log(url.replace("about-us", "contact-us")); // https://www.vivektech.com/contact-us
// console.log(url.includes("vivektech")); // true
// console.log(url.startsWith("https"));

const name1 = "vivek";
console.log(name1.at(-1)); // k
console.log(name1.charAt(name1.length - 1)); // k
console.log(name1.charCodeAt(2)); // k  
console.log(name1.length)
console.log(name1.concat(" kumar")); // vivek kumar
console.log(name1.slice(1,4)); // ive
console.log(name1.substring(2,4)); // ive
console.log(name1.toUpperCase()); // VIVEK
console.log(name1.toLowerCase()); // vivek
console.log(name1.repeat(3)); // vivekvivekvivek
console.log(name1.split("")); // [ 'v', 'i', 'v', 'e', 'k' ]
console.log(name1.indexOf("e")); // 3
console.log(name1.lastIndexOf("v")); // 2
console.log(name1.replace("vek", "nik")); // vinik
console.log(name1.includes("tek")); // false
console.log(name1.startsWith("vi")); // true
console.log(name1.endsWith("ek")); // true  