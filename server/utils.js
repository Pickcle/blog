module.exports = exports = {
  // 获取query中某个字段的值
  getPropertyFromQuery (query, property) {
    if (!query || typeof query !== 'string') {
      return ''
    }
    return query.replace(new RegExp(`(${property})=(\w*)`), '$2')
  }
}
