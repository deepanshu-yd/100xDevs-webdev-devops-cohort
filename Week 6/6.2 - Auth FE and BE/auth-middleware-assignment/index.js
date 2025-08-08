// assignment: create a middleware that verifies if the user is logged in and will end the request early if the user is not logged in

// my approach -> add a auth middleware that runs before the function to verify user once for all: p.s. same solution

const express = require ('express');
const jwt = require("jsonwebtoken");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const JWT_SECRET = "deepanshuilovecomputers";

const users = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Require both username and password
    if (!username || !password || !String(username).trim() || !String(password).trim()) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    users.push({
        username: username,
        password: password
    })

    res.send({
        message: "You have been signed up!"
    })
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Require both username and password
    if (!username || !password || !String(username).trim() || !String(password).trim()) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const user = users.find( user => user.username === username && user.password === password);

    if(user){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET); // convert the username to a jwt

        // user.token = token;
        res.send({ //res.json
            token
        })
        console.log(users);
    } else{
        res.status(403).send({
            message: "Invalid username and password"
        })
    }
});

function auth(req, res, next){
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: "You are not logged in"
        });
    }

    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;

    try {
        const decodedInformation = jwt.verify(token, JWT_SECRET);
        if (decodedInformation.username){
            req.username = decodedInformation.username;
            return next();
        }
        return res.status(401).json({ message: "You are not logged in" });
    } catch (e) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

app.get("/me", auth, (req, res) => {
    // const token = req.headers.authorization;
    // const decodedInformation = jwt.verify(token, JWT_SECRET); // commenting so that it would be included in the middleware that verifies just once, insted of doing it again and again for all the endpoints

    const username = req.username; // Use req.username set by the auth middleware

    const user = users.find(user => user.username === username);

    if (user){
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

app.listen(3000);