/*
 * @Description: 底部导航栏
 * @Date: 2019-10-08 09:33:54
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 18:17:41
 */
import React from 'react'
import { connect } from 'react-redux'
import { BottomBarWrapper } from './style'
import BottomBarTab from './BottomBarTab'
function BottomBar(props) {
  const { tabs } = props
  return (
    <BottomBarWrapper>
      {tabs.map((item, index) => {
        return <BottomBarTab
          key={index}
          position={index}
          tab={item} />
      })}
    </BottomBarWrapper>
  )
}

function mapState(state) {
  return {
    tabs: state.getIn(['bottomBar', 'tabs'])
  }
}


export default connect(
  mapState,
  null
)(BottomBar)


