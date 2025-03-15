// setTimeout(()=> {
// 	console.log("hello world"), 3000;
// })

// // Callback in Synchronous programming
// function sum(a, b) {
// 	console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
// 	sumCallback(a, b);
// }

// calculator(1, 2, sum);

// // Callback in Async js
// const hello =	() => {
// 	console.log("hello world in async");
// }

// setTimeout(hello, 3000)

// // Callback hell
// function getData(dataId, getNextData){
// 	setTimeout(() => {
// 		console.log("data", dataId);
// 		if(getNextData){
// 			getNextData()
// 		}
// 	}, 2000);	
// }

// getData(1, ()=> {
// 	console.log("getting data 2");
// 	getData(2, ()=> {
// 		console.log("getting data 3");
// 		getData(3, () => {
// 			console.log("getting data 4");
// 			getData(4);
// 		});
// 	});
// });

// Promises
// let promise = new Promise((resolve, reject)=> {
// 	console.log("I am a Promise");
// 	// resolve("success"); OR
// 	reject("it's an error")
// })

// Promise is an object in JS which has 3 states -> pending, resolve, rejected. resolve and reject are the 2 handlers present in it. We can either complete or get and error by using resolve or reject.

	// let promise = new Promise((resolve, reject) =>{
	// 	console.log("I am Promise");
	// 	reject("some error occured");
	// });

	// function getData(dataId, getNextData) {
	// 	return new Promise((resolve, reject) => {
	// 		setTimeout(()=> {
	// 			console.log("data", dataId);
	// 			resolve("success");
	// 			// reject("WTF Error Occured");
	// 			if (getNextData) {
	// 				getNextData();
	// 			}
	// 		}, 5000)
	// 	})
	// }

// .then

const getPromise = () => {
	return new Promise((resolve , reject) => {
		console.log("I am a promise");
		resolve("Successful")
		// reject("Some Error")
	});
};

let promise = getPromise();
promise.then(() => {
	console.log("promise fulfiled", res);
});

promise.catch(() => {
	console.log("Rejected", err);
})