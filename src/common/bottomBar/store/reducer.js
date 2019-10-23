/*
 * @Description: 
 * @Date: 2019-10-14 13:24:26
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 16:10:02
 */
import homeSelectedIcon from '@assets/images/icon_home_selected.png'
import homeUnselectedIcon from '@assets/images/icon_home_unselected.png'
import systemselectedIcon from '@assets/images/icon_system_selected.png'
import systemUnselectedIcon from '@assets/images/icon_system_unselected.png'
import navigationselectedIcon from '@assets/images/icon_navigation_selected.png'
import navigationUnselectedIcon from '@assets/images/icon_navigation_unselected.png'
import accountsselectedIcon from '@assets/images/icon_me_selected.png'
import accountsUnselectedIcon from '@assets/images/icon_me_unselected.png'
import projectsselectedIcon from '@assets/images/icon_project_selected.png'
import projectsUnselectedIcon from '@assets/images/icon_project_unselected.png'
import { constants } from './index'
import { fromJS } from "immutable"
const tabs = [
  {
    title: '首页', selectedIcon: homeSelectedIcon, unSelectedIcon: homeUnselectedIcon, isSelected: true
  },
  {
    title: '知识体系', selectedIcon: systemselectedIcon, unSelectedIcon: systemUnselectedIcon, isSelected: false
  },
  {
    title: '导航', selectedIcon: navigationselectedIcon, unSelectedIcon: navigationUnselectedIcon, isSelected: false
  },
  {
    title: '公众号', selectedIcon: accountsselectedIcon, unSelectedIcon: accountsUnselectedIcon, isSelected: false
  },
  {
    title: '项目', selectedIcon: projectsselectedIcon, unSelectedIcon: projectsUnselectedIcon, isSelected: false
  },
]
const defaultState = fromJS({
  selectedTab: 0,
  tabs: tabs
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_SELECTED_TAB: {
      tabs.forEach((item, index) => {
        item.isSelected = index === action.position
      })
      return state.merge({
        'tabs': fromJS(tabs),
        'selectedTab': action.position
      })
    }
    default: {
      return state
    }
  }
}