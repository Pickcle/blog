var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://localhost:27017/node'

MongoClient.connect(DB_CONN_STR, function (err, db) {
  console.log('connect succeeded')
  var collection = db.collection('user')
  var data = {
    name: 'Pickcle',
    age: 26
  }
  collection.insert(data, function (err, result) {
    if (err) {
      console.log('err: ', err)
      return
    }
    console.log('result: ', result.result)
    db.close()
  })
})
