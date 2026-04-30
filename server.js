console.log("Web Server starts")
const express = require('express')
const app = express()

// Tradional GET API 
app.get('/', (req, res) => {
  console.log("/ get");
  res.send('<h1>Hello World!</h1>');
})

// Rest API 
app.get('/rest', (req, res) => {
    console.log("/rest get");
    res.json({name: "Marco", age: 21, group: "MIT"});
  })

app.listen(3000, () => {
  console.log(`Backend Server is running  on port ${3000}`)
})
