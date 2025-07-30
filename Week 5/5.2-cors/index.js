// Create a backend server in nodejs, that returns the sum endpoint
// Write an html file that hits the backend server using the 'fetch' api

// use npx serve to use a localhost like link

const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.static('public')); // Serve static files from public directory

app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer: a + b
    })
})

app.listen(3000);