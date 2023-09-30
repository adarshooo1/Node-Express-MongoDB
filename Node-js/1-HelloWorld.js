// Way 1:
console.log("Hello World");

// Way 2:
let a = "Hello";
const b = "World";
console.log(a + " " + b); //Just print 2 string in 1.

// Way 3:
const x = "Hello";
const y = "world";
const c = x + " " + y;
console.log(c); //2 strings are merged in 1 single string.

// Way 4:
console.log(`${a + " " + b}`); //Using Template Literal

// Way 5:
function greet() {
  console.log("Hello World");
}
greet();

// Way 6:
function greet2() {
  const greet = "Hello World";
  return greet;
}
const word = greet2();
console.log(word);

// In Node we called every file as Module.
