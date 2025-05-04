// find sum form 1 to a number

function sum(n){
    let ans = 0;
    for(let i = 1; i <= n ; i++){
        ans = ans + i;
    }
    return ans;
}

console.log(sum(100));
