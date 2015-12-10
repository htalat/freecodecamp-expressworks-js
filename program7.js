var express = require('express')

var app = express()

app.get('/search',function(req,res){
    var q = req.query.results;
    var t = req.query.type;
    var r = req.query.page;
    
    var obj = {
        results:q,
        type:t,
        page:r
    }
    res.send(obj)
})

app.listen(process.argv[2])