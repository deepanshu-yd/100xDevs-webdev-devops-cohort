const express = require("express");
const  app = express()

app.get('/code100x', (req, res)=>{
    res.send("Access Granted");
})

app.listen(3000)
