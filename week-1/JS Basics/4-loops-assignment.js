// function called sum that finds the sum of 1 to a number

function sum(num) {
	let total = 0;
	for (let i = 1; i <= num; i++) {
		total = total + i; // or total += i;
	}
	return total;
}

let num = 1000000000000000000;
console.log(sum(num));