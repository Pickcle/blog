var connectDb = require('../mongodb/connect.js')
var DB = require('../mongodb/DB.js')

/**
 * @return 0：数据库操作失败，1：已注册过，2：注册成功
 */
const signup = (req, res) => {
  const user_name = req.query.user_name
  const password = req.query.password

  connectDb(DB.NODE, (err, db) => {
    db.collection('user').findOne({ user_name }, (err, doc) => {
      if (doc) {
        res.write(JSON.stringify({ result: 1 }))
        res.end()
        db.close()
      } else {
        connectDb((err, db) => {
          db.collection('user').insert({
            user_name,
            password
          }, (err, result) => {
            if (err) {
              res.write(JSON.stringify({ result: 0 }))
            } else {
              res.write(JSON.stringify({ result: 2 }))
            }
            res.end()
            db.close()
          })
        })
      }
    })
  })
}

module.exports = exports = signup
