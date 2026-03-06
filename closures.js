// ============================================================
//  CLOSURES — A function that "remembers" variables from the
//  scope where it was created, even after that scope is gone.
// ============================================================

// ----- 1. Counter that remembers its count between calls -----

function createCounter(startFrom = 0) {
  let count = startFrom;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
    reset() {
      count = startFrom;
      return count;
    },
  };
}

const counter1 = createCounter();
console.log("--- Counter 1 ---");
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.increment()); // 3
console.log(counter1.decrement()); // 2
console.log(counter1.getCount());  // 2

const counter2 = createCounter(10);
console.log("\n--- Counter 2 (starts at 10) ---");
console.log(counter2.increment()); // 11
console.log(counter2.increment()); // 12
console.log(counter2.reset());     // 10

// counter1 and counter2 each have their OWN private `count`.
// Nothing outside can touch `count` directly — that's the closure at work.

// ----- 2. Personalized greeting function factory -----

function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const saySalam = createGreeter("Assalamu Alaikum");
const sayHola  = createGreeter("Hola");

console.log("\n--- Personalized Greeters ---");
console.log(sayHello("Mujahid"));  // Hello, Mujahid!
console.log(saySalam("Ahmed"));    // Assalamu Alaikum, Ahmed!
console.log(sayHola("Carlos"));    // Hola, Carlos!

// Each greeter "closes over" its own `greeting` value.
// sayHello always remembers "Hello", saySalam always remembers "Assalamu Alaikum", etc.

// ----- 3. Rate limiter — only allows X calls, then blocks -----

function createRateLimiter(fn, maxCalls) {
  let callsMade = 0;

  return function (...args) {
    if (callsMade >= maxCalls) {
      console.log(
        `⛔ Rate limit reached! Max ${maxCalls} calls allowed.`
      );
      return undefined;
    }
    callsMade++;
    console.log(`✅ Call ${callsMade}/${maxCalls}`);
    return fn(...args);
  };
}

function sendMessage(msg) {
  return `Message sent: "${msg}"`;
}

const limitedSend = createRateLimiter(sendMessage, 3);

console.log("\n--- Rate Limiter (max 3 calls) ---");
console.log(limitedSend("Hey!"));          // ✅ Call 1/3 → Message sent
console.log(limitedSend("How are you?"));  // ✅ Call 2/3 → Message sent
console.log(limitedSend("Goodbye!"));      // ✅ Call 3/3 → Message sent
console.log(limitedSend("One more?"));     // ⛔ Rate limit reached!
console.log(limitedSend("Please?"));       // ⛔ Rate limit reached!
