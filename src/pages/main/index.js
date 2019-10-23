/*
 * @Description: 主页容器
 * @Date: 2019-09-30 17:01:09
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 17:38:06
 */
import { connect } from 'react-redux';
import React, { useCallback } from 'react';
import BottomBar from '@common/bottomBar';
import Home from '@pages/main/home';
import System from '@pages/main/system';
import Accounts from '@pages/main/accounts';
import Navigation from '@pages/main/navigation';
import Projects from '@pages/main/projects';
//import { actions } from './store';
import { MainWrapper } from './style'
function Main(props) {

  const { selectedTab } = props

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
        return null
    }
  }, [selectedTab])

  return (
    <MainWrapper>
      {getCurrentPage()}
      <BottomBar />
    </MainWrapper >
  )
};

function mapState(state) {
  return { selectedTab: state.getIn(['bottomBar', 'selectedTab']) };
};
function mapDispatch(dispatch) {
  return {};
};
export default connect(
  mapState,
  mapDispatch
)(Main);