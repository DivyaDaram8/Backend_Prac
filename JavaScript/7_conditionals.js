// ==================================================
// Conditionals in JavaScript
// ==================================================

// Conditional statements are used to make decisions in JavaScript based on given conditions.
// They execute different blocks of code depending on whether a condition is true or false.


// ==================================================
// 1. if Statement
// ==================================================

// The if statement executes a block of code
// only if the given condition is true.

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote");
}


// ==================================================
// 2. if...else Statement
// ==================================================

// The if...else statement executes one block of code if the condition is true, otherwise another block.

let marks = 35;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// ==================================================
// 3. if...else if...else Statement
// ==================================================

// Used when multiple conditions need to be checked.

let score = 82;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}


// ==================================================
// 4. switch Statement
// ==================================================

// The switch statement is used when the same variable
// needs to be compared with multiple values.

let day = 3;
// if day = "3", then it will print invalid day as switch uses strict comparison

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// ==================================================
// 5. Ternary Operator (Conditional Operator)
// ==================================================

// Short form of if...else used for simple conditions.
// Syntax: condition ? expression1 : expression2

let number = 10;

let result = (number % 2 === 0) ? "Even" : "Odd";
console.log("Number is:", result);


// ==================================================
// Important Notes
// ==================================================

// 1. Conditions always return true or false.
// 2. Comparison operators (>, <, ==, ===) are
//    commonly used in conditional statements.
// 3. Always prefer === over == for strict comparison.
// 4. switch uses strict comparison (===).
// 5. break statement is required in switch to stop execution of the next case.


// ==================================================
// End of Conditionals Notes
// ==================================================
