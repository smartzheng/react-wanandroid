/*
 * @Description: 如果是Android则新开一个WebActivity
 * @Date: 2019-10-25 11:44:13
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-25 11:45:50
 */
export function toWeb(url) {
  if (window.jsi) {
    window.jsi.toWeb(url)
  } else {
    window.location.href = url
  }
}