const accountID = 123456;
let userName = "JohnDoe";
let accountcity = "Los Angeles";
var isActive = true;
accountcity = "New York";
userName = "vivek";
isActive = false;
//accountID = 654321; // This will cause an error because accountID is a constant//
console.table({ accountID, userName, isActive, accountcity });
/*
prefer to not use var for variable declarations
because it has function scope and block scope can lead to unexpected behavior.
Use const when you don't plan to reassign the variable
Use let when you plan to reassign the variable
Use meaningful variable names
Use camelCase for variable names


*/