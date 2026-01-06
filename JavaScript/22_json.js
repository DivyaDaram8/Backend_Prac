// ==================================================
// JSON IN JAVASCRIPT
// Backend-Ready | Single File Notes
// ==================================================


// ==================================================
// INTRODUCTION TO JSON
// ==================================================

// JSON = JavaScript Object Notation
// Lightweight data-interchange format
// Used in:
// - APIs
// - Databases
// - Frontend ↔ Backend communication

// JSON is STRING-based, not an object



// ==================================================
// JSON STRUCTURE
// ==================================================

/*
{
  "name": "Ziya",
  "age": 21,
  "isStudent": true
}
*/



// ==================================================
// JSON.stringify()
// Object → JSON string
// ==================================================

const user = {
    name: "Ziya",
    role: "Backend Developer",
    active: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
console.log(typeof jsonString); // string



// ==================================================
// JSON.parse()
// JSON string → Object
// ==================================================

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser);
console.log(typeof parsedUser); // object



// ==================================================
// JSON IN BACKEND (REAL USE)
// ==================================================

// Sending response
// res.send(JSON.stringify(data));

// Receiving request
// const body = JSON.parse(req.body);



// ==================================================
// JSON LIMITATIONS
// ==================================================

// JSON does NOT support:
// - Functions
// - undefined
// - Symbol
// - Circular references

const invalidData = {
    name: "JS",
    func: () => {}
};

// JSON.stringify(invalidData) -> function ignored



// ==================================================
// JSON.stringify OPTIONS
// ==================================================

// Pretty formatting

const prettyJSON = JSON.stringify(user, null, 2);
console.log(prettyJSON);



// ==================================================
// JSON FOR DEEP COPY (LIMITED)
// ==================================================

// Works only for simple objects

const original = {
    a: 10,
    b: 20
};

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.a = 100;

console.log(original);
console.log(deepCopy);



// ==================================================
// ERROR HANDLING WITH JSON.parse
// ==================================================

try {
    JSON.parse("{ invalid json }");
} catch (error) {
    console.log("Invalid JSON");
}



// ==================================================
// IMPORTANT BACKEND NOTES
// ==================================================

// 1. APIs communicate using JSON
// 2. Always validate JSON input
// 3. JSON.parse can crash app if not handled
// 4. JSON is language-independent
// 5. Used heavily in Express & MongoDB



// ==================================================
// END OF JSON NOTES
// ==================================================
