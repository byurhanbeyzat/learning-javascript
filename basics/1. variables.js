// Variables

// var, let & const
var name = 'John';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Init var
var greeting;
console.log(greeting); // result: undefined
greeting = 'Hello';
console.log(greeting);


// letters, numbers, _, $
// can't start with number
var _name = 'John';
console.log(_name);

multi word variables
var firstName = 'John'; // camel case
var first_name = 'Sara'; // underscore
var FirstName = 'Jonathan'; // pascal case

// let
let firstName;
firstName = 'John Doe';
console.log(firstName);
firstName = 'Steve Smith';
console.log(firstName);

// const
// const firstName = 'John';
// console.log(name);
// can't reassign
// name = 'Tom';
// we must assign a value
// const greeting;

const person = {
	name: 'John',
	age: 21
}

person.name = 'Byurhan';
person.age = 22;

console.log(person);
