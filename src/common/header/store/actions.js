/*
 * @Date: 2019-10-14 13:24:26
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-14 13:44:30
 */
import { fromJS } from "immutable";
import { constants } from "./index";

export function setTitle(title) {
  return {
      type: constants.HEADER_SET_TITLE,
      payload: { title: fromJS(title) },
  };
}