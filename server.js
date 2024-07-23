const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("Welcome everyone to my 1st Node Application");

});

app.listen(3000, function() {
    console.log('app listening at http:localhost:${3000}');

});