
console.log('-------------------------------------------------------------------');

// Primitive

// string
const name = 'John Doe';
console.log(typeof(name), '/', name);
console.log('-------------------------------------------------------------------');

// number
const age = 22;
console.log(typeof(age), '/', age);
console.log('-------------------------------------------------------------------');

// boolean
const hasKids = true;
console.log(typeof(hasKids), '/', hasKids);
console.log('-------------------------------------------------------------------');

// null
const car = null;
console.log(typeof(car), '/', car);
console.log('-------------------------------------------------------------------');

// undefined 
let test;
console.log(typeof(test), '/', test);
console.log('-------------------------------------------------------------------');

// symbol
const sym = Symbol();
console.log(typeof(sym), '/', sym);
console.log('-------------------------------------------------------------------');

// Reference types - Objects

// array
const hobbies = ['movies', 'music'];
console.log(typeof(hobbies), '/', hobbies);
console.log('-------------------------------------------------------------------');

// object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
console.log(typeof(address), '/', address);
console.log('-------------------------------------------------------------------');

// dates
const today = new Date();
console.log(typeof(today), '/', today);
console.log('-------------------------------------------------------------------');