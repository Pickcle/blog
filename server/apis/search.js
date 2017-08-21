const connectDb = require('../mongodb/connect.js')
const DB = require('../mongodb/DB.js')

const watch = (req, res) => {
  console.log(req.query)
  console.log(req.query.searchText)
  const searchText = req.query.searchText

  connectDb(DB.NODE, (err, db) => {
    db.collection('blog').find({}).toArray(function (err, result) {
      if (err) {
        console.log(`search ${serachText} failed: `, err)
        db.close()
        res.write(JSON.stringify({ ok: 0 }))
        res.end()
        return
      }
      result = result.filter(function (value) {
        return value.title.indexOf(searchText) != -1
      })
      res.write(JSON.stringify({ ok: 1, result: result }))
      res.end()
      db.close()
    })
  })
}

module.exports = exports = watch
