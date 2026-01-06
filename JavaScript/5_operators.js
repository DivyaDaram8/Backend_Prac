// Operators in JavaScript
// Operators are symbols used to perform operations on values and variables.

// -------------------------------------------------
// 1. Arithmetic Operators
// Used to perform mathematical calculations.

// +   Addition
// -   Subtraction
// *   Multiplication
// /   Division
// %   Modulus (remainder)
// **  Exponentiation
// ++  Increment
// --  Decrement

let a = 10;
let b = 5;

console.log("Addition :", a + b);
console.log("Subtraction :", a - b);
console.log("Multiplication :", a * b);
console.log("Division :", a / b);
console.log("Modulus :", a % b);
console.log("Exponent :", a ** b);

a++;
console.log("Increment :", a);

b--;
console.log("Decrement :", b);


// -------------------------------------------------
// 2. Assignment Operators
// Used to assign values to variables.

// =    Assign
// +=   Add and assign
// -=   Subtract and assign
// *=   Multiply and assign
// /=   Divide and assign
// %=   Modulus and assign

let x = 10;
let y = x;
console.log("Assigned x to y :", y);

x += 5;
console.log("Add & assign :", x);

x -= 3;
console.log("Subtract & assign :", x);

x *= 2;
console.log("Multiply & assign :", x);

x /= 4;
console.log("Divide & assign :", x);

x %= 3;
console.log("Modulus & assign :", x);


// -------------------------------------------------
// 3. Comparison Operators
// Used to compare two values and return true or false.

// ==    Equal to
// ===   Equal value and equal type
// !=    Not equal
// !==   Not equal value or type
// >     Greater than
// <     Less than
// >=    Greater than or equal to
// <=    Less than or equal to

let p = 10;
let q = "10";

console.log("Equal :", p == q);
console.log("Strict equal :", p === q);
console.log("Not equal :", p != q);
console.log("Strict not equal :", p !== q);
console.log("Greater than :", p > 5);
console.log("Less than :", p < 5);
console.log("Greater or equal :", p >= 10);
console.log("Less or equal :", p <= 9);
console.log(p > q); //false
console.log(p == q); // true
console.log(p < q); // false


// -------------------------------------------------
// 4. Logical Operators
// Used to combine multiple conditions.

// &&   Logical AND
// ||   Logical OR
// !    Logical NOT

let age = 20;

console.log("AND :", age > 18 && age < 25);
console.log("OR :", age < 18 || age > 15);
console.log("NOT :", !(age > 18));


// -------------------------------------------------
// 5. Bitwise Operators
// Used to perform operations on binary numbers.

// &    AND
// |    OR
// ^    XOR
// ~    NOT
// <<   Left Shift
// >>   Right Shift

let m = 5;   // 101
let n = 3;   // 011

console.log("Bitwise AND :", m & n);
console.log("Bitwise OR :", m | n);
console.log("Bitwise XOR :", m ^ n);
console.log("Bitwise NOT :", ~m);     // ~m = -(m + 1)
console.log("Left shift :", m << 1);  // m << n = m × 2^n
console.log("Right shift :", m >> 1); // m >> n = ⌊ m ÷ 2^n ⌋


// -------------------------------------------------
// 6. Ternary Operator
// Used as a short form of if-else statement.

// ?:   Conditional operator

let marks = 45;

let result = (marks >= 40) ? "Pass" : "Fail";
console.log("Result :", result);


// -------------------------------------------------
// 7. Type Operators
// Used to check the data type of a value.

// typeof – checks the data type of a variable or value
// instanceof – checks whether an object belongs to a particular class or constructor

let name = "Ziya";
let arr = [1, 2, 3];

console.log("Type of name :", typeof name);
console.log("Type of arr :", typeof arr);
console.log("Instanceof Array :", arr instanceof Array);


// instanceof – checks whether an object belongs to a particular class or constructor

function Person(name) {
    this.name = name;
}

let p1 = new Person("Ziya");
console.log("Instanceof Person :", p1 instanceof Person); // true
