/*
 * @Description: 
 * @Date: 2019-10-14 13:24:26
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-14 16:51:35
 */
import { constants } from './index'
import { fromJS } from "immutable";
const defaultState = fromJS({
  title:'玩安卓'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.HEADER_SET_TITLE: {
      return state.merge({
        title: action.payload.title
      });
    }
    default: {
      return state;
    }
  }
}