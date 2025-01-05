//function that takes object as an input with name, age, gender. and greets user like -> (Hi Mr/Mrs Deepanshu, your age is 20)

function greet(user) {
	let genderSpec = "";
	if (user.gender === "male") {
		genderSpec = "Mr";
	}
	else {
		genderSpec = "Mrs";
	}
	
	let voteOrNot = "";
	if (user.age >= 18) {
		voteOrNot = "legal to Vote";
	}
	else {
		voteOrNot = "not legal to vote";
	}

	console.log("Hi " + genderSpec + " " + user.name + ", your age is " + user.age + ". You are " + voteOrNot);
}

let user = {
	name: "Deepanshu",
	age: 20,
	gender: "male"
}

greet(user);