/*
 * @Date: 2019-10-08 09:25:45
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-24 16:19:06
 */
import { constants } from './index'
import { fromJS } from "immutable";
const defaultState = fromJS({
  banners: [],
  currentPage: 0,
  articles: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_BANNERS: {
      return state.merge({
        banners: action.payload.banners,
      })
    }
    case constants.SET_ARTICLES: {
      return state.merge({
        articles: action.payload.articles
      })
    }
    default: {
      return state
    }
  }
}