/**
 * Floating Point Error 🤯
 * 
 * It all comes down to that there is only one number type in JavaScript:
 * double-precision 64-bit binary format IEEE 754 value.
 * 
 * “Floating numbers can’t store properly all decimal numbers, 
 * because they store stuff in binary”.
 * 
 * It’s not a JavaScript problem, but more general, a computer one.
 * It’s worth noting that responsibility for formatting numbers is on developers, 
 * e.g. how they are displayed to the end-user. 
 * 
 * In complex payment systems it’s crucial to understand business
 * logic behind and how many decimals should be shown. (hopefully all the
 * calculations are done under the hood in the BE 😅)
 * 
 * There are native methods to render numbers in a particular way, but I highly recommend Numeral.js.
 * 
 * http://numeraljs.com/
 * 
 * It's an amazing library to work with numbers in JS which is not straightforward 🙈
 */
const add = (a, b) => a + b;

const firstNumber = 0.1;
const secondNumber = 0.2;

add(firstNumber, secondNumber); // 0.30000000000000004 WTH JS? :D
