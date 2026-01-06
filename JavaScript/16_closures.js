// ==================================================
// JAVASCRIPT SCOPE, LEXICAL SCOPING & CLOSURES
// (Backend-focused, structured notes)
// ==================================================



// A closure is when a function remembers variables from where it was created, even after that scope is gone.



// ==================================================
// INTRODUCTION
// ==================================================

// Scope defines WHERE a variable can be accessed.
// JavaScript has different types of scopes.
// Understanding scope is CRITICAL for backend logic,
// memory handling, closures, and async code.



// ==================================================
// TYPES OF SCOPE IN JAVASCRIPT
// ==================================================

// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Lexical Scope (foundation for closures)



// ==================================================
// GLOBAL SCOPE
// ==================================================

// Variables declared outside all functions/blocks belong to global scope.
// Accessible anywhere in the file.
// ❌ Dangerous in backend (pollution + bugs).

let globalValue = "I am global";

function accessGlobal() {
    console.log(globalValue);
}

accessGlobal(); // works



// ==================================================
// FUNCTION SCOPE
// ==================================================

// Variables declared using var / let / const inside a function are accessible ONLY there.

function functionScopeExample() {
    let secret = "server-secret";
    console.log(secret);
}

functionScopeExample();

// console.log(secret); ❌ ReferenceError



// ==================================================
// BLOCK SCOPE
// ==================================================

// Block = code inside { }
// let and const are block scoped
// var is NOT block scoped (important difference)

if (true) {
    let blockLet = "inside block";
    const blockConst = 100;
    var leakedVar = "leaked";
}

// console.log(blockLet); ❌ Error
// console.log(blockConst); ❌ Error
console.log(leakedVar); // works (bad practice)



// ==================================================
// LEXICAL SCOPING
// ==================================================

// Inner functions can access variables
// from their outer function scope.
// Scope is decided at WRITE TIME, not CALL TIME.

function outerFunction() {
    let outerVar = "outer value";

    function innerFunction() {
        console.log(outerVar);
    }

    innerFunction();
}

outerFunction();



// ==================================================
// CLOSURES
// ==================================================

// Closure = function + its lexical environment
// A function "remembers" variables from its scope
// even after the outer function has finished execution.

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3



// ==================================================
// WHY CLOSURES MATTER IN BACKEND
// ==================================================

// 1. Data hiding
// 2. Private variables
// 3. Middleware logic
// 4. Maintaining state without globals



// ==================================================
// PROBLEM STATEMENT 1
// ==================================================

// Predict the output 

function test1() {
    let x = 10;
    return function () {
        console.log(x);
    };
}

const fn1 = test1();
fn1(); // 10



// ==================================================
// PROBLEM STATEMENT 2
// ==================================================

// Multiple closures, same outer function

function test2() {
    let x = 5;
    return {
        inc() {
            x++;
            console.log(x);
        },
        dec() {
            x--;
            console.log(x);
        }
    };
}

const obj = test2();
obj.inc(); // 6
obj.inc(); // 7
obj.dec(); // 6



// ==================================================
// PROBLEM STATEMENT 3
// ==================================================

// Closure inside loop (classic interview trap)

function test3() {
    for (var i = 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

test3();
// Output: 4 4 4
// Reason: var is function scoped, not block scoped
// setTimeout runs after the loop finishes
// var i is function-scoped → only ONE i
// Loop ends → i becomes 4
// All callbacks read the same i → 4 4 4



// ==================================================
// FIX FOR PROBLEM 3 (USING let)
// ==================================================

function test3Fixed() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

test3Fixed();
// Output: 1 2 3
// let is block-scoped
// Each iteration gets its own i
// Closures capture different values
// Output → 1 2 3 ✅




// ==================================================
// PROBLEM STATEMENT 4
// ==================================================

// Independent closures

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12



// ==================================================
// PROBLEM STATEMENT 5
// ==================================================

// Data hiding using closure

function bankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            console.log("Balance:", balance);
        },
        withdraw(amount) {
            balance -= amount;
            console.log("Balance:", balance);
        }
    };
}

const account = bankAccount(1000);
account.deposit(500);   // 1500
account.withdraw(300);  // 1200



// ==================================================
// IMPORTANT NOTES (EXAM + BACKEND)
// ==================================================

// 1. Scope controls accessibility.
// 2. let/const > var (always).
// 3. Lexical scoping decides closure behavior.
// 4. Closures keep data alive in memory.
// 5. Backend frameworks rely heavily on closures.


// ==================================================
// END OF SCOPE + CLOSURE NOTES
// ==================================================
