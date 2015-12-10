var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.post('/form',function(req,res){
    
    var x = req.body.str.split('').reverse().join('')
    res.send(200,x)
    
})

app.listen(process.argv[2])