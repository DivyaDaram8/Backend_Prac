// ==================================================
// undefined vs "undefined" vs undefined as variable
// ==================================================

var x = undefined;
console.log("Value of x:", x);            // undefined
console.log("Type of x:", typeof x);      // undefined

var y = "undefined";
console.log("Value of y:", y);            // "undefined"
console.log("Type of y:", typeof y);      // string


// Using 'undefined' as a variable name (Not Recommended)
var undefined = 5;
console.log("Value of undefined variable:", undefined); // 5
console.log("Type of undefined variable:", typeof undefined); // number

// Note:
// It is NOT recommended to use 'undefined' as a variable name
// because it can cause confusion and bugs in real applications.


// ==================================================
// Difference between == and ===
// ==================================================

// ==  → checks only value (allows type conversion)
// === → checks both value and type (strict comparison)

var a = null;
console.log("a == undefined:", a == undefined);   // true
console.log("a === undefined:", a === undefined); // false

var b;
console.log("b == undefined:", b == undefined);   // true
console.log("b === undefined:", b === undefined); // true

var c = 5;
var d = "5";
console.log("c == d:", c == d);     // true
console.log("c === d:", c === d);   // false


// Best Practice:
// Always prefer using === to avoid unexpected type coercion.
