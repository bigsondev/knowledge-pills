
// Create an array of 3 items using [ ] brackets
const friends = ["John", "Joe", "Jane"];

// Here we have a "collection" of friends declared as an array
console.log(friends); // ["John", "Joe", "Jane"]

// Array is indexed from 0 and not from 1
// 0 -> "John", 1 -> "Joe", 2 -> "Jane"

// Access particular friend from an array
console.log(friends[0]); // "John"
console.log(friends[1]); // "Joe"
console.log(friends[2]); // "Jane"
console.log(friends[3]); // undefined (we don't have 4th item)

// Get length of the array
console.log(friends.length); // 3 (as we have 3 items in the friends array)

// Safe way to get the last item of an array 
console.log(friends[friends.length - 1]) // "Jane"

// Directly change an array item
friends[0] = 'Pedro';
console.log(friends); // ["Pedro", "Joe", "Jane"]

// Directly push to an array
friends.push('Max');
console.log(friends); // ["Pedro", "Joe", "Jane", "Max"]

// Directly remove the item from an array
friends.pop();
console.log(friends); // ["Pedro", "Joe", "Jane"]


// 1. map() - Assignment: Multiply all numbers by 2.
const numbers = [5, 10, 15, 20];
const multipliedNumbers = numbers.map((number) => number * 2);

console.log(numbers); // [5, 10, 15, 20];
console.log(multipliedNumbers); // [10, 20, 30, 40]

// 2. filter() - Assignment: Remove all numbers less or equal to 10.
const numbers = [5, 10, 15, 20];
const filteredNumbers = numbers.filter((number) => number > 10);

console.log(numbers); // [5, 10, 15, 20]
console.log(filteredNumbers); // [15, 20]

// 3. reduce() - Assignment: Sum all numbers.
const numbers = [5, 10, 15, 20];
const sum = numbers.reduce((accumulator, number) => accumulator += number, 0);

console.log(sum); // 50

// 4. indexOf() - Assignment: Find index of number 15.
const numbers = [5, 10, 15, 20];
const numberToFind = 15;
const numberToFindIndex = numbers.indexOf(numberToFind);

console.log(numberToFindIndex); // 2, remember that array is indexed from 0

// 5. every() - Assignment: Check if all numbers are greater or equal to 10.
const numbers = [5, 10, 15, 20];
const minimumValue = 10;
const isBigEnough = numbers.every((number) => number >= minimumValue);

console.log(isBigEnough); // false

// 6. some() - Assignment: Check if any number is greater or equal to 10.
const numbers = [5, 10, 15, 20];
const minimumValue = 10;
const isBigEnough = numbers.some((number) => number >= minimumValue);

console.log(isBigEnough); // true

// 7. includes() - Assignment: Check if number 15 is included in the numbers array.
const numbers = [5, 10, 15, 20];
const numberToFind = 15;
const isNumberIncluded = numbers.includes(numberToFind);

console.log(isNumberIncluded); // true

// BONUS
const myAnimals = ['dog', 'cat'];
const myFriendAnimals = ['bird', 'python', 'elephant'];
// Cool way to join arrays together using spread operator
const ourAnimals = [...myAnimals, ...myFriendAnimals];

console.log(ourAnimals); // ["dog", "cat", "bird", "python", "elephant"]

// Cool way to fill in array from something using .from method
const numbers = Array.from({ length: 10 }, (_, key) => key);

console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const nestedArray = [[1, 2], [3, 4], [5, 6]];
// Cool way to flatten an array using .flat method
const flatArray = nestedArray.flat();

console.log(flatArray); // [1, 2, 3, 4, 5, 6]