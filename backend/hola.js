// Callback function example
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // Calling the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Passing `sayGoodbye` as a callback to `greet`
greet("Alice", sayGoodbye);