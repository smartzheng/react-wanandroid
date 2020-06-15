/*
 * @Description: 底部导航栏
 * @Date: 2019-10-08 09:33:54
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 18:17:41
 */
import React, { useState } from 'react'
import { BottomBarWrapper } from './style'
import BottomBarTab from './BottomBarTab'
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

const tabs = [
  {
    title: '首页', selectedIcon: homeSelectedIcon, unSelectedIcon: homeUnselectedIcon
  },
  {
    title: '知识体系', selectedIcon: systemselectedIcon, unSelectedIcon: systemUnselectedIcon
  },
  {
    title: '导航', selectedIcon: navigationselectedIcon, unSelectedIcon: navigationUnselectedIcon
  },
  {
    title: '公众号', selectedIcon: accountsselectedIcon, unSelectedIcon: accountsUnselectedIcon
  },
  {
    title: '项目', selectedIcon: projectsselectedIcon, unSelectedIcon: projectsUnselectedIcon
  },
]
// 底部bar
function BottomBar (props) {
  const { onChange } = props
  const [selectedTab, setSeletedTab] = useState(0)
  const changeTab = (index) => {
    console.log('changeTab')
    setSeletedTab(index)
    onChange(index)
  }
  return (
    <BottomBarWrapper>
      {tabs.map((item, index) => {
        return <div onClick={e => changeTab(index)}>
          <BottomBarTab
            key={index}
            selected={index === selectedTab}
            tab={item}/>
        </div>
      })}
    </BottomBarWrapper>
  )
}

export default BottomBar


