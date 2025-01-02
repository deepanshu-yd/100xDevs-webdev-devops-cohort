//function that takes array of numbers as input and returns a new array with even and odd values. read about "filter" in js

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let even = numbers.filter(isEven);
let odd = numbers.filter(isOdd)

console.log(even);
console.log(odd);


function isEven(elements) {
	return elements % 2 === 0;
}

function isOdd(elements) {
	return elements % 2 !== 0;
}