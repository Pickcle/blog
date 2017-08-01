var fs = require('fs')
var path = require('path')

var blogsPath = path.resolve(__dirname, '../../pickcle.github.io/_posts')
var distPath = path.resolve(__dirname, '../dist')

function readBlogs () {
  var blogs = []
  fs.readdir(blogsPath, function (err, files) {
    console.log(files)
    files.forEach(function (file) {
      console.log(file)
      var date = file.match(/\d+-\d+-\d+/)[0]
      var dateWithSlash = date.replace('-', '/')
      var title = file.match(/\d+-\d+-\d+-(.*)\.markdown/)[1]

      var blog = {
        date,
        title
      }

      fs.readFile(`${blogsPath}/${file}`, function (err, data) {
        var text = data.toString()
        var categoryText = text.match(/categories:.*/g)[0].replace(' ', '/')

        blog.link = `https://pickcle.github.io/${categoryText}/${dateWithSlash}/${title}.html`
      })
    })
  })

  fs.writeFile(`${distPath}/blogInfo.js`, blogs, (err) => {
    if (err) {
      console.log(`build failed: blogInfo.js, ${err}`)
    } else {
      console.log(`build succeeded: blogInfo.js`)
    }
  })
}

// readBlogs()
console.log(process.env.NODE_ENV)
