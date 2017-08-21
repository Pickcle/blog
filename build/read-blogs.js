/**
 * 读取pickcle.github.io下的post文件夹，将博客数据存入数据库
 * Author: xiaohuajun@bilibili.com
 * Date: 2017.8.14
 */
var fs = require('fs')
var path = require('path')
var connectDb = require('../server/mongodb/connect.js')
var DB = require('../server/mongodb/DB.js')

var marked = require('marked')
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

var blogPath = path.resolve(__dirname, '../../pickcle.github.io/_posts')
var distConfigPath = path.resolve(__dirname, '../dist')
var templatePath = path.resolve(__dirname, '../src/pages/BlogTemplate.vue')
var distPath = path.resolve(__dirname, '../src/pages/blogs')

// if (!fs.existsSync(distPath)) {
//   fs.mkdir(distPath, (err) => {
//     if (err) {
//       console.log(err)
//     }
//   })
// }

var blogNames = []
fs.readdir(blogPath, function (err, files) {
  if (err) {
    console.log('readdir failed: ', err)
    return
  }
  files.forEach(function (file) {
    var date = file.match(/\d+-\d+-\d+/)[0]
    var blogId = ~~date.replace(/-/g, '')
    var watchTimes = 0
    var title = file.match(/\d+-\d+-\d+-(.*)\.markdown/)[1]

    // 读取pickcle.github.io下_posts的博客文件
    fs.readFile(`${blogPath}/${file}`, function (err, blogData) {
      if (err) {
        console.log(`read file ${blogPath}/${file} failed: `, err)
        return
      }
      var blogText = blogData.toString()
      // 去掉头部信息
      blogText = blogText.replace(/---(\n.*){4}\n---/, `### ${date}`)
      // 转成html
      var blogHtml = marked(blogText)
      // var categoryText = blogText.match(/categories:.*/g)[0].split(' ')
      // categoryText.splice(0, 1)
      // categoryText = categoryText.join('/')

      // 依照模板，生成博客文件
      fs.readFile(templatePath, (err, template) => {
        if (err) {
          console.log('read template file failed: ', err)
          return
        }
        var templateText = template.toString()
        templateText = templateText.replace('{content}', blogHtml)
        // templateText = templateText.replace(/{{ title }}/g, title)
        var blogName = `Blog_${blogId}.vue`
        blogNames.push(blogName)

        fs.writeFile(`${distPath}/${blogName}`, templateText, (err) => {
          if (err) {
            console.log(`write Blog_${blogId}.vue failed: `, err)
          } else {
            console.log(`wrtie succeeded: Blog_${blogId}.vue`)
          }
        })
      })

      // github.io上的博客地址
      // var link = `https://pickcle.github.io/${categoryText}/${dateWithSlash}/${title}.html`
      // link = link.replace(/:\s/g, '-')

      // 存入数据库
      connectDb(DB.NODE, (err, db) => {
        if (err) {
          console.log('connectDb failed: ', err)
          return
        }
        db.collection('blog').findOne({ blogId: blogId }, (err, doc) => {
          if (err) {
            console.log('find collection failed: ', err)
          }
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

setTimeout(function() {
  fs.writeFile(`${distConfigPath}/blogConfig.js`, 'export default ' + JSON.stringify(blogNames), err => {
    if (err) {
      console.log('write blogConfig failed: ', err)
      return
    }
    console.log('write blogConfig succeeded')
  })
}, 2000)

// setTimeout(function () {
//   fs.writeFile(`${distPath}/blogsInfo.js`, 'export default ' + JSON.stringify(blogs), (err) => {
//     if (err) {
//       console.log(`write failed: blogInfo.js, ${err}`)
//       return
//     }
//     console.log(`write succeeded: blogInfo.js`)
//   })
// }, 1000)
