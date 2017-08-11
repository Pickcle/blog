var fs = require('fs')
var path = require('path')

var blogsPath = path.resolve(__dirname, '../../pickcle.github.io/_posts')
var distPath = path.resolve(__dirname, '../dist')

var connectDb = require('../server/mongodb/connect.js')
var DB = require('../server/mongodb/DB.js')

function readBlogs () {
  var blogs = []

  if (!fs.existsSync(distPath)) {
    fs.mkdir(distPath, (err) => {
      if (err) {
        console.log(err)
      }
    })
  }

  fs.readdir(blogsPath, function (err, files) {
    files.forEach(function (file) {
      var date = file.match(/\d+-\d+-\d+/)[0]
      var dateWithSlash = date.replace(/-/g, '/')
      var title = file.match(/\d+-\d+-\d+-(.*)\.markdown/)[1]

      var blog = {
        date,
        title
      }

      fs.readFile(`${blogsPath}/${file}`, function (err, data) {
        if (err) {
          console.log('read file failed', err)
          return
        }
        var text = data.toString()
        var categoryText = text.match(/categories:.*/g)[0].split(' ')
        categoryText.splice(0, 1)
        categoryText = categoryText.join('/')

        blog.link = `https://pickcle.github.io/${categoryText}/${dateWithSlash}/${title}.html`
        blog.link = blog.link.replace(/:\s/g, '-')
        blogs.push(blog)

        connectDb(DB.NODE, (err, db) => {
          db.collection('blog').findOne({ key: blog.link }, (err, doc) => {
            if (doc) {
              blog.watchTimes = doc.watchTimes
              db.close()
            } else {
              blog.watchTimes = 0
              db.collection('blog').insert({
                key: blog.link,
                watchTimes: 0
              }, (err, result) => {
                db.close()
              })
            }
          })
        })
      })
    })
  })

  setTimeout(function () {
    fs.writeFile(`${distPath}/blogsInfo.js`, 'export default ' + JSON.stringify(blogs), (err) => {
      if (err) {
        console.log(`write failed: blogInfo.js, ${err}`)
        return
      }
      console.log(`write succeeded: blogInfo.js`)
    })
  }, 1000)

}

readBlogs()
