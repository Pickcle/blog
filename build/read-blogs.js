var fs = require('fs')
var path = require('path')

var blogsPath = path.resolve(__dirname, '../../pickcle.github.io/_posts')
var distPath = path.resolve(__dirname, '../dist')

function readBlogs () {
  var blogs = []

  if (!fs.existsSync(distPath)) {
    fs.mkdir(distPath, (err) => {
      if (err) {
        console.log(err)
      }
    })
  }

  fs.writeFile(`${distPath}/blogInfo.js`, '', (err) => {
    if (err) {
      console.log(`clear failed: blogInfo.js, ${err}`)
      return
    }
    console.log(`clear succeeded: blogInfo.js`)
  })

  fs.readdir(blogsPath, function (err, files) {
    files.forEach(function (file) {
      var date = file.match(/\d+-\d+-\d+/)[0]
      var dateWithSlash = date.replace('-', '/')
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
        blogs.push(blog)
      })
    })
  })

  setTimeout(function () {
    fs.writeFile(`${distPath}/blogInfo.js`, JSON.stringify(blogs), (err) => {
      if (err) {
        console.log(`write failed: blogInfo.js, ${err}`)
        return
      }
      console.log(`write succeeded: blogInfo.js`)
    })
  }, 1000)

}

module.exports = exports = readBlogs
