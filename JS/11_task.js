// function to divide 2 numbers and return error message using try catch
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  } catch (error) {
    return error.message;
  }
}
console.log(divide(10, 2));
console.log(divide(10, 0));

// function to replace all occurrences of a word in a given string and return the postion of the first occurrence
function replaceWord(str, oldWord, newWord) {
  const str =
    "Javascript is a programming language. Javascript is widely used.";
  const firstOcc = str.indexOf(oldWord);

  const pattern = new RegExp(oldWord, "g");
  const newStr = str.replace(pattern, newWord);
  return { newStr, firstOcc };
}
const result = replaceWord(
  "Javascript is a programming language. Javascript is widely used.",
  "Javascript",
  "JS",
);
console.log(result.newStr);

// Write a function `filterOddNumbers` that takes an array of numbers and returns a new array containing only the odd numbers.
function filterOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = filterOddNumbers(numbers);
console.log(oddNumbers);