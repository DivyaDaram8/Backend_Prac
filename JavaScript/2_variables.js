// ==================================================
// JavaScript Notes
// ==================================================

// JavaScript is a versatile programming language used for
// both client-side and server-side development.
// It is dynamically typed, meaning variable types are
// determined at runtime.
// JavaScript supports procedural, object-oriented,
// and functional programming paradigms.
// It is widely used to create interactive web pages.


// ==================================================
// Variable Rules in JavaScript
// ==================================================

// 1. Variable names can contain letters, digits, underscores (_), and dollar signs ($).
// 2. Variable names must begin with a letter, underscore (_), or dollar sign ($).
// 3. Variable names are case-sensitive (myVar and myvar are different).
// 4. Reserved keywords cannot be used as variable names.
// 5. Variable names should not contain spaces or special characters
//    (except _ and $).


// ==================================================
// Types of Variables: var, let, const
// ==================================================

var fullName = "John Doe";   // string
let age = 30;               // number
const isEmployed = true;    // boolean
let salary = 50000.50;      // number (floating point)
let x = null;               // null
let y;                      // undefined

console.log("Full Name:", fullName);
console.log("Age:", age);
console.log("Salary:", salary);
console.log("Is Employed:", isEmployed);
console.log("X:", x);
console.log("Y:", y);


// JavaScript is dynamically typed
salary = "Thirty Thousand";
console.log("Updated Salary:", salary);


// ==================================================
// Definitions of var, let, const
// ==================================================

// var   → function-scoped or global-scoped
//       → can be re-declared and updated
// let   → block-scoped
//       → can be updated but not re-declared in same scope
// const → block-scoped
//       → cannot be updated or re-declared
//       → must be initialized at declaration

// Redeclaration examples
var a = 10;
var a = 20;     // valid

let b = 10;
// let b = 20;  // invalid (redeclaration)

// const c = 10;
// const c = 20; // invalid (redeclaration)

fullName = "Jane Smith"; // valid update


// ==================================================
// Data Types in JavaScript
// ==================================================

// Primitive Data Types (7):
// Number, String, Boolean, Null, Undefined, Symbol, BigInt

// Non-Primitive Data Types:
// Object, Array, Function


// ==================================================
// Performing Operations
// ==================================================

console.log("Full Name with surname:", fullName + " Abraham");
console.log("Age next year:", age + 1);
console.log("Is Employed status:", !isEmployed);
console.log("X is null:", x === null);
console.log("Y is undefined:", typeof y === "undefined");


// ==================================================
// Special Cases (Important for Exams)
// ==================================================

// Undefined operation
console.log("Age plus undefined:", age + y); // NaN

// Null concatenation
console.log("Full Name plus null:", fullName + x); // "Jane Smithnull"


// ==================================================
// Redeclaration Error Example (DO NOT RUN)
// ==================================================

// let a = 5;
// const a = 10; // Error: cannot redeclare 'a'


// ==================================================
// End of JavaScript Notes
// ==================================================
