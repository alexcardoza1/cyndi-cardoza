






let name = 'alex'; // string literal
let age = 25 ; // 
let isApproved = false; 
let firstname = 'alex';
let person = {
    name: 'Mosh',
    age: 25
};
// dot natation
person.name = 'John';

// bracket notation
let selection = 'name';
person[selection] = 'Mary';
function greet(name, lastname) {
    console.log('Hello Pimp' + name);
}
function square(number) {
    return number * number;
}
let number = square (2);
console.log(square(2))
greet('Cyndi', 'cardoza');

console.log(person);
let selectedcolors = ['red', 'blue'];
selectedcolors[2] = 1;
console.log(selectedcolors.length);