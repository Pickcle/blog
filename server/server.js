var express = require('express')
var http = require('http')

var app = express()
var server = http.createServer(app)
app.get('/', function (req, res) {
  res.send('express')
}).listen(9091)
