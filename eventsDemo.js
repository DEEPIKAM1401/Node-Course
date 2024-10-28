import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name)
{
    console.log('Hello '+name);
}

// function goodbyeHandler(name)
// {
//     console.log('Goodbye '+name);
// }

// Register event listeners

// myEmitter.on('greet', greetHandler);

// myEmitter.on('goodbye', (name)=>{
//     console.log("Goodbye "+name);
// });

// Emit events
// myEmitter.emit('greet', 'Deepika');
// myEmitter.emit('goodbye', 'Deepika');

// Error handling

// myEmitter.on('error', (err) => {
//     console.log("An error occured:", err);
// })

// Simulate Error 
// myEmitter.emit('error', new Error('Something went wrong'));

// Create a new instance of EventEmitter
// const myEmitter = new EventEmitter();

// Register a listener for the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Register another listener for the 'greet' event
myEmitter.on('greet', () => {
  console.log('This is another greet listener.');
});

// Emit the 'greet' event
myEmitter.emit('greet', 'Alice');