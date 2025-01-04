// Q1. find sum of two numbers using function

function sum1 (a,b) {
	return a + b;
}

let totalSum = sum1(10, 2);
console.log(totalSum);

// if you pass "20",30 in the sum function; it'll concatinate and give output-> 2030
// to avoid this, use parsing method:
// return parseInt(a) + parseInt(b); ---use this insted of 4th line

// Q2. find sum form 1 to a number

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + 1;
	}
	return ans
}

const ans = sum(100);
console.log(ans);

// synchronous code runs in the order of which it is written