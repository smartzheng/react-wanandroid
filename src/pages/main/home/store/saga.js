/*
 * @Date: 2019-10-11 09:44:33
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-24 16:18:45
 */
import { call, takeEvery, put } from 'redux-saga/effects';
import Request from '@api/request';
import { constants, actions } from './index';
function* fetchBanners() {
  try {
    const banners = yield call(Request.getBanners);
    yield put(actions.setBanners(banners));
  } catch (e) {
    console.log(e)
  }
}

function* getBanners() {
  yield takeEvery(constants.GET_BANNERS, fetchBanners);
}

function* fetchArticles(action) {
  try {
    const data = yield call(Request.getHomeArticles, action.payload.page);
    yield put(actions.setArticles(data.datas));
  } catch (e) {
    console.log(e)
  }
}

function* getArticles() {
  yield takeEvery(constants.GET_ARTICLES, fetchArticles);
}

const homeSaga = [
  getBanners(),
  getArticles(),
]
export default homeSaga;