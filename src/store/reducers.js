/*
 * @Date: 2019-10-08 10:12:18
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-14 18:28:40
 */
import { combineReducers } from 'redux-immutable';
import { mainReducer } from "@pages/main/store";
import { homeReducer } from "@pages/home/store";
import { systemReducer } from "@pages/system/store";
import { accountsReducer } from "@pages/accounts/store";
import { navigationReducer } from "@pages/navigation/store";
import { projectsReducer } from "@pages/projects/store";
import { bottomBarReducer } from "@common/bottomBar/store";
import { headerReducer } from "@common/header/store";

const reducers = combineReducers({
  main: mainReducer,
  home: homeReducer,
  system: systemReducer,
  accounts: accountsReducer,
  navigation: navigationReducer,
  projects: projectsReducer,
  bottomBar: bottomBarReducer,
  header: headerReducer,
});
export default reducers;