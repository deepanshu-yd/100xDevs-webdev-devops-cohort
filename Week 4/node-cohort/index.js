const fs = require("fs");
function main(fileName) {
  // console.log(process.argv);

  fs.readFile(fileName,"utf-8", function(err, data){
    let total = 0;
    for(let i = 0; i < data.length; i++){
      if(data[i] === " "){
        total++;
      }
    }
    console.log(total + 1);
  })
}

main(process.argv[2]);
