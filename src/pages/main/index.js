/*
 * @Description: 主页容器
 * @Date: 2019-09-30 17:01:09
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-24 14:23:29
 */
import React, { useState } from 'react';
import Home from '@pages/main/home';
import System from '@pages/main/system';
import Accounts from '@pages/main/accounts';
import Navigation from '@pages/main/navigation';
import Projects from '@pages/main/projects';
import { MainWrapper } from './style'
import 'antd-mobile/dist/antd-mobile.css';
import { TabBar } from 'antd-mobile'
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
import Header from '../../common/header';
const tabs = [
  {
    title: '首页', selectedIcon: homeSelectedIcon, unSelectedIcon: homeUnselectedIcon,component:Home
  },
  {
    title: '知识体系', selectedIcon: systemselectedIcon, unSelectedIcon: systemUnselectedIcon,component:System
  },
  {
    title: '导航', selectedIcon: navigationselectedIcon, unSelectedIcon: navigationUnselectedIcon,component:Navigation
  },
  {
    title: '公众号', selectedIcon: accountsselectedIcon, unSelectedIcon: accountsUnselectedIcon,component:Accounts
  },
  {
    title: '项目', selectedIcon: projectsselectedIcon, unSelectedIcon: projectsUnselectedIcon,component:Projects
  },
]

function Main() {
  const [selectedTab, setSeletedTab] = useState(0)
  return (
    <div>
      <Header title={tabs[selectedTab].title}/>
    <MainWrapper>
      <TabBar
        unselectedTintColor="#999999"
        tintColor="#333333"
        barTintColor="white"
        tabBarPosition="bottom"
        prerenderingSiblingsNumber={0}>
          {tabs.map((tab,index)=>{
            return <TabBar.Item
              title={tab.title}
              key={tab.title}
              icon={<img  className='bottom-bar-tab-icon' src={tab.unSelectedIcon} alt='' /> }
              selectedIcon={<img className='bottom-bar-tab-icon' src={tab.selectedIcon} alt=''/>}
              selected={selectedTab === index}
              onPress={() => {setSeletedTab(index)}}>
              {<tab.component/>}
            </TabBar.Item>
          })}
      </TabBar>
    </MainWrapper >
    </div>
  )
}
export default Main;
