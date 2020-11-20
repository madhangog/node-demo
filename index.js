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
 

const desserts = [
  {id : 1, name : "Frozen yoghurt", Calories : 109, Fat :7, Carbs : 889, Protein : 98},
  {id : 2, name : "Ice cream sandwich	", Calories : 109, Fat :7, Carbs : 889, Protein : 98},
  {id : 3, name : "Eclair", Calories : 109, Fat :7, Carbs : 889, Protein : 98},
  {id : 4, name : "Cupcake", Calories : 109, Fat :7, Carbs : 889, Protein : 98},
  {id : 5, name : "Frozen yoghurt", Calories : 109, Fat :7, Carbs : 889, Protein : 98},
  {id : 6, name : "Ice cream sandwich", Calories : 109, Fat :7, Carbs : 889, Protein : 98},
  {id : 7, name : "Eclair", Calories : 109, Fat :7, Carbs : 889, Protein : 98},
  {id : 8, name : "Cupcake", Calories : 109, Fat :7, Carbs : 889, Protein : 98},
]


app.get("/desserts", (req, res) =>{
  res.status(200).json({status : "SUCCESS", data : desserts})
})

app.get("/desserts/:id", (req, res) =>{
  let id = req.params.id
  console.log(req.params.id)
  let dessert =  desserts.find((c) => c.id == id)

  res.status(200).json({status : "SUCCESS", data : dessert})
})


app.post("/desserts", (req, res) =>{
  let data = req.body
  desserts.push({
        id : data.id,
        name : data.name,
        Calories : data.Calories,
        Fat : data.Fat,
        Carbs : data.Carbs,
        Protein : data.Protein
      })

  res.status(200).json({status : "SUCCESS", data : desserts})
})

// app.put("/desserts/:id", (req, res) =>{
//   let id = req.params.id
//   let data = req.body

//   let dessert =  desserts.filter(dessert => {
//     if(dessert.id === id) return dessert
//   })
//   res.status(200).json({status : "SUCCESS", data : desserts})
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



//apis
// app.get('/users', (req, res) => {
//   res.status(200).json([{name : "kjdhvb", age : 14}, {name : "dfhv", age : 18}])
// })

// app.post('/login', (req, res) => {
//     let username = req.body.username
//     let password = req.body.password

//     if(username == "manoj" && password == "password")
//         return res.status(200).json({status : "SUCCsdsdsESS"})
//     else  return res.status(400).json({status : "Failed to authenticate"})
// })