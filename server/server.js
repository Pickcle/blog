var express = require('express')
var http = require('http')
var url = require('url')

var utils = require('./utils.js')

var MongoClient = require('mongodb').MongoClient
var DB = 'mongodb://localhost:27017/node'

var app = express()
var server = http.createServer(app)

var resHeader = {
  'content-type': 'text/plain',
  'access-control-allow-origin': '*'
}

const s = JSON.stringify

async function waitUntilResolve (promise) {
  await promise
}

const connectDb = callback => {
  MongoClient.connect(DB, callback)
}

/**
 * @return 0：数据库操作失败，1：已注册过，2：注册成功
 */
const signup = (req, res) => {
  const user_name = req.query.user_name
  const password = req.query.password

  connectDb((err, db) => {
    db.collection('user').findOne({ user_name }, (err, doc) => {
      if (doc) {
        res.write(s({ result: 1 }))
        res.end()
        db.close()
      } else {
        connectDb((err, db) => {
          db.collection('user').insert({
            user_name,
            password
          }, (err, result) => {
            if (err) {
              res.write(s({ result: 0 }))
            } else {
              res.write(s({ result: 2 }))
            }
            res.end()
            db.close()
          })
        })
      }
    })
  })
}

const login = req => {
  const user_name = req.query.user_name
  const password = req.query.password

  mc.then(db => {
    db.collection('user').insert({
      user_name,
      password
    }, (err, result) => {
      if (err) {
        console.log(err)
        res.write(s({ result: 0 }))
        res.end()
        return
      }
      res.write(s({ ok: 1 }))
      res.end()
    })
  })
}

const handlers = {
  'signup': signup,
  'login': login
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

app.get('/addlist', (req, res) => {
  res.writeHead(200, resHeader)
  res.write('sss')
  res.end()
})

app.listen(9091)
