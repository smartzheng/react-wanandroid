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

function Main() {
  const [selectedTab, setSeletedTab] = useState(0)
  return (
    <MainWrapper>
      <TabBar
        unselectedTintColor="#999999"
        tintColor="#333333"
        barTintColor="white"
        tabBarPosition="bottom"
        prerenderingSiblingsNumber={0}
      >
        <TabBar.Item
          title={tabs[0].title}
          key={tabs[0].title}
          icon={<img  className='bottom-bar-tab-icon' src={tabs[0].unSelectedIcon} alt='' /> }
          selectedIcon={<img className='bottom-bar-tab-icon' src={tabs[0].selectedIcon} alt=''/>}
          selected={selectedTab === 0}
          onPress={() => {
            setSeletedTab(0)
          }}
        >
          {<Home/>}
        </TabBar.Item>
        <TabBar.Item
          icon={<img  className='bottom-bar-tab-icon' src={tabs[1].unSelectedIcon} alt='' /> }
          selectedIcon={<img  className='bottom-bar-tab-icon' src={tabs[1].selectedIcon} alt=''/>}
          title={tabs[1].title}
          key={tabs[1].title}
          selected={selectedTab === 1}
          onPress={() => {
            setSeletedTab(1)
          }}
        >
          {<System/>}
        </TabBar.Item>
        <TabBar.Item
          icon={<img  className='bottom-bar-tab-icon' src={tabs[2].unSelectedIcon} alt='' /> }
          selectedIcon={<img  className='bottom-bar-tab-icon' src={tabs[2].selectedIcon} alt=''/>}
          title={tabs[2].title}
          key={tabs[2].title}
          selected={selectedTab === 2}
          onPress={() => {
            setSeletedTab(2)
          }}
        >
          {<Navigation/>}
        </TabBar.Item>
        <TabBar.Item
          icon={<img  className='bottom-bar-tab-icon' src={tabs[3].unSelectedIcon} alt='' /> }
          selectedIcon={<img  className='bottom-bar-tab-icon' src={tabs[3].selectedIcon} alt=''/>}
          title={tabs[3].title}
          key={tabs[3].title}
          selected={selectedTab === 3}
          onPress={() => {
            setSeletedTab(3)
          }}
        >
          {<Accounts />}
        </TabBar.Item>
        <TabBar.Item
          icon={<img  className='bottom-bar-tab-icon' src={tabs[4].unSelectedIcon} alt='' /> }
          selectedIcon={<img  className='bottom-bar-tab-icon' src={tabs[4].selectedIcon} alt=''/>}
          title={tabs[4].title}
          key={tabs[4].title}
          selected={selectedTab === 4}
          onPress={() => {
            setSeletedTab(4)
          }}
        >
          {<Projects />}
        </TabBar.Item>
      </TabBar>
    </MainWrapper >
  )
};
export default Main;