const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', function(req, res){
 // res.writeHead(200,{'Content':'text/html'})
 res.sendFile(__dirname + '/calculator.html')
}).listen(3100);

console.log('server now running')