/*
 * @Date: 2019-10-08 09:26:01
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-08 09:26:01
 */
import { fromJS } from "immutable";
import { constants } from "./index";

export function getBanners() {
  return {
    type: constants.GET_BANNER
  }
}
export function setBanners(banners) {
  return {
    type: constants.SET_BANNER,
    data: fromJS(banners),
  };
}