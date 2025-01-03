// Array - let's you group data together

let numbers = [1, 2, 3, 4, 5, 6, 7,];
let evenNums = numbers.filter(isEven);

console.log(evenNums);

function isEven(element) {
	return element % 2 === 0;
}