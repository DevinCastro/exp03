// always use these lines to start an express server
const express = require('express')
const app = express()

// req query
// app.get('/test', (req, res) => {

//   res.send(`Hello ${req.query.n}`)
// })


// req param
app.get('/calc/:opp/:a/:b', (req,res) => {
  switch (req.params.opp) {
    case 'add':
      console.log(parseInt(req.params.a) + parseInt(req.params.b))
      break;
  
    case 'subtract':
      console.log(parseInt(req.params.a) - parseInt(req.params.b))
      break;
  
    case 'multiply':
      console.log(parseInt(req.params.a) * parseInt(req.params.b))
      break;
  
    case 'divide':
      console.log(parseInt(req.params.a) / parseInt(req.params.b))
      break;
  
    default:
      break;
  }
//  res.send(`hello ${req.params.n}`)
})


app.listen(3000)




