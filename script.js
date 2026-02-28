const fullName = "Kabeer";
const birthYear = 2000;
const isStudent = true;
let currentScore = 95;
let favoriteLanguage = "JavaScript";

console.log("--- Variables ---");
console.log("Name:", fullName);
console.log("Birth Year:", birthYear);
console.log("Is Student:", isStudent);
console.log("Current Score:", currentScore);
console.log("Favorite Language:", favoriteLanguage);

currentScore = 100;
favoriteLanguage = "TypeScript";
console.log("Updated Score:", currentScore);
console.log("Updated Language:", favoriteLanguage);

function sum(a, b) {
  return a + b;
}

console.log("\n--- Sum Function ---");
console.log("sum(5, 3) =", sum(5, 3));
console.log("sum(10, -4) =", sum(10, -4));
console.log("sum(0, 0) =", sum(0, 0));

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("\n--- Reverse String Function ---");
console.log('reverseString("hello") =', reverseString("hello"));
console.log('reverseString("JavaScript") =', reverseString("JavaScript"));
console.log('reverseString("12345") =', reverseString("12345"));

function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log("\n--- Even or Odd Function ---");
console.log("isEvenOrOdd(4) =", isEvenOrOdd(4));
console.log("isEvenOrOdd(7) =", isEvenOrOdd(7));
console.log("isEvenOrOdd(0) =", isEvenOrOdd(0));
console.log("isEvenOrOdd(-3) =", isEvenOrOdd(-3));

// ===== Exercise 1: Array Methods (filter, map, reduce) =====

const numbers = [3, 8, 12, 5, 22, 17, 40, 6, 9, 14];

function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}

function getSum(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log("\n--- Exercise 1: Array Methods ---");
console.log("Original:", numbers);
console.log("Even only:", getEvenNumbers(numbers));
console.log("Doubled:", doubleNumbers(numbers));
console.log("Sum:", getSum(numbers));

// ===== Exercise 2: Array of Student Objects =====

const students = [
  { name: "Mujahid", age: 20, grade: 92 },
  { name: "Sara", age: 22, grade: 75 },
  { name: "Ali", age: 19, grade: 88 },
  { name: "Fatima", age: 21, grade: 65 },
  { name: "Omar", age: 23, grade: 95 },
];

function getTopStudents(arr) {
  return arr.filter((student) => student.grade > 80);
}

function getAverageAge(arr) {
  const totalAge = arr.reduce((sum, student) => sum + student.age, 0);
  return totalAge / arr.length;
}

console.log("\n--- Exercise 2: Students ---");
console.log("All students:", students);
console.log("Grade above 80:", getTopStudents(students));
console.log("Average age:", getAverageAge(students));

// ===== Exercise 3: Count String Occurrences =====

function countOccurrences(arr) {
  return arr.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

console.log("\n--- Exercise 3: Count Occurrences ---");
console.log(
  countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
);
console.log(countOccurrences(["js", "python", "js", "js", "python", "go"]));

// ===== Exercise 4: Three Loop Types (print 1–20) =====

function printWithForLoop() {
  const result = [];
  for (let i = 1; i <= 20; i++) {
    result.push(i);
  }
  return result.join(", ");
}

function printWithWhileLoop() {
  const result = [];
  let i = 1;
  while (i <= 20) {
    result.push(i);
    i++;
  }
  return result.join(", ");
}

function printWithForEach() {
  const result = [];
  Array.from({ length: 20 }, (_, i) => i + 1).forEach((num) => {
    result.push(num);
  });
  return result.join(", ");
}

console.log("\n--- Exercise 4: Loops (1 to 20) ---");
console.log("for loop:    ", printWithForLoop());
console.log("while loop:  ", printWithWhileLoop());
console.log("forEach loop:", printWithForEach());
