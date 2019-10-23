/*
 * @Description: sagas集合
 * @Date: 2019-10-11 09:42:35
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-14 18:05:03
 */
import { all } from 'redux-saga/effects'
import { homeSaga } from '@pages/home/store'
import { navigationSaga } from '@pages/navigation/store'
import { projectsSaga } from '@pages/projects/store'
import { systemSaga } from '@pages/system/store'
import { mainSaga } from '@pages/main/store'
import { accountsSaga } from '@pages/accounts/store'
import { bottomBarSaga } from '@common/bottomBar/store'
import { headerSaga } from '@common/header/store'
export default function* rootSaga() {
  yield all([
    ...mainSaga,
    ...homeSaga,
    ...systemSaga,
    ...accountsSaga,
    ...navigationSaga,
    ...projectsSaga,
    ...bottomBarSaga,
    ...headerSaga
  ])
}