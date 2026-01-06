// ==================================================
// Advanced Object Concepts in JavaScript
// ==================================================


// ==================================================
// 1. Object Destructuring
// ==================================================

// Extract values from objects into variables

let user = {
    name: "Ziya",
    age: 21,
    city: "Delhi"
};

let { name, age } = user;

console.log("Name:", name);
console.log("Age:", age);


// Renaming variables while destructuring
let { city: location } = user;
console.log("Location:", location);


// ==================================================
// 2. Nested Objects
// ==================================================

let employee = {
    id: 101,
    details: {
        department: "IT",
        salary: 50000
    }
};

console.log("Department:", employee.details.department);
console.log("Salary:", employee.details.salary);


// ==================================================
// 3. Optional Chaining (?.)
// ==================================================

// Prevents errors when accessing undefined properties

console.log("Manager Name:", employee.manager?.name); // undefined (no error)


// ==================================================
// 4. Object Reference vs Value
// ==================================================

// Objects are reference types

let obj1 = { a: 10 };
let obj2 = obj1;

obj2.a = 20;

console.log("obj1:", obj1); // { a: 20 }
console.log("obj2:", obj2); // { a: 20 }


// ==================================================
// 5. Shallow Copy of Objects
// ==================================================

// Using spread operator
let original = { x: 1, y: 2 };
let copy1 = { ...original };

copy1.x = 10;

console.log("Original:", original);
console.log("Copy:", copy1);


// Using Object.assign()
let copy2 = Object.assign({}, original);
copy2.y = 20;

console.log("Original after assign:", original);
console.log("Copy2:", copy2);


// ==================================================
// 6. Deep Copy (Simple Way)
// ==================================================

// Works only for simple objects (no functions, undefined)

let deepOriginal = {
    name: "JS",
    version: 2023
};

let shallowCopy = { ...deepOriginal };
shallowCopy.name = "JavaScript";
let deepCopy = JSON.parse(JSON.stringify(deepOriginal));
deepCopy.version = 2024;

console.log("Deep Original:", deepOriginal);
console.log("Deep Copy:", deepCopy);
console.log("Shallow Copy:", shallowCopy);

// shallow copy vs deep copy
// Shallow copy copies references
// Deep copy duplicates everything
// changes made in shallow copy may affect original if nested objects are modified
// deep copy is independent of original, i.e., changes do not affect original

// ==================================================
// 7. hasOwnProperty()
// ==================================================

console.log("Has name:", user.hasOwnProperty("name"));
console.log("Has salary:", user.hasOwnProperty("salary"));


// ==================================================
// 8. Object.freeze()
// ==================================================

// Prevents adding, removing, or modifying properties

let config = {
    app: "MyApp",
    version: "1.0"
};

Object.freeze(config);
config.version = "2.0"; // ignored

console.log("Frozen config:", config);


// ==================================================
// 9. Object.seal()
// ==================================================

// Allows modification but prevents add/remove

let settings = {
    theme: "dark"
};

Object.seal(settings);
settings.theme = "light";   // allowed
settings.mode = "auto";    // not allowed

console.log("Sealed settings:", settings);


// ==================================================
// 10. this Keyword Pitfall
// ==================================================

let person = {
    name: "Alex",
    regularFunc: function () {
        console.log("Regular:", this.name);
    },
    arrowFunc: () => {
        console.log("Arrow:", this.name);
    }
};

person.regularFunc(); // works
person.arrowFunc();   // undefined


// ==================================================
// Important Notes
// ==================================================

// 1. Destructuring improves readability.
// 2. Objects are passed by reference.
// 3. Spread creates shallow copies.
// 4. Optional chaining avoids runtime errors.
// 5. Arrow functions do NOT have their own `this`.
// 6. freeze() = fully locked, seal() = partially locked.


// ==================================================
// End of Advanced Object Notes
// ==================================================
