// Anything that requires I/O intensive task, for that use Asynchronous code
// for CPU intensive task, you can use Synchronous code

const fs = require ("fs");

const contents = fs.readFileSync("a.txt" , "utf-8");
const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents);
console.log(contents2);

// fs is an external library --> Read more about fs (file system) in node js
// line 4 can be written in 2 different ways
// 1. readFileSync --> Synchronously
// 2. readFile --> Asynchronously

// line 4 is completely an I/O bound task
// CPU bound tasks are operations that only runs on the CPU

// require is the old way to import/export modules, import is the new way


//------------------------------------------------------------------------------------

function timeout () {
	console.log("Click the button!");
}

console.log("hi");

setTimeout (timeout, 1000); // this setTimeout function is already present globally in js, so no need to require it. timeout --> callback, 1000 --> delay time (~1 sec)

console.log("Welcome to loupe");

let c = 0;
for (let i = 0; i<10000000000; i++) {
	c = c + 1;
}

// the output here will be like --
// hi -> Welcome to loupe -> Expensive operation done -> Click the button
// because it will keep running the cpu intensive task i.e. expensive operation and then will check and print the remaining tasks

// Next, try to create a promisified version of: 1. setTimeout 2. Fetch 3. fs.readFile