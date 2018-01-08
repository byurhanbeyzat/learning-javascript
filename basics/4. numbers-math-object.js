const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI; // PI number
val = Math.E;
val = Math.round(2.8); // round to 3
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(4,3,5,6,1); // find min number
val = Math.max(2,5,11,2,-2,55); // find max number
val = Math.random(); // random number

val = Math.floor(Math.random() * 20 + 1); // random number - max 20

console.log(val);