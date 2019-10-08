import Server from './server';
import * as Urls from './urls'

/**
 * 获取首页banner
 */
class Request extends Server {
  async getBanners() {
    return await this.get(Urls.banner);
  }
}

export default new Request()