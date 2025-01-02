//function that takes a user as an input and greets them on name and age

function greet(user) {
	console.log("Hello " + user.name + ". Your age is " + user.age);
}

let user = {
	name: "Deepanshu",
	age: 20
}

 greet(user);