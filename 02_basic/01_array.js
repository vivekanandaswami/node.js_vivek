/////////////Array ///////////
const Arr = [1, 2, 3, 4, 5];
console.log(Arr);

const myArray = new Array(10, 20, 30);
console.log(myArray[1]);    // This line will throw an error because myArray is not a function

////////////Array Methods ///////////
const fruits = ['Apple', 'Banana', 'Mango'];
fruits.push('Orange'); // Adds 'Orange' to the end of the array
console.log(fruits);

fruits.pop(); // Removes the last element ('Orange') from the array
console.log(fruits);

fruits.shift(); // Removes the first element ('Apple') from the array
console.log(fruits);

fruits.unshift('Grapes'); // Adds 'Grapes' to the beginning of the array
console.log(fruits);

const citrus = fruits.slice(1, 3); // Creates a new array with elements from index 1 to 2
console.log(citrus);

const index = fruits.indexOf('Mango'); // Finds the index of 'Mango'
console.log(index);  

fruits.splice(1, 1); // Removes 1 element at index 1
console.log(fruits);

const joinedFruits = fruits.join(', '); // Joins all elements into a string
console.log(joinedFruits);

const sortedFruits = fruits.sort(); // Sorts the array
console.log(sortedFruits);

const reversedFruits = fruits.reverse(); // Reverses the array
console.log(reversedFruits);

const numArray = [5, 2, 9, 1, 5, 6];
numArray.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(numArray); 