// What is Node.js?
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript code outside of a web browser. It is commonly used for building server-side applications and APIs.

// Module Systems in Node.js
// There are two primary module systems in Node.js: CommonJS and ES6 Modules.

// 1. CommonJS Module System
// CommonJS is the original module system used in Node.js. It uses `require` to import modules and `module.exports` to export them. This system is synchronous and works well for server-side applications.
// Example of CommonJS Module System:
// utils.js
function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}
function celciusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// module.exports = generateRandomNumber;
    // to return only generateRandomNumber function
module.exports = {
    generateRandomNumber,
    celciusToFahrenheit
};      
// index.js
// const generateRandomNumber = require('./utils'); // to import only one function
// const { generateRandomNumber, celciusToFahrenheit } = require('./utils');

// console.log("Random Number:", generateRandomNumber());
// console.log("Converted Temperature:", celciusToFahrenheit(25));


// It is commonJs module system used in Node.js for exporting and importing functions or variables between different files.


// 2. ES6 Module System
// ES6 Modules, also known as ECMAScript Modules (ESM), is a newer module system that uses `import` and `export` keywords. It is asynchronous and is becoming the standard for JavaScript modules.
// Example of ES6 Module System:
// postController.js
const posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." }
]   
const getPosts = () => posts;
export default getPosts;
// index.js
import getPosts from "./postController";
console.log("Posts:", getPosts());

// Here we are using ES6 module system with import and export keywords to manage modules in Node.js.
// Note: To use ES6 modules in Node.js, you may need to set "type": "module" in your package.json or use the .mjs file extension.

// Summary
// - CommonJS uses `require` and `module.exports` for module management.
// - ES6 Modules use `import` and `export` keywords.
// - ES6 Modules are the modern standard and are increasingly being adopted in Node.js development.

// While exporting multiple functions or variables we must use object syntax like { functionName1, functionName2 } in module.exports for CommonJS and named exports for ES6 modules.
// There can be only one default export in ES6 modules using export default.
// If there are mutiple functions and default export is also there then we can use both named exports and default export in ES6 modules.
// Example:
// import functionA, { functionB, functionC } from './moduleFile';