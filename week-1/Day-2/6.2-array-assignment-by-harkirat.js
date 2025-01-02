// function that takes an array of objects as input and returns the users whose age is > 18 and are male

// Method 1: initialize a new array, push to new array
// Method 2: use the filter function inside the array

let users = [
	{
	name: "Deepanshu",
	age: 23,
	gender: "male"
},
{
	name: "Kirat",
	age: 69,
	gender: "male",
},
{
	name: "Priya",
	age: 21,
	gender: "female"
}
];

function checkAgeGender (elements) {
	return elements.filter(element => element.age > 18 && element.gender === "male")
}

console.log(checkAgeGender(users));
