const data = new Date(); // Create a new Date object with the current date and time
console.log(data); // Output the current date and time

const specificDate = new Date('2023-01-15T10:30:00');
console.log(specificDate); // Output the specific date and time
 let timestamp = specificDate.getTime(); // Get the timestamp (milliseconds since January 1, 1970)
console.log(timestamp); // Output the timestamp

specificDate.setFullYear(2024); // Change the year to 2024
console.log(specificDate); // Output the updated date

let dateString = specificDate.toDateString(); // Convert to a readable date string
console.log(dateString); // Output the date string

let isoString = specificDate.toISOString(); // Convert to ISO string format
console.log(isoString); // Output the ISO string

let day = specificDate.getDate(); // Get the day of the month
let month = specificDate.getMonth() + 1; // Get the month (0-11, so add 1)
let year = specificDate.getFullYear(); // Get the full year
console.log(`Date: ${day}/${month}/${year}`); // Output the formatted date

let hours = specificDate.getHours(); // Get the hours
let minutes = specificDate.getMinutes(); // Get the minutes
let seconds = specificDate.getSeconds(); // Get the seconds
console.log(`Time: ${hours}:${minutes}:${seconds}`); // Output the formatted time   