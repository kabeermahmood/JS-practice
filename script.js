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
