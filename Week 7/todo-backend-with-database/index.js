const express = require('express');

const app = express();
app.use(express.json());

// create the skeleton of 4 routes: POST/signup, POST/signin, POST/todo(authenticated), GET/todo(authenticated)

app.post("/signup", function(req, res){

});

app.post("/signin", function(req, res){

});

app.post("/todo", function(req, res){

});

app.get("/todo", function (req, res){

});

app.listen(3000);