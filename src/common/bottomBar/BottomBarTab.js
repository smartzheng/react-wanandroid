/*
 * @Description: 
 * @Date: 2019-10-14 18:23:19
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 16:18:46
 */
import React from 'react'
import * as actions from './store/actions'
import { BottomBarTabWrapper } from './style'
import { connect } from 'react-redux'
function BottomBarTab(props) {
  const { tab, changeTab, position } = props
  return (
    <BottomBarTabWrapper
      onClick={e => changeTab(position)}
      selectedIcon={tab.get('selectedIcon')}
      unSelectedIcon={tab.get('unSelectedIcon')}
      isSelected={tab.get('isSelected')}>
      <div className='bottom-bar-tab-icon' />
      <div>{tab.get('title')}</div>
    </BottomBarTabWrapper>
  )
}

function mapState(state) {
  return {}
}
function mapDispatch(dispatch) {
  return {
    changeTab(index) {
      dispatch(actions.setSelectedTab(index))
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(BottomBarTab)