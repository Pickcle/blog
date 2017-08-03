import blogsInfo from '../dist/blogsInfo.js'
blogsInfo.sort((objA, objB) => {
  const dateA = objA.date.split('-')
  const dateB = objB.date.split('-')
  if (~~dateA[0] === ~~dateB[0]) {
    if (~~dateA[1] === ~~dateB[1]) {
      return ~~dateB[2] - ~~dateA[2]
    } else {
      return ~~dateB[1] - ~~dateA[1]
    }
  } else {
    return ~~dateB[0] - ~~dateA[0]
  }
})

export default {
  getBlogsInfo () {
    return blogsInfo
  }
}
