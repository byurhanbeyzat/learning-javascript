const firstName = 'William';
const lastName = 'Johnson';
const age = 22;
const str = 'Hello, there my name is Byurhan.';
const tags = 'web developer,web designer,ui designer';


let val;

val = firstName + lastName;

// concatenation
val = firstName + ' ' + lastName;

// append
val = 'Byurhan ';
val += 'Beyzat';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;


// escaping
val = 'That\'s awesome, I can\'t wait';

// length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('m');
val = firstName.lastIndexOf('m');

// charAt() - find which is the inserted numbers character
val = firstName.charAt('2');

// get last character - this always gives you the last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice() - alternative to substring
val = firstName.slice(0, 4);

// split()
val = str.split(' '); // make array from string after spaces
val = tags.split(','); // make array from string after comas

// replace()
val = str.replace('Byurhan', 'Byurri');

// includes() - check is the written string is included 
val = str.includes('Hello');




console.log(val);  // output of val