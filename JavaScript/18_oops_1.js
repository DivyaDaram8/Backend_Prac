// ==================================================
// OOPS IN JAVASCRIPT (STRUCTURED NOTES)
// Backend-focused JavaScript
// ==================================================



// ==================================================
// INTRODUCTION TO OOPS IN JAVASCRIPT
// ==================================================

// OOPS = Object Oriented Programming System
// JavaScript follows PROTOTYPE-BASED OOPS
// (not classical OOPS like Java, but similar concepts)
//
// OOPS helps to:
// - Structure backend code
// - Improve reusability
// - Maintain large applications
// - Model real-world entities



// ==================================================
// CORE OOPS CONCEPTS
// ==================================================

// 1. Object
// 2. Class
// 3. Encapsulation
// 4. Abstraction
// 5. Inheritance
// 6. Polymorphism
//
// In this video, focus is mainly on:
// Objects, Classes, and Object creation



// ==================================================
// OBJECTS IN JAVASCRIPT
// ==================================================

// Object = collection of key-value pairs
// Keys → properties
// Values → data or functions (methods)

let user = {
    name: "Ziya",
    role: "Backend Developer",
    isActive: true,
    login() {
        console.log(this.name + " logged in");
    }
};

user.login();



// ==================================================
// ACCESSING OBJECT PROPERTIES
// ==================================================

// Dot notation (preferred)
console.log(user.name);

// Bracket notation (used for dynamic keys)
console.log(user["role"]);



// ==================================================
// MODIFYING OBJECT PROPERTIES
// ==================================================

user.role = "Full Stack Developer";
user.city = "Delhi"; // adding new property

console.log(user);



// ==================================================
// DELETING OBJECT PROPERTIES
// ==================================================

delete user.isActive;
console.log(user);



// ==================================================
// DIFFERENT WAYS OF CREATING OBJECTS
// ==================================================



// ==================================================
// 1. OBJECT LITERAL
// ==================================================

let obj1 = {
    a: 10,
    b: 20
};



// ==================================================
// 2. USING new Object()
// ==================================================

let obj2 = new Object();
obj2.x = 100;
obj2.y = 200;



// ==================================================
// 3. USING CONSTRUCTOR FUNCTION
// ==================================================

// Constructor function acts like a blueprint
// Naming convention → PascalCase

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p1 = new Person("Ziya", 21);
const p2 = new Person("Alex", 25);

console.log(p1, p2);



// ==================================================
// CLASS CONCEPT (ES6)
// ==================================================

// Class is syntactic sugar over constructor functions
// Makes OOPS cleaner and readable

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getResult() {
        return this.marks >= 40 ? "Pass" : "Fail";
    }
}

const s1 = new Student("Ziya", 90);
console.log(s1.getResult());



// ==================================================
// CREATING OBJECTS USING CLASS
// ==================================================

// Objects are created using the 'new' keyword

const s2 = new Student("John", 35);
console.log(s2.getResult());



// ==================================================
// Object.create() METHOD
// ==================================================

// Creates a new object using an existing object as prototype

const protoUser = {
    greet() {
        console.log("Hello from prototype");
    }
};

const newUser = Object.create(protoUser);
newUser.name = "Backend Dev";

newUser.greet();
console.log(newUser.name);



// ==================================================
// OPERATIONS WITH JAVASCRIPT OBJECTS
// ==================================================



// ==================================================
// LOOPING THROUGH OBJECTS
// ==================================================

// for...in loop
for (let key in user) {
    console.log(key, ":", user[key]);
}



// ==================================================
// Object.keys(), Object.values(), Object.entries()
// ==================================================

console.log(Object.keys(user));    // array of keys
console.log(Object.values(user));  // array of values
console.log(Object.entries(user)); // key-value pairs



// ==================================================
// CHECKING PROPERTY EXISTENCE
// ==================================================

console.log("name" in user);      // true
console.log(user.hasOwnProperty("age")); // false



// ==================================================
// COPYING OBJECTS
// ==================================================

// Shallow copy using spread operator

const copiedUser = { ...user };
copiedUser.name = "Copied User";

console.log(user.name);
console.log(copiedUser.name);



// ==================================================
// IMPORTANT BACKEND NOTES
// ==================================================

// 1. Objects represent real-world entities.
// 2. Classes provide clean structure.
// 3. Constructor functions are still used internally.
// 4. Object.create() is prototype-based.
// 5. Always avoid modifying prototype directly.
// 6. Objects are reference types (memory matters).



// ==================================================
// CONCLUSION
// ==================================================

// JavaScript OOPS is flexible and powerful.
// Backend frameworks like Express heavily rely on objects.
// Understanding object creation is critical for clean backend code.



// ==================================================
// END OF OOPS IN JAVASCRIPT NOTES
// ==================================================
