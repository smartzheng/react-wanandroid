import * as Urls from './urls'
import axios from 'axios';
import toast from '../utils/toast'
/**
 * 主要params参数
 * @params method {string} 方法名
 * @params url {string} 请求地址  例如：/login 配合baseURL组成完整请求地址
 * @params baseURL {string} 请求地址统一前缀 
 * @params timeout {number} 请求超时时间 默认 30000
 * @params params {object}  get方式传参key值
 * @params headers {string} 指定请求头信息
 * @params withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @params validateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 * 其他更多拓展参看axios文档后 自行拓展
 * 注意：params中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在params中带入
 * 返回格式为
 {
    "data": ...,
    "errorCode": 0,
    "errorMsg": ""
  },
  * 其中errorCode如果为负数则认为错误，此时errorMsg会包含错误信息。data为Object，返回数据根据不同的接口而变化。
  * errorCode = 0 代表执行成功，不建议依赖任何非0的errorCode.
  * errorCode = -1001 代表登录失效，需要重新登录。
*/

export default class Server {
  async post(url, params) {
    axios('post', url, params)
  }

  async get(url, params) {
    axios('get', url, params)
  }

  async axios(method, url, params) {
    if (typeof params !== 'object') params = {};
    let option = params;
    option = {
      method,
      url,
      baseURL: Urls.baseUrl,
      timeout: 30000,
      params: method === 'get' ? params : null,
      data: method === 'post' ? params : null,
      withCredentials: true,
      validateStatus: (status) => {
        return status >= 200 && status < 300;
      },
    };
    try {
      let res = axios.request(option)
      const data = res.data
      return new Promise((resolve, reject) => {
        if (data.errorCode === 0) {
          resolve(data.data)
        } else if (data.errorCode === -1001) {
          //登录失效
        } else {
          reject(data.errorMsg)
        }
      })
    } catch (error) {
      toast('net or server error~')
    }
  }
}


