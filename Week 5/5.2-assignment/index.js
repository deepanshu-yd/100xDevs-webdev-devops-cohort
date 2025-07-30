// Assignment 1 - Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

// logs the method, timestamp and url

const express = require("express");

const app = express();

function loggerMiddleware(req, res, next){
    console.log("Method is " + req.method);
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log(fullUrl);
    console.log(new Date());

    next();
}

app.use(loggerMiddleware);

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);