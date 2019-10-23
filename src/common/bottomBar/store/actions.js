/*
 * @Date: 2019-10-14 13:24:26
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 16:07:46
 */
//import { fromJS } from "immutable";
import { constants } from "./index";

export function setSelectedTab(position) {
  return {
    type: constants.SET_SELECTED_TAB,
    position,
  };
}