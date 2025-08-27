// A single-line comment
const MAX_COUNT = 10;

/*
 * A multi-line
 * comment
 */
function calculateSum(a, b) {
  let result = 0;
  for (let i = 0; i < MAX_COUNT; i++) {
    result += a + b;
  }
  return result;
}

const numbers = [10, 20, 30];
const doubledNumbers = numbers.map((num) => num * 2);

console.log("Doubled Numbers:", doubledNumbers);

const sum = calculateSum(5, 7);
console.log("Calculated Sum:", sum);

// Example of conditional logic
const isValid = true;
if (isValid) {
  console.log("Data is valid.");
} else {
  console.log("Data is invalid.");
}

// String interpolation
const greeting = "JavaScript";
console.log(`Hello, ${greeting}!`);
