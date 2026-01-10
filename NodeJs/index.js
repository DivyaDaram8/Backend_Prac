// const generateRandomNumber = require('./utils'); // to import only one function
// const { generateRandomNumber, celciusToFahrenheit } = require('./utils');

// console.log("Random Number:", generateRandomNumber());
// console.log("Converted Temperature:", celciusToFahrenheit(25));


// It is commonJs module system used in Node.js for exporting and importing functions or variables between different files.


// import getPosts from "./postController";


import getPosts, {getPostsLength} from "./postController.js";
console.log("Posts:", getPosts());
console.log("Number of Posts:", getPostsLength());

// Here we are using ES6 module system with import and export keywords to manage modules in Node.js.