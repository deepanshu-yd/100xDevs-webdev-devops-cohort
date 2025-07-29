// What are Middlewares?
// middlewares are function that has access to request object (req), response object(res) and the next function in the application's request-response cycle
// They can perform a variety of tasks: *Modifying* the request-response cycle, Ending the request-response cycle, and Calling the next middleware function in stack.

const express = require ('express');
const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next) {
    requestCount = requestCount + 1;
    req.name = "random123"; // using middleware to modify a request
    console.log(`Total number of Requests = ${requestCount}`);
    next();
}

function realSumHandler(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(req.name);

    res.json({
        ans: a + b
    });
}

app.get("/addition", requestIncreaser, realSumHandler);

// In this case, requestIncreaser is a Middleware, if only the process gets passed will the user will be able to access the realSumHandler

app.listen(3000);