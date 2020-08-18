// always use these lines to start an express server
const express = require('express')
const { join } = require('path')

const app = express()

// declare middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let items = []

// req query
// app.get('/test', (req, res) => {

//   res.send(`Hello ${req.query.n}`)
// })


// req param
// app.get('/calc/:opp/:a/:b', (req,res) => {
//   switch (req.params.opp) {
//     case 'add':
//       console.log(parseInt(req.params.a) + parseInt(req.params.b))
//       break;
  
//     case 'subtract':
//       console.log(parseInt(req.params.a) - parseInt(req.params.b))
//       break;
  
//     case 'multiply':
//       console.log(parseInt(req.params.a) * parseInt(req.params.b))
//       break;
  
//     case 'divide':
//       console.log(parseInt(req.params.a) / parseInt(req.params.b))
//       break;
  
//     default:
//       break;
//   }
// //  res.send(`hello ${req.params.n}`)
// })



// GET all items
app.get('/items', (req, res) => {
  res.json(items)
})

// POST one item
app.post('/items', (req, res) => {
  items.push(req.body)
  // console.log(items)
  // send ok status code
  res.sendStatus(200)
})

// PUT one item
app.put('/items/:text', (req, res) => {
  console.log(req.params.text)
  console.log(req.body)
  for (i = 0; i < items.length; i++) {
    if (items[i].text === req.params.text) {
      items[i].isDone = req.body.isDone
    }
  }
  res.sendStatus(200)

})

// DELETE one item
app.delete('/items/:text', (req, res) => {
  items = items.filter(item => item.text !== req.params.text)
  res.sendStatus(200)
})






app.listen(3000)