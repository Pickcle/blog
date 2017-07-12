var express = require('express')
var http = require('http')

var app = express()
var server = http.createServer(app)

var resHeader = {
  'content-type': 'text/plain',
  'access-control-allow-origin': '*'
}

app.get('/add', function (req, res) {
  res.writeHead(200, resHeader)
  res.write('express')
  res.end()
  // res.send('express')
}).listen(9091)
