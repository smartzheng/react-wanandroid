/*
 * @Description: 主页容器
 * @Date: 2019-10-14 12:21:11
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 15:17:59
 */
import { constants } from './index'
import { fromJS } from "immutable";
const defaultState = fromJS({
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ACTION_NAME: {

      return state;
    }
    default: {
      return state;
    }
  }
}