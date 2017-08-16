var express = require('express')
var http = require('http')
var url = require('url')
var utils = require('../utils.js')
var config = require('../../config/index.js')

var signup = require('./signup.js')
var login = require('./login.js')
var watch = require('./watch.js')
var getBlogInfo = require('./getBlogInfo.js')

var app = express()
var server = http.createServer(app)

var resHeader = {
  'content-type': 'text/plain;charset=utf-8',
  'access-control-allow-origin': '*'
}

async function waitUntilResolve (promise) {
  await promise
}

// 所有api
const handlers = {
  'signup': signup,
  'login': login,
  'watch': watch,
  'getBlogInfo': getBlogInfo
}

const generateGetHandler = (apiName, handler) => {
  app.get('/' + apiName, function (req, res) {
    res.writeHead(200, resHeader)
    handler(req, res)
  })
}

Object.keys(handlers).forEach(key => {
  const handler = handlers[key]
  generateGetHandler(key, handler)
})

app.listen(config.build.port_api, function () {
  console.log('Listening at http://localhost:' + config.build.port_api)
})
