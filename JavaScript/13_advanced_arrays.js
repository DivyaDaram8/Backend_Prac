// ==================================================
// Advanced Array Concepts in JavaScript
// ==================================================


// ==================================================
// 1. splice()
// Adds/removes elements (MODIFIES original array)
// ==================================================

let nums = [10, 20, 30, 40];

nums.splice(2, 1); // remove 30
console.log("After splice remove:", nums);

nums.splice(2, 0, 35); // add 35 at index 2
console.log("After splice add:", nums);


// ==================================================
// 2. slice()
// Extracts elements without modifying original array
// ==================================================

let sliced = nums.slice(1, 3);
console.log("Sliced Array:", sliced);
console.log("Original Array:", nums);


// ==================================================
// 3. sort()
// Sorts array elements
// ==================================================

let values = [40, 10, 100, 25];

values.sort((a, b) => a - b);
console.log("Sorted Ascending:", values);

values.sort((a, b) => b - a);
console.log("Sorted Descending:", values);


// ==================================================
// 4. reverse()
// Reverses the array
// ==================================================

values.reverse();
console.log("Reversed:", values);


// ==================================================
// 5. Multidimensional Array
// ==================================================

let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log("Matrix Element:", matrix[1][2]); // 6


// ==================================================
// 6. Array Destructuring
// ==================================================

let colors = ["red", "green", "blue"];

let [first, second] = colors;
console.log("First:", first);
console.log("Second:", second);

let [ , ,third] = colors; // skip first two
console.log("Third:", third);


// ==================================================
// 7. Spread Operator (...)
// ==================================================

let a = [1, 2, 3];
let b = [4, 5, 6];

let combined = [...a, ...b];
console.log("Combined:", combined);

let copy = [...a];
console.log("Copy:", copy);


// ==================================================
// Important Notes
// ==================================================

// 1. splice() modifies the original array.
// 2. slice(), map(), filter() do NOT modify original array.
// 3. sort() needs a compare function for numbers.
// 4. Spread operator is used for copying & merging arrays.


// ==================================================
// End of Advanced Arrays
// ==================================================
