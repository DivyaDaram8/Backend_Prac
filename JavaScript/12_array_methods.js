// ==================================================
// Array Methods in JavaScript
// ==================================================

// These methods are Higher Order Functions
// used to process arrays in a clean and readable way.
// They do NOT modify the original array (except where noted).


// ==================================================
// 1. map()
// Modifies each element and returns a new array
// ==================================================

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(num => num * num);
console.log("Squares:", squares);
console.log("Original Array:", numbers);


// ==================================================
// 2. filter()
// Filters elements based on a condition
// ==================================================

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);


// ==================================================
// 3. reduce()
// Reduces array to a single value
// ==================================================

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);


// ==================================================
// 4. find()
// Returns the first matching element
// ==================================================

let found = numbers.find(num => num > 3);
console.log("First number > 3:", found);


// ==================================================
// 5. some()
// Returns true if at least one element matches
// ==================================================

let hasEven = numbers.some(num => num % 2 === 0);
console.log("Has even number:", hasEven);


// ==================================================
// 6. every()
// Returns true if all elements match
// ==================================================

let allPositive = numbers.every(num => num > 0);
console.log("All positive:", allPositive);


// ==================================================
// 7. concat()
// Merges two or more arrays
// ==================================================

let arr1 = [1, 2];
let arr2 = [3, 4];

let merged = arr1.concat(arr2);
console.log("Merged Array:", merged);

let arr3 = [5, 6];

let merged2 = arr1.concat(arr2, arr3);
console.log("Merged Array:", merged2);

let merged3 = [...arr1, ...arr2, ...arr3];
console.log("Merged Array using spread:", merged3);


let arrays = [[1,2], [3,4], [5,6]];
let merged4 = [].concat(...arrays);
console.log("Merged multiple arrays:", merged4);


// ==================================================
// Important Notes
// ==================================================

// 1. map, filter, reduce return NEW arrays/values.
// 2. Original array remains unchanged.
// 3. These methods are heavily used in real-world JS.
// 4. Prefer them over traditional loops for readability.


// ==================================================
// End of Array Methods
// ==================================================
