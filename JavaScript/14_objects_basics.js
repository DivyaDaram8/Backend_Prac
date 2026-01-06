// ==================================================
// Objects in JavaScript
// ==================================================

// An object is a collection of key-value pairs.
// Objects are used to store structured data.
// Keys are strings (or symbols), values can be any data type.


// ==================================================
// 1. Creating Objects
// ==================================================

let person = {
    name: "Ziya",
    age: 21,
    isStudent: true
};

console.log("Person:", person);


// ==================================================
// 2. Accessing Object Properties
// ==================================================

// Dot notation - when key is known
console.log("Name:", person.name);

// Bracket notation - useful for dynamic keys in loops 
console.log("Age:", person["age"]);


// ==================================================
// 3. Modifying Object Properties
// ==================================================

person.age = 22;
person.city = "Delhi"; // adding new property

console.log("Updated Person:", person);


// ==================================================
// 4. Deleting Object Properties
// ==================================================

delete person.isStudent;
console.log("After delete:", person);


// ==================================================
// 5. Object with Methods
// ==================================================

let user = {
    username: "admin",
    login() {
        console.log(this.username + " logged in");
    }
};

user.login();


// ==================================================
// 6. Looping Through Objects
// ==================================================

// for...in loop
for (let key in person) {
    console.log(key + " : " + person[key]);
}


// ==================================================
// 7. Object.keys(), values(), entries()
// ==================================================

console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));


// ==================================================
// 8. Objects inside Arrays
// ==================================================

let students = [
    { name: "A", marks: 45 },
    { name: "B", marks: 78 },
    { name: "C", marks: 32 }
];

let passed = students.filter(s => s.marks >= 40);
console.log("Passed Students:", passed);


// ==================================================
// Important Notes
// ==================================================

// 1. Objects store structured data.
// 2. Use dot notation when key is known.
// 3. Use bracket notation for dynamic keys.
// 4. `this` refers to the current object.
// 5. Objects are reference types.


// ==================================================
// End of Objects Notes
// ==================================================
