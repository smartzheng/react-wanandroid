/*
 * @Description: 
 * @Date: 2019-09-30 16:25:53
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-24 15:43:58
 */
/*
 * @Description: 
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
 * @Date: 2019-09-30 16:25:53
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-24 15:42:51
 */
import * as Urls from './config'
import axios from 'axios';
import toast from '../utils/toast'

export default class Server {

  get(url, params) {
    return Server.call('get', url, params)
  }

  post(url, params) {
    return Server.call('post', url, params)
  }

  static call(method, url, params) {
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
        return status >= 200 && status < 300
      }
    }
    return new Promise((resolve, reject) => {
      axios.request(option).then(res => {
        const rootData = res.data
        if (rootData.errorCode === 0) {
          resolve(rootData.data)
        } else if (rootData.errorCode === -1001) {
          //登录失效
          toast('请登录')
        } else {
          //弹出错误信息
          toast(rootData.errorMsg)
        }
      }).catch(err => {
        toast('请求错误')
      })
    })
  }
}


