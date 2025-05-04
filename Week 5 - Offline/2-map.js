// given an arry, give me back a new array in which every value is mltiplied by 2
// input: [1, 2, 3, 4, 5]
// output: [1, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5]

const newArray = [];

for (let i = 0; i < input.length; i++) {
	newArray.push(input[i] * 2)
}

console.log(newArray);
