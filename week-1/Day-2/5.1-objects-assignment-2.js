//function that takes object as an input with name, age, gender. and greets user like -> (Hi Mr/Mrs Deepanshu, your age is 20)

function greet(user) {
	let genderSpec = "";
	if (user.gender === "male") {
		genderSpec = "Mr";
	}
	else {
		genderSpec = "Mrs";
	}
	console.log("Hi " + genderSpec + " " + user.name + ", your age is " + user.age);
}

let user = {
	name: "Deepanshu",
	age: 20,
	gender: "male"
}

greet(user);