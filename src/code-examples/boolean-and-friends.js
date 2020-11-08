// boolean primitive type
const iAmTruthy = true;
const iAmFalsy = false;

console.log(iAmTruthy); // true
console.log(iAmFalsy); // false

console.log(typeof iAmTruthy); // "boolean"
console.log(typeof iAmFalsy); // "bolean"

console.log(iAmTruthy.toString()); // "true"

// Boolean wrapping object
// ✅ GOOD PRACTICE
const iAmTruthy = Boolean(true);
// ❌ BAD PRACTICE - don't use the "new" keyword on Boolean as it introduces unwanted effects and slows down the execution
const iAmFalsy = new Boolean(false);

console.log(iAmTruthy); // true
// as you can see, it returned true which is not an expected result
console.log(iAmFalsy); // true - as it's an object and not a boolean type anymore

console.log(typeof iAmTruthy); // "boolean"
console.log(typeof iAmFalsy); // "object"

// && (AND) operator
const exampleTruthyAndOperator = true && true && true;
const exampleFalsyAndOperator = true && true && false;
const exampleAndOperator = true && true && 5;

console.log(exampleTruthyAndOperator); // true
console.log(exampleFalsyAndOperator); // false
console.log(exampleAndOperator); // 5

// || (OR) operator
const exampleOrOperatorFirstValue = true || false || 5;
const exampleOrOperatorMiddleValue = false || 5 || true;
const exampleOrOperatorLastValue = false || false || true;

console.log(exampleOrOperatorFirstValue); // true
console.log(exampleOrOperatorMiddleValue); // 5
console.log(exampleOrOperatorLastValue); // true

// ! (NOT) operator
const iAmOppositeOfTrue = !true;

console.log(iAmOppositeOfTrue); // false

// falsy values
const revealTheLie = (falsyValue) => console.log(Boolean(falsyValue));

// empty/non-existing values
revealTheLie(null); // false
revealTheLie(undefined); // false

// falsy numbers
revealTheLie(0); // false
revealTheLie(0n); // false

// falsy strings
revealTheLie(''); // false

// falsy false?
revealTheLie(false); // false

// falsy values type casting in the if statement
const falsyValue = null || undefined || false || 0 || 0n || '';

console.log(falsyValue); // "" -> empty string

// "Hello else" string will be logged to the console
if (falsyValue) {
  console.log('Hello falsyValue');
} else {
  console.log('Hello else');
}

// truthy values
const truthyObject = {};
const truthyArray = [];

// "I am really truthy object!" will be logged to the console
if (truthyObject) {
  console.log('I am really truthy object!');
}

// "I am really truthy array!" will be logged to the console
if (truthyArray) {
  console.log('I am really truthy array!');
}

// It's often needed to compare the size/length instead
const isObjectEmpty = Object.keys(truthyObject).length === 0;
const isArrayEmpty = [].length === 0;

console.log(isObjectEmpty); // true
console.log(isArrayEmpty); // true

// == vs ===
// ❌ BAD PRACTICE - Automatic type conversion
console.log(false == ''); // true
console.log(null == undefined); // true
console.log(0 == '0'); // true
console.log(false == '0'); // true

// ✅ GOOD PRACTICE - No type conversion is done
console.log(false === ''); // false
console.log(null === undefined); // false
console.log(0 === '0'); // false
console.log(false === '0'); // false

// examples
const myAge = 27;
// greather than operator - is "myAge" greater than 30?
const isAfterThirty = myAge > 30;
// less than operator - is "myAge" less than 30?
const isBeforeThirty = myAge < 30;

// Both conitions are true, "I am truthy!" will be logged to the console
if (myAge === 27 && isBeforeThirty) {
  console.log('I am truthy!');
}

// We need one condition to be true, "I am truthy!" will be logged to the console
if (myAge === 27 || isAfterThirty) {
  console.log('I am truthy!');
}

// Using greater than or equal to and less than or equal to
// Both conditions are true, "I am truthy!" will be logged to the console
if (myAge >= 20 && myAge <= 30) {
  console.log('I am truthy!');
}

// Using not equal value or not equal type to check if my age is different from 30
// "I am truthy!" will be logged to the console
if (myAge !== 30) {
  console.log('I am truthy!');
}

// bonus
const age = 27;
const minimumAge = 18;
const isAdult = age > minimumAge;
// Ternary operator is a shorten if/else statement
const welcomeMessage = isAdult
  ? 'You seem to be an adult!'
  : 'We cannot let you in, sorry!';

console.log(welcomeMessage); // "You seem to be an adult!"

const human = { name: 'Adrian' };

console.log(human.name); // "Adrian"
console.log(human.name.age.toString()); // Uncaught TypeError: Cannot read property 'toString' of undefined"
// Optional chaining allows us to avoid an error
console.log(human?.name?.age?.toString()); // undefined

const zero = 0 || 5;

// 5 is logged to the console as 0 was treated as a falsy value
console.log(zero); // 5

const properZero = 0 ?? 5;

// Using nullish coalescing operator, we get a 0 as it's only looking for null or undefined,
// not all possible falsy values
console.log(properZero); // 0
