const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')

var bodyParser = require('body-parser')


 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
//to handle cors 
app.use(cors())

// parse application/json
app.use(bodyParser.json())
 
//apis
app.get('/users', (req, res) => {
  res.status(200).json([{name : "kjdhvb", age : 14}, {name : "dfhv", age : 18}])
})

app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    if(username == "manoj" && password == "password")
        return res.status(200).json({status : "SUCCsdsdsESS"})
    else  return res.status(400).json({status : "Failed to authenticate"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})