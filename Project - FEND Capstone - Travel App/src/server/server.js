var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

let dataStorage = [];

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.listen(8081, function(){
  console.log('Server running on port 8081!')
})

// app.get('/', function (req, res) {
//     res.sendFile('../dist/index.html')    //need help setting this up
// })


app.post('/formHandler', function(req, res){

  dataStorage.push(req.body);
  console.log(dataStorage)
})
