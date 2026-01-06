// ==================================================
// Type Casting in JavaScript
// ==================================================

// Type casting (Type Conversion) is the process of
// converting one data type into another data type.
// JavaScript supports both implicit and explicit type casting.


// ==================================================
// 1. Implicit Type Casting
// (Automatically done by JavaScript)
// ==================================================

let a = "10";
let b = 5;

console.log("String + Number :", a + b); // "105"
console.log("String - Number :", a - b); // 5
console.log("String * Number :", a * b); // 50
console.log("String / Number :", a / b); // 2


// ==================================================
// 2. Explicit Type Casting
// (Manually done by programmer)
// ==================================================


// --------------------------------------------------
// Number Conversion
// --------------------------------------------------

let strNum = "100";

console.log("Using Number() :", Number(strNum));      // 100
console.log("Using parseInt() :", parseInt(strNum));  // 100
console.log("Using parseFloat() :", parseFloat("10.5")); // 10.5


// --------------------------------------------------
// String Conversion
// --------------------------------------------------

let num = 25;

console.log("Using String() :", String(num));   // "25"
console.log("Using toString() :", num.toString()); // "25"


// --------------------------------------------------
// Boolean Conversion
// --------------------------------------------------

console.log("Boolean(1) :", Boolean(1));   // true
console.log("Boolean(0) :", Boolean(0));   // false
console.log("Boolean(\"\") :", Boolean("")); // false
console.log("Boolean(\"JS\") :", Boolean("JS")); // true


// ==================================================
// Special Cases (Important)
// ==================================================

console.log("Number(null) :", Number(null));       // 0
console.log("Number(undefined) :", Number(undefined)); // NaN
console.log("Boolean(null) :", Boolean(null));     // false
console.log("Boolean(undefined) :", Boolean(undefined)); // false


// ==================================================
// End of Type Casting Notes
// ==================================================
