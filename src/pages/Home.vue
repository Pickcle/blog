<!-- <template>
  <div>
    <div class="article-container bg-white">
      <article class="article" v-for="blog in blogs">
        <a class="article-title p-rel" href="www.baidu.com">标题</a>
        <div class="sub-title">
          <span>
            <i class="d-i-block fa fa-calendar-o"></i>
            <span>发表于</span>
          </span>
          <span>
            <span class="divider">|</span>
            <i class="d-i-block fa fa-comment-o"></i>
          </span>
          <span>
            <span class="divider">|</span>
            <i class="d-i-block fa fa-eye"></i>
            <span>阅读次数</span>
          </span>
        </div>
        <div class="link">
          <a class="more-read" href="www.baidu.com">阅读全文>></a>
        </div>
        <div class="line"></div>
      </article>
    </div>
  </div>
</template> -->

<script>
  import utils from '../utils.js'
  
  export default {
    data () {
      return {
        blogs: utils.getBlogsInfo()
      }
    },

    render (createElement) {
      const blogNodes = this.blogs.map(blog => {
        return createElement(
          'article',
          {
            class: 'article'
          },
          [
            createElement(
              'a',
              {
                attrs: {
                  href: blog.link
                },
                class: 'article-title p-rel c-pointer'
              },
              blog.title
            ),
            createElement(
              'div',
              {
                class: 'sub-title'
              },
              [
                createElement(
                  'span',
                  {},
                  [
                    createElement(
                      'i',
                      {
                        class: 'd-i-block fa fa-calendar-o'
                      }
                    ),
                    createElement(
                      'span',
                      {
                        style: 'padding-left: 5px'
                      },
                      '发表于' + blog.date
                    )
                  ]
                ),
                createElement(
                  'span',
                  {},
                  [
                    createElement(
                      'span',
                      {
                        class: 'divider'
                      },
                      '|'
                    ),
                    createElement(
                      'i',
                      {
                        class: 'd-i-block fa fa-comment-o'
                      }
                    )
                  ]
                ),
                createElement(
                  'span',
                  {},
                  [
                    createElement(
                      'span',
                      {
                        class: 'divider'
                      },
                      '|'
                    ),
                    createElement(
                      'i',
                      {
                        class: 'd-i-block fa fa-eye'
                      }
                    ),
                    createElement(
                      'span',
                      {
                        style: 'padding-left: 5px'
                      },
                      '阅读次数' + blog.times
                    )
                  ]
                )
              ]
            ),
            createElement(
              'div',
              {
                class: 'line'
              }
            )
          ]
        )
      })
      return createElement(
        'div',
        {},
        [
          createElement(
            'div',
            {
              class: 'article-container bg-white'
            },
            blogNodes
          )
        ]
      )
    }
  }
</script>

<style lang="sass" scoped>
  .article-container
    width: 100%
    padding: 5px 30px 30px 30px

    .article
      margin-top: 20px

      .article-title
        font-size: 26px

        &:after
          content: ""
          position: absolute
          bottom: 0
          left: 0
          background-color: #000
          width: 100%
          height: 2px
          transform: scaleX(0)
          transition: transform 0.2s

        &:hover
          &:after
            transform: scaleX(1)

      .sub-title
        margin: 10px 0 20px
        font-size: 12px
        color: #999

        .divider
          padding: 0 5px

      .line
        border-bottom: 1px solid #555

      // .link
      //
      //   .more-read
      //     font-size: 14px
      //     border: 2px solid #222
      //     padding: 2px 5px
      //     transition: background-color 0.2s
      //     transition: color 0.2s
      //
      //     &:hover
      //       background-color: #222
      //       color: #fff

</style>
