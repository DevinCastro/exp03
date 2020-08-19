// always use these lines to start an express server
const express = require('express')
const { join } = require('path')

const app = express()

// declare middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())




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

app.use(require('./routes'))

app.listen(process.env.PORT || 3000)