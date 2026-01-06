// ==================================================
// Functions in JavaScript
// ==================================================

// A function is a reusable block of code that
// performs a specific task.
// Functions help reduce code duplication
// and improve readability.


// ==================================================
// 1. Function Declaration
// ==================================================

// Function declaration defines a function
// with a name and can be called before it is defined.

function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

greet();


// ==================================================
// 2. Function with Parameters
// ==================================================

// Parameters allow passing data to a function.

function greetUser(name) {
    console.log("Hello", name);
}

greetUser("Ziya");
greetUser("Alex");


// ==================================================
// 3. Function with Return Value
// ==================================================

// The return statement sends a value back
// to where the function was called.

function add(a, b) {
    return a + b;
}

let sum = add(10, 20);
console.log("Sum:", sum);


// ==================================================
// 4. Function Expression
// ==================================================

// A function can be stored in a variable.
// Function expressions cannot be called
// before they are defined.

const multiply = function (a, b) {
    return a * b;
};

console.log("Multiplication:", multiply(5, 4));


// ==================================================
// 5. Arrow Function
// ==================================================

// Arrow functions provide a shorter syntax.
// They are commonly used in modern JavaScript.

const subtract = (a, b) => {
    return a - b;
};

console.log("Subtraction:", subtract(10, 3));


// Short arrow function (implicit return)
const square = n => n * n;

console.log("Square:", square(6));


// ==================================================
// 6. Default Parameters
// ==================================================

// Default values are used if no argument is passed.

function welcome(user = "Guest") {
    console.log("Welcome", user);
}

welcome();
welcome("Ziya");


// ==================================================
// 7. Calling Function Inside Another Function
// ==================================================

function calculateTotal(price, tax) {
    return price + tax;
}

function printBill(price, tax) {
    let total = calculateTotal(price, tax);
    console.log("Total Bill:", total);
}

printBill(1000, 180);


// ==================================================
// Important Notes
// ==================================================

// 1. Function names should be meaningful.
// 2. return stops function execution.
// 3. Arrow functions do not have their own 'this'.
// 4. Use functions to avoid repeating code.


// ==================================================
// End of Functions Notes
// ==================================================
