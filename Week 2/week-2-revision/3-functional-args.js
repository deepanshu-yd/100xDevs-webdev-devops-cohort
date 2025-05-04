// make a simple calculator

// Approach 1
function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
console.log("Approach 1");

console.log(sum(10,20));
console.log(sub(20,10));
console.log(mul(10,10));
console.log(div(20,10));

// Approach 2

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

function doOperation(a,b,op){
    return op(a,b);
}

console.log("Approach 2");


console.log(doOperation(20,10,sum));
console.log(doOperation(20,10,sub));
console.log(doOperation(10,10,mul));
console.log(doOperation(20,10,div));

