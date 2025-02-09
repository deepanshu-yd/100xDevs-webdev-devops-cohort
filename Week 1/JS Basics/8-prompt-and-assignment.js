alert("Hello");
// -------------------
let name1 = prompt("Hi");
console.log(name1);

//----------------------------------
//Assignment 1 (p.s: checked and works correctly)

// Take input form user form using Prompt and check if the number entered is divisible by 5 or not

// Method 1
let num = prompt("Enter a Number"); // using if-else method
if (num % 5 === 0){
console.log("Divisible by 5");
}
else {
console.log("not divisible by 5");
}

// Method 2
let num1 = prompt("Enter a Number") %5 === 0 ? console.log("divisible") : console.log("not divisible")

// Assignment 2
// Write a code that can give grades to students according to their scores:
// 90 - 100 -> A , 70 - 89 -> B , 60 - 79 -> C , 50 - 59 -> D , 0 - 49 -> F

let score = prompt("Enter your Grade:");
let grade;

if (score >= 90 && score <= 100){
grade = "A";
}
else if (score >= 70 && score <= 89){
grade = "B";
}
else if (score >= 60 && score <= 69){
grade = "C";
}
else if (score >= 50 && score <= 59){
grade = "D";
}
else if (score >= 0 && score <= 49){
grade = "F";
}
else{
console.log("Invalid Grade");
}

console.log(grade);