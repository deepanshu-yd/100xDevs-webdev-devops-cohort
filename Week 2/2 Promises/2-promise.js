function random() {

}

let p = new Promise(random);

function callback() {
	console.log("Promise Succeded");
}

p.then(callback)