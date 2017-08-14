/**
 * 读取pickcle.github.io下的post文件夹，将博客数据存入数据库
 * Author: xiaohuajun@bilibili.com
 * Date: 2017.8.14
 */
var fs = require('fs')
var path = require('path')
var connectDb = require('../server/mongodb/connect.js')
var DB = require('../server/mongodb/DB.js')

var showdown = require('showdown')
showdown.setFlavor('github')
var converter = new showdown.Converter()

var blogPath = path.resolve(__dirname, '../../pickcle.github.io/_posts')
// var distPath = path.resolve(__dirname, '../dist')
var templatePath = path.resolve(__dirname, '../src/pages/BlogTemplate.vue')
var distPath = path.resolve(__dirname, '../src/pages/blogs')

// if (!fs.existsSync(distPath)) {
//   fs.mkdir(distPath, (err) => {
//     if (err) {
//       console.log(err)
//     }
//   })
// }

fs.readdir(blogPath, function (err, files) {
  files.forEach(function (file) {
    var date = file.match(/\d+-\d+-\d+/)[0]
    var blogId = ~~date.replace(/-/g, '')
    var watchTimes = 0
    var title = file.match(/\d+-\d+-\d+-(.*)\.markdown/)[1]

    fs.readFile(`${blogPath}/${file}`, function (err, blogData) {
      if (err) {
        console.log('read file failed', err)
        return
      }
      var blogText = blogData.toString()
      var blogHtml = converter.makeHtml(blogText)
      // var categoryText = blogText.match(/categories:.*/g)[0].split(' ')
      // categoryText.splice(0, 1)
      // categoryText = categoryText.join('/')

      // 依照模板，生成博客文件
      fs.readFile(templatePath, (err, template) => {
        var templateText = template.toString()
        // templateText = templateText.replace(/{{ title }}/g, title)
        templateText = templateText.replace('content', blogHtml)

        fs.writeFile(`${distPath}/Blog_${blogId}.vue`, templateText, (err) => {
          if (err) {
            console.log(`build failed: Blog_${blogId}.vue, ${err}`)
          } else {
            console.log(`build succeeded: Blog_${blogId}.vue`)
          }
        })
      })

      // github.io上的博客地址
      // var link = `https://pickcle.github.io/${categoryText}/${dateWithSlash}/${title}.html`
      // link = link.replace(/:\s/g, '-')

      // 存入数据库
      connectDb(DB.NODE, (err, db) => {
        db.collection('blog').findOne({ blogId: blogId }, (err, doc) => {
          // 如果是第一次存
          if (!doc) {
            db.collection('blog').insert({
              blogId,
              watchTimes,
              date,
              title
            }, (err, result) => {
              db.close()
            })
          } else {
            db.close()
          }
        })
      })
    })
  })
})

// setTimeout(function () {
//   fs.writeFile(`${distPath}/blogsInfo.js`, 'export default ' + JSON.stringify(blogs), (err) => {
//     if (err) {
//       console.log(`write failed: blogInfo.js, ${err}`)
//       return
//     }
//     console.log(`write succeeded: blogInfo.js`)
//   })
// }, 1000)
