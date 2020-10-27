const animals = ['dog', 'cat', 'bird', 'dog', 'bird', 'elephant', 'duck', 'duck'];

// 1. Using Set (collection of unique values) + spread operator
const uniqueAnimals = [...new Set(animals)];
console.log(uniqueAnimals); // -> ["dog", "cat", "bird", "elephant", "duck"]

// 2. Using a filter method to exclude duplicated animals
const uniqueAnimals = animals.filter(
  (animal, index, animals) => animals.indexOf(animal) === index
);
console.log(uniqueAnimals); // -> ["dog", "cat", "bird", "elephant", "duck"]

// 3. Using a reduce for object of unique key value pairs, then Object.keys or Object.values
const uniqueAnimals = Object.keys(
  animals.reduce((accumulator, animal) => {
    accumulator[animal] = animal;

    return accumulator;
  }, {})
);
console.log(uniqueAnimals); // -> ["dog", "cat", "bird", "elephant", "duck"]
