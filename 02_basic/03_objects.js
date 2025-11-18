 /// constcutor use singleton pattern ad literal dont use singleton pattern///
// Object Literal
const person1 = {
    name: 'Alice',
    ageb:30,
    Email:'gmail.com',
    gender:'female'
};
// console.log(person1);

const person2 = {
    name: 'Bob',
    age:25,
    Email:'yahoo.com',
    gender:'male'
};
// console.log(person2);

// // Accessing properties
// console.log(person1.name); // Alice
// console.log(person2['age']); // 25

// // Modifying properties
// person1.age = 31;
// person2['Email'] = '    outlook.com';
// console.log(person1); // { name: 'Alice', age: 31, Email: 'gmail.com', gender: 'female' }      



// const mysym = Symbol('id')
// const  jsuser = {
//     [mysym]:12345,
//     name:'john',
//     age:40,
//     email:'vivekananf   @gmail.com',
//     greeting: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// };
// console.log(jsuser);
// console.log(jsuser[mysym]); // 12345
// console.log(jsuser.email);
// console.log(jsuser.greeting());
// console.log(jsuser.gender);

// jsuser.name = 'john doe';
// jsuser.age = 41;
// jsuser.email = 'vivekananfd @yahoo.com';
// Object.freeze(jsuser);
// console.log(jsuser); // { [Symbol(id)]: 12345, name: 'john doe', age: 41 }

// jsuser.greeting = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };
// jsuser.greeting(); // Hello, my name is john doe and I am 41 years old.
// console.log(greeting); // ReferenceError: greeting is not defined



// const validuser = {
//     username:'admin',
//     password:'admin123',    
    
// }
//  console.log(validuser);
    


const user ={
    username:'user1',
    password:'password1',
}
const {username :Instructor} = user;
console.log(Instructor); // undefined

