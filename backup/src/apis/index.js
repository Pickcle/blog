import axios from 'axios'

const exports = {}

let url = ''
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:9091'
} else {
  url = 'http://www.myarki.com'
}

const getApis = {
  'signup': ['user_name', 'password'],
  'login': ['user_name', 'password']
}

const getApiGenerator = (apiName, paramsList) => {
  return function (...args) {
    const params = {}
    paramsList.forEach((value, index) => {
      params[value] = args[index] || ''
    })
    return axios.get(url + '/' + apiName, {
      params
    })
  }
}

Object.keys(getApis).forEach(key => {
  const paramsList = getApis[key]
  exports[key] = getApiGenerator(key, paramsList)
})

axios.interceptors.request.use(function (config) {
  console.log('---request:', config.url)
  console.log('---request params:', JSON.stringify(config.params))
  return Promise.resolve(config)
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  if (response.status === 200) {
    console.log('---response: ', response.config.url)
    console.log('---response params:', JSON.stringify(response.data))
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response)
  }
}, function (error) {
  console.log('-------axios response error:', error)
  return Promise.reject(error)
})

export default exports
