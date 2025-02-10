// // Making timer in js that logs number starting form 0 each second

// let ctr = 0;
// function callback(){
// 	console.log(ctr);
// 	ctr = ctr + 1;
// }

// setInterval(callback, 1000) // setInterval will call it after every 1s
// // if we use setTimeout(callback, 1000) the it'll only call once


let ctr = 0;
function callback() {
	const el = document.querySelectorAll("h2")[1]
	el.innerHTML = ctr;
	ctr = ctr + 1;
}
setInterval(callback, 1000);

// works correctly -> in browser, in second h2, the number starts and increments after every 1s
// remember the syntax