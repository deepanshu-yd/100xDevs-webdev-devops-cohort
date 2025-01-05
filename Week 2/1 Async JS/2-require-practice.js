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