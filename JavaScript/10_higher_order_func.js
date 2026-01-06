// ==================================================
// Higher Order Functions in JavaScript
// ==================================================

// A Higher Order Function (HOF) is a function that:
// 1. Takes another function as an argument, OR
// 2. Returns a function as its result.


// ==================================================
// 1. Function as a Value (First Class Function)
// ==================================================

function greet() {
    console.log("Hello!");
}

let sayHello = greet;   // function assigned to variable
sayHello();


// ==================================================
// 2. Function as an Argument
// ==================================================

function execute(fn) {
    fn();
}

function welcome() {
    console.log("Welcome User");
}

execute(welcome);


// ==================================================
// 3. Function Returning Another Function
// ==================================================

function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

let double = multiplier(2);
console.log("Double:", double(5));

let triple = multiplier(3);
console.log("Triple:", triple(5));


// ==================================================
// 4. Benefits of Higher Order Functions
// ==================================================

// - Code reusability
// - Cleaner and modular code
// - Better abstraction
// - Widely used in modern JavaScript


// ==================================================
// 5. Higher Order Functions with Arrays
// ==================================================

let numbers = [1, 2, 3, 4, 5];


// -------------------------------
// map() → transforms each element
// -------------------------------

let squares = numbers.map(num => num * num);
console.log("Squares:", squares);


// -------------------------------
// filter() → filters elements
// -------------------------------

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);


// -------------------------------
// reduce() → aggregates values
// -------------------------------

let sum = numbers.reduce((acc, curr) => acc + curr, 0); 
// here acc starts at 0, and curr iterates from first element, if no initial value is provided, acc starts at first element and curr at second element
console.log("Sum:", sum);
// acc = accumulator - which stores the running total, curr = current value



// ==================================================
// 6. Real-World Example
// ==================================================

let students = [
    { name: "A", marks: 45 },
    { name: "B", marks: 72 },
    { name: "C", marks: 30 }
];

let passedStudents = students
    .filter(s => s.marks >= 40)
    .map(s => s.name);

console.log("Passed Students:", passedStudents);


// ==================================================
// Important Notes
// ==================================================

// 1. Arrow functions are commonly used with HOFs.
// 2. map, filter, reduce DO NOT change original array.
// 3. HOFs improve readability and maintainability.


// ==================================================
// End of Higher Order Functions Notes
// ==================================================
