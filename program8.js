var express = require('express')
var fs = require('fs')
var app = express()

app.get('/books',function(req,res){
    var object 
    fs.readFile(process.argv[3],function(err,data){
        if(err)
            console.log(err)
        object = JSON.parse(data)
        res.send(object)
    })
    
})

app.listen(process.argv[2])