const express = require ('express');
const app = express();

// route for addition
app.get("/addition", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

//route for subtraction
app.get("/subtraction", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a - b
    })
});

//route for multiplication
app.get("/multiplication", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a * b
    })
});

//route for division
app.get("/division", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a / b
    })
});


app.listen(3000)