let val;

// number to string
val = String(5);
val = String(4+4);

// bool to string
val = String(true);

// date to string
val = String(new Date());

// array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// string to number
val = Number('5');

// bool to number
val = Number(true);
val = Number(false);

// null to number
val = Number(null);

// string to number
val = Number('hello');

// array to number
val = Number([1,2,3,4]);

// parseInt()
val = parseInt('100.30');

// parseFloat()
val = parseFloat('100.30');

// output
console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed());

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);