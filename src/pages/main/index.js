/*
 * @Description: 主页容器
 * @Date: 2019-09-30 17:01:09
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-24 14:23:29
 */
import React, { useCallback,useState } from 'react';
import BottomBar from '@common/bottomBar';
import Home from '@pages/main/home';
import System from '@pages/main/system';
import Accounts from '@pages/main/accounts';
import Navigation from '@pages/main/navigation';
import Projects from '@pages/main/projects';
//import { actions } from './store';
import { MainWrapper } from './style'
function Main() {

  const [selectedTab, setSeletedTab] = useState(0)

  const getCurrentPage = useCallback(() => {
    switch (selectedTab) {
      case 0:
        return <Home />
      case 1:
        return <System />
      case 2:
        return <Navigation />
      case 3:
        return <Accounts />
      case 4:
        return <Projects />
      default:
        return <Home />
    }
  }, [selectedTab])

  const handleChange = (index)=>{
    setSeletedTab(index)
  }

  return (
    <MainWrapper>
      {getCurrentPage()}
      <BottomBar onChange={handleChange}/>
    </MainWrapper >
  )
};
export default Main;