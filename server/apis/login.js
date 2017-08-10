var connectDb = require('../mongodb/connect.js')

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
        res.write(JSON.stringify({ result: 0 }))
        res.end()
        return
      }
      res.write(JSON.stringify({ ok: 1 }))
      res.end()
    })
  })
}

module.exports = exports = login
