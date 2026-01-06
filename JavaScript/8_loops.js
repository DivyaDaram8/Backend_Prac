// ==================================================
// Loops in JavaScript
// ==================================================

// Loops are used to execute a block of code repeatedly as long as a specified condition is true.


// ==================================================
// 1. for Loop
// ==================================================

// The for loop is used when the number of iterations is known in advance.

for (let i = 1; i <= 5; i++) {
    console.log("For loop value:", i);
}


// ==================================================
// 2. while Loop
// ==================================================

// The while loop executes a block of code as long as the condition is true.

let j = 1;

while (j <= 5) {
    console.log("While loop value:", j);
    j++;
}


// ==================================================
// 3. do...while Loop
// ==================================================

// The do...while loop executes the code block at least once, even if the condition is false.

let k = 1;

do {
    console.log("Do-while loop value:", k);
    k++;
} while (k <= 5);


// ==================================================
// 4. break Statement
// ==================================================

// The break statement is used to stop the loop.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log("Break example:", i);
}


// ==================================================
// 5. continue Statement
// ==================================================

// The continue statement skips the current iteration
// and moves to the next iteration.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Continue example:", i);
}


// ==================================================
// Important Notes
// ==================================================

// 1. for loop is best when the number of iterations is known.
// 2. while loop is used when the condition is checked first.
// 3. do...while loop executes at least once.
// 4. break exits the loop completely.
// 5. continue skips the current iteration only.


// ==================================================
// End of Loops Notes
// ==================================================
