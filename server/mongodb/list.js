var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://localhost:27017/node'

MongoClient.connect(DB_CONN_STR, function (err, db) {
  console.log('connect succeeded')
  var collection = db.collection('user')
  collection.find({}).toArray(function (err, result) {
    console.log('result:', result)
    db.close()
  })
})
