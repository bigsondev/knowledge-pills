// 1. global variable 👎 🙀 😱
iAmGlobal = 42;

// ❌ poullution of global scope, error-prone, highly not recommended
console.log(window.iAmGlobal); // 42

// 2. var - global/function scope, before ES6 👎 🙀
// function scope, not leaking outside, but still old approach
var hello = () => {
  var message = 'Hello World';

  if (message) {
    var message = 'I am still changed';
  }

  console.log(message);
};

var vulnerable = 42;
var vulnerable = 43;
var vulnerable = 44;

// ❌ doesn't have a block scope, but still being changed inside of the "hello" function
hello(); // "I am still changed"

// ❌ can be re-declared and updated and still global 🙀
console.log(window.vulnerable); // 44

// 3. let - block scope, can't be redeclared, but can be updated 👎
let meaningOflife = 42;
meaningOflife = 43;

// ❌ can be and updated, not fully functional, declarative approach
console.log(meaningOflife); // 43

// 4. const - block scope, can only be declared once 👍
const meaningOfLife = 42;
meaningOfLife = 43; // "Uncaught TypeError: Assignment to constant variable."

// ✅ won't execute due to the above error
console.log(meaningOflife);

/**
 * Best Practices
 *
 * - Always try to use const as it's a declarative, functional approach
 * - You can still change nested properties of const variable, but you should avoid that
 * - Avoid loops, changing conditions too much and minimize let usage to bare minimum
 * - Almost never use global/var variables as they are the most dangerous and not recommended
 * - Stick to semantic, functional programming with immutability in mind, free of side effects,
 * pure functions
 *
 * Example below.
 */
const multiply = (a, b) => a * b;

const price = 100;
const numberOfPeople = 5;

const amount = multiply(price, numberOfPeople);

console.log(amount); // 500

// It just feels good with the const 😎
