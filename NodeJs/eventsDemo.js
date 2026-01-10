import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler1(){
    console.log("hello")
}

function greetHandler(name) {
  console.log('Hello ' + name);
}

function goodbyeHandler(name) {
  console.log('Goodbye ' + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('greet1', greetHandler1);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet1');
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

// Error handling
myEmitter.on('error', (err) => {
  console.log('An Error Occured:', err);
});

// Simulate error
myEmitter.emit('error', new Error('Something went wrong'));