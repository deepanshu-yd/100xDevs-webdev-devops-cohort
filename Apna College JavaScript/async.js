setTimeout(()=> {
	console.log("hello world"), 3000;
})

// Callback in Synchronous programming
function sum(a, b) {
	console.log(a + b);
}

function calculator(a, b, sumCallback) {
	sumCallback(a, b);
}

calculator(1, 2, sum);

// Callback in Async js
const hello =	() => {
	console.log("hello world in async");
}

setTimeout(hello, 3000)