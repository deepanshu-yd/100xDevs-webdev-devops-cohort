// A typical Promise Implementation
let p = new Promise ((resolve, reject) => { // => Arrow function: A consise way to write a function
	let isTrue = true;
	if (isTrue) {
		console.log("Promise Resolved");
	}
	else {
		console.log("Promise Rejected");	
	}
});

const add = (a, b) => a + b;
console.log(add(10,20));
