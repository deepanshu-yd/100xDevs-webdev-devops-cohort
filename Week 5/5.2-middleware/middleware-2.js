const express = require ('express');
const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next) {
    requestCount = requestCount + 1;
    console.log(`Total number of Requests = ${requestCount}`);
    // You can add a real condition here, for now always call next()
    next();
    // next() -> if this is not included, the process will not go forward
}

function realSumHandler(req, res) {
    console.log("control reached the real handler");

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
}

app.get("/addition", requestIncreaser, realSumHandler);


app.use (requestIncreaser) // this means that all the routes mentioned this will be able to access requestIncreaser. routes above this line won't
app.get("/addition1", /*requestIncreaser,*/ realSumHandler);
app.get("/addition2", /*requestIncreaser,*/ realSumHandler);
app.get("/addition3", /*requestIncreaser,*/ realSumHandler);
app.get("/addition4", /*requestIncreaser,*/ realSumHandler);

app.listen(3000);