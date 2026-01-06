// Data Types
// Primitive Data Types & Non-Primitive Data Types


// There are total 7 Primitive Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

// 1. Number
let num = 21;
console.log("Value of num is :", num);
console.log("Type of num is :", typeof num);
// can also use console.log(typeof(num)) along with console.log(typeof num)

// 2. String
let fullName = "Ziya";
console.log("Value of name is :", fullName);
console.log("Type of name is :", typeof fullName);

// 3. Boolean
let isStudent = true;
console.log("Value of isStudent is :", isStudent);
console.log("Type of isStudent is :", typeof isStudent);

// 4. Undefined
let x;
console.log("Value of x is :", x);
console.log("Type of x is :", typeof x);

// 5. Null
let y = null;
console.log("Value of y is :", y);
console.log("Type of y is :", typeof y); // object (JS quirk)

// 6. BigInt
let bigNum = 12345678901234567890n;
console.log("Value of bigNum is :", bigNum);
console.log("Type of bigNum is :", typeof bigNum);

// 7. Symbol
let sym = Symbol("id");
console.log("Value of sym is :", sym);
console.log("Type of sym is :", typeof sym);


// -----------------------------

// Non-Primitive Data Types

// There are total 3 Non-Primitive Data Types
// 1. Object
// 2. Array
// 3. Function

// 1. Object
let person = {
    name: "Ziya",
    age: 21
};
console.log("Value of person is :", person);
console.log("Type of person is :", typeof person);

// 2. Array
let arr = [1, 2, 3, 4];
console.log("Value of arr is :", arr);
console.log("Type of arr is :", typeof arr);

// 3. Function
function greet() {
    console.log("Hello");
}
console.log("Value of greet is :", greet);
console.log("Type of greet is :", typeof greet);



// Type of gives the data type of the variable
// Note: typeof null returns "object" due to a historical bug in JavaScript
