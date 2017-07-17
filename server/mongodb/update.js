var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://localhost:27017/node'

var _db

MongoClient.connect(DB_CONN_STR, function (err, db) {
  _db = db
  console.log('connect succeeded')
  var collection = db.collection('user')
  var data = {
    name: 'Pickcle'
  }
  var newData = {
    $set: {
      name: 'Arki',
      age: 25
    }
  }
  collection.update(data, newData, {multi: true}, function (err, result) {
    if (err) {
      console.log('err: ', err)
      return
    }
    console.log('result: ', result.result)
    // db.close()
  })
})

setTimeout(function () {
  _db.collection('user').find().toArray(function (err, result) {
    console.log('result:', result)
    // db.close()
  })
}, 5000)
