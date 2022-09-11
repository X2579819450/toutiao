// 1. yarn add axios
// 2. 引入axios
// 3. 配置axios
import store from '@/store'
import axios from 'axios'
// axios.default.baseURL = 'http://toutiao.itheima.net'
// axios.default.timeout = 3000
const request = axios.create({
  baseURL: 'http://toutiao.itheima.net',
  timeout: 3000
})

// 请求拦截器：请求做一些事情
// config 是每一次请求的配置对象

request.interceptors.request.use(
  function (config) {
    // 每一次发请求都会执行
    // 在发送请求之前做些什么
    // 登录了，所有的请求都加上Authorization
    const {
      getters: { isLogin },
      state: { tokenObj }
    } = store
    if (isLogin) {
      config.headers.Authorization = `Bearer ${tokenObj.token}`
    }
    return config // 必须返回config
  }
  // function (error) {
  // }
)

export default request
