/*
 * @Description: 
 * @Date: 2019-10-14 13:24:26
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-14 13:44:05
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