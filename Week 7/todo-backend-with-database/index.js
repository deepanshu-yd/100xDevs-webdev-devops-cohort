// Import the express, mongoose, and jwt modules
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// Import the UserModel and TodoModel from the db.js file
const { UserModel, TodoModel } = require("./db");

// Create an instance of the express module
const app = express();

// Parse the JSON data using the express.json() middleware
app.use(express.json());

// Connect to the MongoDB database using the mongoose.connect() method
mongoose.connect("mongodb+srv://admin:<password-here>@cluster0.n3uj5jq.mongodb.net/todo-app-db")
.then(() => {
    console.log("Connected to MongoDB successfully!");
    // Start the server on port 3000 only after successful DB connection
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
});

// Create a JWT_SECRET variable for the secret key
const JWT_SECRET = "deepanshucodes";

// Create a POST route for the signup endpoint
app.post("/signup", async function (req, res) {
    // Get the email, password, and name from the request body
    const { email, password, name } = req.body;

    try {
        // Create a new user using the UserModel.create() method
        await UserModel.create({ email, password, name });

        // Send a success response to the client
        res.json({ message: "You are signed up!" });
    } catch (error) {
        // Check if it's a duplicate key error (user already exists)
        if (error.code === 11000) {
            res.status(400).json({ message: "User already exists!" });
        } else {
            // Handle other potential errors
            res.status(500).json({ message: "Error creating user: " + error.message });
        }
    }
});

// Create a POST route for the signin endpoint
app.post("/signin", async function (req, res) {
    // Get the email and password from the request body
    const { email, password } = req.body;

    try {
        // Find the user with the given email and password
        const user = await UserModel.findOne({ email, password });

        if (user) {
            // Create a JWT token
            const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);

            // Send the token to the client
            res.json({ token, message: "You are signed in!" });
        } else {
            // If the user is not found, send an error message
            res.status(403).json({ message: "Invalid Credentials!" });
        }
    } catch (error) {
        // Catch any other potential errors
        res.status(500).json({ message: "An error occurred during signin." });
    }
});

// Create an auth middleware function to authenticate the user
function auth(req, res, next) {
    // Get the token from the Authorization header
    const token = req.headers.authorization;

    try {
        // Verify the token using the jwt.verify() method
        const decodedData = jwt.verify(token, JWT_SECRET);

        // If the token is valid
        if (decodedData) {
            // Set the userId in the request object
            req.userId = decodedData.id;

            // Call the next middleware
            next();
        } else {
            // If the token is invalid, send an error message
            res.status(403).json({ message: "Invalid Token!" });
        }
    } catch (error) {
        // Catch any errors in token verification
        res.status(403).json({ message: "Invalid Token!" });
    }
}

// Create a POST route for the todo endpoint
app.post("/todo", auth, async function (req, res) {
    // Get the title and done values from the request body
    const { title, done } = req.body;

    // Get the userId from the request object
    const userId = req.userId;

    try {
        // Create a new todo
        await TodoModel.create({ userId, title, done });

        // Send a success response
        res.status(201).json({ message: "Todo created!" });
    } catch (error) {
        // Handle potential errors in todo creation
        res.status(500).json({ message: "Error creating todo" });
    }
});

// Create a GET route for the todo endpoint
app.get("/todo", auth, async function (req, res) {
    // Get the userId from the request object
    const userId = req.userId;

    try {
        // Find all the todos for the authenticated user
        const todos = await TodoModel.find({ userId });

        // If todos are found
        if (todos) {
            // Send the todos to the client
            res.status(200).json(todos);
        } else {
            // If no todos are found, send an error message
            res.json({ message: "No todos found" });
        }
    } catch (error) {
        // Handle potential errors in fetching todos
        res.status(500).json({ message: "Error fetching todos" });
    }
});