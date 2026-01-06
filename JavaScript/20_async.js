// ==================================================
// ASYNCHRONOUS JAVASCRIPT (STRUCTURED NOTES)
// Backend-Focused JavaScript
// ==================================================



// ==================================================
// INTRODUCTION
// ==================================================

// JavaScript is:
// - Single-threaded
// - Non-blocking
// - Asynchronous by nature
//
// Backend JS relies heavily on async behavior
// (DB calls, API calls, file system, timers)



// ==================================================
// IMPORTANT TERMS IN ADVANCED JAVASCRIPT
// ==================================================

// 1. Call Stack       -> Executes functions
// 2. Web APIs         -> Browser / Node APIs (setTimeout, fetch)
// 3. Callback Queue   -> Stores async callbacks
// 4. Microtask Queue  -> Stores promises
// 5. Event Loop       -> Coordinates execution
//
// Event Loop decides:
// WHEN async code runs



// ==================================================
// SYNCHRONOUS JAVASCRIPT
// ==================================================

// Code executes line by line
// Blocking behavior

console.log("Sync Start");

function syncTask() {
    console.log("Sync Task Running");
}

syncTask();
console.log("Sync End");



// ==================================================
// ASYNCHRONOUS JAVASCRIPT
// ==================================================

// Non-blocking behavior
// Long-running tasks run in background

console.log("Async Start");

setTimeout(() => {
    console.log("Async Task");
}, 1000);

console.log("Async End");



// ==================================================
// THREADING CONCEPT
// ==================================================

// JavaScript runs on a SINGLE thread
// It uses:
// - Call Stack
// - Event Loop
// - Queues
//
// Async tasks do NOT block the main thread



// ==================================================
// CALLBACKS
// ==================================================

// Callback = function passed as an argument executed after an async operation completes

function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData(function (data) {
    console.log(data);
});



// ==================================================
// CALLBACK HELL
// ==================================================

// Nested callbacks create unreadable code
// Also called "Pyramid of Doom"

setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
            setTimeout(() => {
                console.log("Step 4");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// Problems:
// 1. Hard to read
// 2. Hard to debug
// 3. Hard to maintain



// ==================================================
// PROMISES
// ==================================================

// Promise represents a future value
//
// States:
// 1. Pending
// 2. Fulfilled
// 3. Rejected

const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });



// ==================================================
// PROMISE CHAINING
// ==================================================

// Multiple async operations in sequence
// Cleaner than callback hell

function step1() {
    return Promise.resolve("Step 1 done");
}

function step2() {
    return Promise.resolve("Step 2 done");
}

function step3() {
    return Promise.resolve("Step 3 done");
}

step1()
    .then(res => {
        console.log(res);
        return step2();
    })
    .then(res => {
        console.log(res);
        return step3();
    })
    .then(res => {
        console.log(res);
    });



// ==================================================
// ASYNC / AWAIT
// ==================================================

// async/await is syntactic sugar over promises
// Makes async code look synchronous
// Best practice for backend code

async function fetchUser() {
    return "User data";
}

async function main() {
    try {
        const result = await fetchUser();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

main();



// ==================================================
// HANDLING PROMISES USING ASYNC / AWAIT
// ==================================================

// Cleaner error handling with try-catch

function fetchDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async data received");
        }, 1000);
    });
}

async function handleData() {
    try {
        const data = await fetchDataAsync();
        console.log(data);
    } catch (err) {
        console.log("Error:", err);
    }
}

handleData();



// ==================================================
// IMPORTANT BACKEND NOTES
// ==================================================

// 1. JavaScript is single-threaded but async.
// 2. Callbacks are outdated for complex logic.
// 3. Promises solved callback hell.
// 4. async/await is industry standard.
// 5. Always use try-catch with async/await.
// 6. DB calls, APIs, FS → always async.


// ==================================================
// CONCLUSION
// ==================================================

// Asynchronous JavaScript is the backbone of backend development.
// Mastering async flow is mandatory for Express, MongoDB, APIs, and microservices.


// ==================================================
// END OF ASYNC JAVASCRIPT NOTES
// ==================================================
