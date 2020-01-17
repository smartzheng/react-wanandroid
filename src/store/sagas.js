/*
 * @Description: sagas集合
 * @Date: 2019-10-11 09:42:35
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-24 15:03:18
 */
import { all } from 'redux-saga/effects'
import { mainSaga } from '@pages/main/store'
import { homeSaga } from '@pages/main/home/store'
import { navigationSaga } from '@pages/main/navigation/store'
import { projectsSaga } from '@pages/main/projects/store'
import { systemSaga } from '@pages/main/system/store'
import { accountsSaga } from '@pages/main/accounts/store'
export default function* rootSaga() {
  yield all([
    ...mainSaga,
    ...homeSaga,
    ...systemSaga,
    ...accountsSaga,
    ...navigationSaga,
    ...projectsSaga,
  ])
}