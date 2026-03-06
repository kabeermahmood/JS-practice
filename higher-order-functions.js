// ============================================================
//  HIGHER-ORDER FUNCTIONS — Functions that take other functions
//  as arguments or return functions.
// ============================================================

// ----- 1. mapArray — recreating Array.prototype.map() -----

function mapArray(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    // .map() passes three things to the callback: element, index, original array
    result.push(callback(array[i], i, array));
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5];

const doubled = mapArray(numbers, (num) => num * 2);
console.log("--- mapArray ---");
console.log("Original:", numbers);  // [1, 2, 3, 4, 5]
console.log("Doubled: ", doubled);  // [2, 4, 6, 8, 10]

const squared = mapArray(numbers, (num) => num ** 2);
console.log("Squared: ", squared);  // [1, 4, 9, 16, 25]

const names = ["mujahid", "ahmed", "sara"];
const capitalized = mapArray(names, (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
});
console.log("Capitalized:", capitalized); // ["Mujahid", "Ahmed", "Sara"]

const withIndex = mapArray(names, (name, index) => `${index + 1}. ${name}`);
console.log("With index: ", withIndex); // ["1. mujahid", "2. ahmed", "3. sara"]

// ----- 2. filterArray — recreating Array.prototype.filter() -----

function filterArray(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    // If the callback returns a truthy value, keep the element
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

const scores = [85, 42, 93, 67, 55, 78, 30, 99];

const passing = filterArray(scores, (score) => score >= 60);
console.log("\n--- filterArray ---");
console.log("All scores:", scores);    // [85, 42, 93, 67, 55, 78, 30, 99]
console.log("Passing:   ", passing);   // [85, 93, 67, 78, 99]

const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log("Even from [1-5]:", evenNumbers); // [2, 4]

const longNames = filterArray(
  ["Ali", "Muhammad", "Sara", "Abdulrahman"],
  (name) => name.length > 4
);
console.log("Long names:", longNames); // ["Muhammad", "Abdulrahman"]

const evensAtEvenIndex = filterArray(
  [10, 15, 22, 33, 44, 51],
  (num, index) => num % 2 === 0 && index % 2 === 0
);
console.log("Even nums at even index:", evensAtEvenIndex); // [10, 22, 44]

// ----- Bonus: Chaining mapArray + filterArray together -----

console.log("\n--- Chaining map + filter ---");

const products = [
  { name: "Laptop", price: 999 },
  { name: "Phone", price: 699 },
  { name: "Tablet", price: 450 },
  { name: "Watch", price: 250 },
  { name: "Earbuds", price: 120 },
];

// Step 1: Filter expensive items (> $300)
const expensive = filterArray(products, (p) => p.price > 300);

// Step 2: Map to readable strings
const labels = mapArray(expensive, (p) => `${p.name}: $${p.price}`);

console.log("Expensive items:", labels);
// ["Laptop: $999", "Phone: $699", "Tablet: $450"]
