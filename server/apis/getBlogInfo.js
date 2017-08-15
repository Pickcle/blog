var connectDb = require('../mongodb/connect.js')
var DB = require('../mongodb/DB.js')

const getBlogInfo = (req, res) => {
  connectDb(DB.NODE, (err, db) => {
    db.collection('blog').find({}).toArray(function (err, result) {
      if (err) {
        res.write(JSON.stringify({ ok: 0 }))
        res.end()
        return
      }

      result.forEach(blogInfo => {
        delete blogInfo['_id']
      })

      res.write(JSON.stringify({ ok: 1, 'abc': '测试', 'result': result }))
      res.end()
    })
  })
}

module.exports = exports = getBlogInfo
