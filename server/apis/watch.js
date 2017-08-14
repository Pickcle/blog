const connectDb = require('../mongodb/connect.js')
const DB = require('../mongodb/DB.js')

const watch = (req, res) => {
  const url = req.query.url

  connectDb(DB.NODE, (err, db) => {
    db.collection('blog').findOne({ key: url }, (err, result) => {
      if (err) {
        res.write(JSON.stringify({ ok: 0 }))
        res.end()
        db.close()
        return
      }

      const data = {
        key: url
      }
      const newData = {
        $set: {
          watchTimes: result.watchTimes + 1
        }
      }

      db.collection('blog').update(data, newData, (err, result) => {
        if (err) {
          res.write(JSON.stringify({ ok: 0 }))
        } else {
          res.write(JSON.stringify({ ok: 1 }))
        }
        res.end()
        db.close()
      })
    })
  })
}

module.exports = exports = watch
