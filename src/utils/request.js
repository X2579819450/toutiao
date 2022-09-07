// 1. yarn add axios
// 2. 引入axios
// 3. 配置axios
import axios from 'axios'
// axios.default.baseURL = 'http://toutiao.itheima.net'
// axios.default.timeout = 3000
const request = axios.create({
  baseURL: 'http://toutiao.itheima.net',
  timeout: 3000
})
export default request
