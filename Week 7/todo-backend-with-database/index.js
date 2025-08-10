const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://yadavdeepanshu000:uFcAbL0AZVFCO5rvf@cluster0.n3uj5jq.mongodb.net/todo-app-database")

const express = require('express');

const app = express();
app.use(express.json());

const { userModel, TodoModel, UserModel } = require("./db");
const JWT_SECRET = "deepanshucodes";

// create the skeleton of 4 routes: POST/signup, POST/signin, POST/todo(authenticated), GET/todo(authenticated)

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await userModel.create({
        email:email,
        password:password,
        name: name
    });

    res.json({
        message:"You are signed up!"
    })
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password
    });

    if (response) {
        const token = jwt.sign({
            id:response._id.toString()
        })
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});

app.post("/todo", function(req, res){
    const { auth, JWT_SECRET } = require("./auth");
});

app.get("/todo", function (req, res){

});

app.listen(3000);