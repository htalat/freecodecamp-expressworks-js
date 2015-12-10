var express = require('express')
var app = express()
var crypt = require('crypto')

app.put('/message/:id',function(req,res){
    res.status(200).send(crypt.createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'))
})
app.listen(process.argv[2])