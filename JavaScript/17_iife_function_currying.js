// ==================================================
// IIFE & FUNCTION CURRYING (STRUCTURED NOTES)
// Backend-focused JavaScript
// ==================================================



// ==================================================
// INTRODUCTION
// ==================================================

// This file covers:
// 1. IIFE (Immediately Invoked Function Expression)
// 2. Encapsulation using IIFE
// 3. Function Currying
// 4. Normal Function vs Currying
// 5. Infinite Currying
// 6. Arrow Function Currying
//
// These concepts are important for:
// - Data hiding
// - Clean backend architecture
// - Functional programming patterns



// ==================================================
// INTRO TO IIFE
// ==================================================

// IIFE = Function that runs immediately after creation
// Syntax: (function(){})();
// Used to:
// - Avoid global scope pollution
// - Create private variables
// - Encapsulate logic






// **************************************
// IIFE uses variables once and throws them away.
// Closure keeps variables alive for future use.







// ==================================================
// UNDERSTANDING IIFE
// ==================================================

(function () {
    console.log("IIFE executed immediately");
})();


// Another valid syntax
(() => {
    console.log("Arrow IIFE executed");
})(); 

 

// ==================================================
// WHY IIFE EXISTS
// ==================================================

// Before ES6 modules:
// - No private variables
// - Everything leaked to global scope
// IIFE solved that problem.



// ==================================================
// ENCAPSULATION USING IIFE
// ==================================================

// Private variables using closure + IIFE

const counterModule = (function () {
    let count = 0; // private

    return {
        increment() {
            count++;
            console.log(count);
        },
        decrement() {
            count--;
            console.log(count);
        }
    };
})();

counterModule.increment(); // 1
counterModule.increment(); // 2
counterModule.decrement(); // 1



// ==================================================
// PROBLEM STATEMENT 1
// ==================================================

// Predict output

const result1 = (function () {
    let x = 10;
    return x;
})();

console.log(result1); // 10



// ==================================================
// PROBLEM STATEMENT 2
// ==================================================

// Variable isolation using IIFE

let x = 100;

(function () {
    let x = 50;
    console.log(x);
})();

console.log(x);

// Output:
// 50
// 100



// ==================================================
// PROBLEM STATEMENT 3
// ==================================================


// IIFE with parameters

(function (name) {
    console.log("Hello", name);
})("Ziya");



// ==================================================
// PROBLEM STATEMENT 4
// ==================================================

// Multiple IIFEs do not interfere with each other

(function () {
    let a = 1;
    console.log(a);
})();

(function () {
    let a = 2;
    console.log(a);
})();



// ==================================================
// PROBLEM STATEMENT 5
// ==================================================

// IIFE returning an object (module pattern)

const authModule = (function () {
    let isLoggedIn = false;

    return {
        login() {
            isLoggedIn = true;
            console.log("Logged in");
        },
        status() {
            console.log(isLoggedIn);
        }
    };
})();

authModule.status(); // false
authModule.login();
authModule.status(); // true



// ==================================================
// INTRODUCTION TO FUNCTION CURRYING
// ==================================================

// Function currying transforms:
// f(a, b, c)
// into
// f(a)(b)(c)
//
// Used in:
// - Functional programming
// - Reusability
// - Cleaner logic



// ==================================================
// UNDERSTANDING FUNCTION CURRYING
// ==================================================

function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

console.log(multiply(2)(3)(4)); // 24



// ==================================================
// NORMAL FUNCTION VS FUNCTION CURRYING
// ==================================================

// Normal function
function addNormal(a, b, c) {
    return a + b + c;
}

// Curried version
function addCurried(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(addNormal(1, 2, 3));      // 6
console.log(addCurried(1)(2)(3));     // 6



// ==================================================
// GREETING USER EXAMPLE
// ==================================================

// Normal approach
function greetNormal(greeting, name) {
    console.log(greeting + " " + name);
}

// Curried approach
function greetCurried(greeting) {
    return function (name) {
        console.log(greeting + " " + name);
    };
}

const sayHello = greetCurried("Hello");
sayHello("Ziya");
sayHello("Backend Dev");



// ==================================================
// INFINITE CURRYING
// ==================================================

// Function keeps accepting values
// until called with no argument

function infiniteSum(a) {
    return function (b) {
        if (b === undefined) {
            return a;
        }
        return infiniteSum(a + b);
    };
}

console.log(infiniteSum(1)(2)(3)(4)()); // 10



// ==================================================
// FUNCTION CURRYING USING ARROW FUNCTION
// ==================================================

const multiplyArrow = a => b => c => a * b * c;

console.log(multiplyArrow(3)(4)(5)); // 60



// ==================================================
// IMPORTANT BACKEND NOTES
// ==================================================

// 1. IIFE prevents global scope pollution.
// 2. Closures make IIFE powerful.
// 3. Module pattern was built using IIFE.
// 4. Currying improves reusability.
// 5. Arrow currying is common in modern JS.
// 6. Functional style helps in clean backend code.


// ==================================================
// END OF IIFE & FUNCTION CURRYING NOTES
// ==================================================
