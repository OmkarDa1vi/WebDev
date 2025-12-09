// You have an array of objects representing people with their names and ages. You need to create an array of just the names.Use the map function to create an array of names from the people array.
const people = [
  { name: "Omkar", age: 23 },
  { name: "Raj", age: 30 },
  { name: "Aditya", age: 35 },
  { name: "Samir", age: 40 },
];
const names = people.map((person) => person.name);
console.log(names);

// Write a function `getAdults` that takes an array of people objects (each with a name and age property) and returns an array of names of people who are 18 or older.
function getAdults(people) {
  return people
    .filter((person) => person.age >= 18)
    .map((person) => person.name);
}
const peopleArray = [
  { name: "Omkar", age: 23 },
  { name: "Raj", age: 18 },
  { name: "Aditya", age: 35 },
  { name: "Samir", age: 15 },
];
const adultNames = getAdults(peopleArray);
console.log(adultNames);

//  Implement a function `findMax` that returns the maximum number in an array using the `reduce` method without using ? operator.
function findMax(arr) {
  return arr.reduce((max, current) => {
    if (current > max) {
      return current;
    } else {
      return max;
    }
  }, arr[0]);
}
const numbersArray = [3, 5, 7, 2, 8, -1, 4];
const maxNumber = findMax(numbersArray);
console.log(maxNumber);

// Create a function `doubleNumbers` that takes an array of numbers and returns a new array with each number doubled.
function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}
const nums = [1, 2, 3, 4, 5];
const doubled = doubleNumbers(nums);
console.log(doubled);

// Create a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray);

// Write a function `mergeObjects` that takes an array of objects and merges them into a single object. If the same key appears in multiple objects, the value from the last object with that key should be used.
function mergeObjects(arr) {
  return arr.reduce((merged, current) => {
    return { ...merged, ...current };
  }, {});
}
const objectsArray = [
  { a: 1, b: 2 },
  { b: 3, c: 4 },
    { d: 5 },
];
const mergedObject = mergeObjects(objectsArray);
console.log(mergedObject);