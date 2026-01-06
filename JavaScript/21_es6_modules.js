// ==================================================
// ES6 MODULES IN JAVASCRIPT
// Backend-Ready | Single File Notes
// ==================================================


// ==================================================
// INTRODUCTION TO ES6 MODULES
// ==================================================

// ES6 Modules allow splitting JavaScript code
// into reusable files (modules).
// Each file has its own scope.
// Widely used in Node.js & backend applications.

// Benefits:
// 1. Clean code structure
// 2. Reusability
// 3. No global scope pollution
// 4. Easier maintenance



// ==================================================
// IMPORTANT SETUP (NODE.JS)
// ==================================================

// package.json
/*
{
  "type": "module"
}
*/

// ES6 modules use:
// import / export
// instead of require()



// ==================================================
// NAMED EXPORT
// ==================================================

// Exporting multiple items from a module

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14;



// ==================================================
// IMPORTING NAMED EXPORTS
// ==================================================

// Import specific exports
import { add, subtract, PI } from "./mathUtils.js";

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(PI);



// ==================================================
// DEFAULT EXPORT
// ==================================================

// A module can have ONLY ONE default export

export default function logger(message) {
    console.log("LOG:", message);
}



// ==================================================
// IMPORTING DEFAULT EXPORT
// ==================================================

import logger from "./logger.js";

logger("Server started");



// ==================================================
// MIXED EXPORTS (DEFAULT + NAMED)
// ==================================================

export default function connectDB() {
    console.log("Database connected");
}

export const DB_NAME = "usersDB";



// ==================================================
// IMPORTING MIXED EXPORTS
// ==================================================

import connectDB, { DB_NAME } from "./db.js";

connectDB();
console.log(DB_NAME);



// ==================================================
// RENAMING IMPORTS
// ==================================================

import { add as sum, subtract as diff } from "./mathUtils.js";

console.log(sum(10, 20));
console.log(diff(20, 5));



// ==================================================
// IMPORT ALL EXPORTS
// ==================================================

import * as math from "./mathUtils.js";

console.log(math.add(2, 3));
console.log(math.PI);



// ==================================================
// DYNAMIC IMPORT (LAZY LOADING)
// ==================================================

// Used when module is needed conditionally

if (true) {
    const module = await import("./mathUtils.js");
    console.log(module.add(3, 4));
}



// ==================================================
// MODULE SCOPE
// ==================================================

// Variables inside a module are private
// unless explicitly exported

const secretKey = "PRIVATE"; // not accessible outside



// ==================================================
// IMPORTANT BACKEND NOTES
// ==================================================

// 1. Always use file extension (.js)
// 2. One default export per file
// 3. Prefer named exports for utilities
// 4. ES6 modules are asynchronous
// 5. Required for modern Node & Express



// ==================================================
// END OF ES6 MODULES
// ==================================================
