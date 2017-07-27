var express = require('express')
var config = require('../config/index.js')

var app = express()
app.use(express.static('dist'))
app.listen(config.build.port, function () {
  console.log('Listening at http://localhost:' + config.build.port)
})
