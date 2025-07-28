const express = require ('express');
const app = express();

let requestCount = 0;

function requestIncreaser() {
    requestCount = requestCount + 1;
    console.log(`Total number of Requests = ${requestCount}`);
}

function realSumHandler(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
}

// route for addition
app.get("/addition", requestIncreaser, realSumHandler);

//route for multiplication
app.get("/multiplication", function(req,res){

    requestIncreaser();
    // main logic
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })
});

app.listen(3000)