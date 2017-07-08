var http = require('http')

var responseHead = {
  'content-type': 'text/plain',
  'access-control-allow-origin': '*'
}

http.createServer(function (req, res) {
  res.writeHead(200, responseHead)
  res.write('Welcome')
  res.end()

  console.log('received request')
}).listen(8081)
