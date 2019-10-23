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

function* banner() {
  yield takeEvery(constants.GET_BANNER, fetchBanners);
}

const homeSaga = [
  banner()
]
export default homeSaga;