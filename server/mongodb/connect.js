var MongoClient = require('mongodb').MongoClient
var NODE_DB = 'mongodb://localhost:27017/node'

function connectDb (callback) {
  MongoClient.connect(NODE_DB, callback)
}

module.exports = exports = connectDb

// var mc = MongoClient.connect(DB_CONN_STR)
// mc.then((db) => {
//   // console.log(db)
//   db.collection('user').insert({ a:1, b:2 })
// })
//
// setInterval(() => {
//   mc.then((db) => {
//     // console.log(db)
//     db.collection('user').find().toArray(function (err, result) {
//       console.log('result2:', result)
//     })
//   })
// }, 3000)
