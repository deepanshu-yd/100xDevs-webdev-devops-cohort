const express = require('express')
const app = express()

// route handlers
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/test-route', (req, res) => {
  res.send('Hello World form test-route endpoint')
})

app.listen(3000) // which port