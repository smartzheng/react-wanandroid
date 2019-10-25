/*
 * @Date: 2019-10-08 09:26:01
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-24 16:16:18
 */
import { fromJS } from "immutable";
import { constants } from "./index";

export function getBanners() {
  return {
    type: constants.GET_BANNERS
  }
}
export function setBanners(banners) {
  return {
    type: constants.SET_BANNERS,
    payload: { banners: fromJS(banners) },
  };
}
export function getArticles(page) {
  return {
    type: constants.GET_ARTICLES,
    payload: { page: page }
  }
}
export function setArticles(articles) {
  return {
    type: constants.SET_ARTICLES,
    payload: {
      articles: fromJS(articles)
    },
  };
}