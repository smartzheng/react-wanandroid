/*
 * @Description: 网络请求
 * @Date: 2019-09-30 16:24:54
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-24 15:53:08
 */
import Server from './server';

class Request extends Server {
  /**
  * 获取首页banner
  */
  async getBanners() {
    return await super.get('/banner/json');
  }
  /**
  * 获取首页list
  */
  async getHomeArticles(page) {
    return await super.get(`/article/list/${page}/json`);
  }
}

export default new Request()