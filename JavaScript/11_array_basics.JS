// ==================================================
// Arrays in JavaScript
// ==================================================

// An array is a data structure used to store
// multiple values in a single variable.
// Array elements are accessed using index numbers,
// starting from 0.


// ==================================================
// 1. Creating Arrays
// ==================================================

let numbers = [10, 20, 30, 40, 50];
let names = ["A", "B", "C"];
let mixed = [1, "JS", true, null];

console.log("Numbers:", numbers);
console.log("Names:", names);
console.log("Mixed:", mixed);


// ==================================================
// 2. Accessing Array Elements
// ==================================================

console.log("First element:", numbers[0]);
console.log("Last element:", numbers[numbers.length - 1]);


// ==================================================
// 3. Updating Array Elements
// ==================================================

numbers[1] = 25;
console.log("Updated Numbers:", numbers);


// ==================================================
// 4. Array Length
// ==================================================

console.log("Array length:", numbers.length);


// ==================================================
// 5. Looping through Arrays
// ==================================================

// for loop - traditional index-based loop
for (let i = 0; i < numbers.length; i++) {
    console.log("For loop value:", numbers[i]);
}

// for...of loop - iterates over values directly 
for (let value of numbers) {
    console.log("For-of value:", value);
}

// for...in loop - iterates over indexes
for (let index in numbers) {
    console.log("For-in index " + index + ": " + numbers[index]);
}

// forEach method
numbers.forEach((value, index) =>{
    console.log("forEach index" + index + ": " + value);
})
// Loops repeat code manually using conditions,
// Array methods are built-in functions that internally loop over arrays to perform specific operations like mapping, filtering, or reducing.

// ==================================================
// 6. Common Array Methods
// ==================================================

// push() → add element at end
numbers.push(60);
console.log("After push:", numbers);

// pop() → remove last element
numbers.pop();
console.log("After pop:", numbers);

// unshift() → add element at beginning
numbers.unshift(5);
console.log("After unshift:", numbers);

// shift() → remove first element
numbers.shift();
console.log("After shift:", numbers);


// ==================================================
// 7. Checking Array Type
// ==================================================

console.log("Is Array:", Array.isArray(numbers)); // true


// ==================================================
// 8. Array with Functions & Conditionals
// ==================================================

let marks = [45, 67, 89, 34, 76];

let passCount = 0;

for (let mark of marks) {
    if (mark >= 40) {
        passCount++;
    }
}

console.log("Passed Students Count:", passCount);


// ==================================================
// Important Notes
// ==================================================

// 1. Arrays are zero-indexed.
// 2. Arrays can store mixed data types.
// 3. Arrays are mutable (values can be changed).
// 4. Use loops or array methods to process arrays.


// ==================================================
// End of Arrays Notes
// ==================================================
