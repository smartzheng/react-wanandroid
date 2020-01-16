/*
 * @Date: 2019-10-08 10:12:18
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-24 15:04:08
 */
import { combineReducers } from 'redux-immutable';
import { mainReducer } from "@pages/main/store";
import { homeReducer } from "@pages/main/home/store";
import { systemReducer } from "@pages/main/system/store";
import { accountsReducer } from "@pages/main/accounts/store";
import { navigationReducer } from "@pages/main/navigation/store";
import { projectsReducer } from "@pages/main/projects/store";
import { headerReducer } from "@common/header/store";

const reducers = combineReducers({
  main: mainReducer,
  home: homeReducer,
  system: systemReducer,
  accounts: accountsReducer,
  navigation: navigationReducer,
  projects: projectsReducer,
  header: headerReducer,
});
export default reducers;