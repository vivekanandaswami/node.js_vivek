const marvelHeroes = ["thor", "ironman", "spiderman", "hulk"];
console.log(marvelHeroes);

// elements
console.log(marvelHeroes[0]); // thor
console.log(marvelHeroes[2]); // spiderman

// Modifying elements
marvelHeroes[1] = "captain america";
console.log(marvelHeroes); // ["thor", "captain america", "spiderman", "hulk"]

const dcHeroes = new Array("batman", "superman", "wonder woman");
console.log(dcHeroes);

const all_new_heroes = marvelHeroes.concat(dcHeroes);
console.log(all_new_heroes); // Merged array of marvel and dc heroes

const numArray = [10, 20, 30, 40, 50];
const anotherNumArray = numArray.flat(Infinity)


console.log(Array.isArray("numArray")); // true
console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']
//console.log(Array.from{(name: "John", age: 25})); // [] ///  interesting case

console.log(numArray.includes(30)); // true
console.log(numArray.includes(60)); // false


let scors1 = [100, 200, 300];
let scors2 = [400, 500, 600];
let scors3 = [700, 800, 900];
console.log(Array.of(scors1, scors2, scors3)); // [[100, 200, 300], [400, 500, 600], [700, 800, 900]]

let mergedScores = scors1.concat(scors2, scors3);
console.log(mergedScores); // [100, 200, 300, 400, 500, 600]

