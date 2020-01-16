/*
 * @Description: 
 * @Date: 2019-10-14 18:23:19
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 16:18:46
 */
import React from 'react'
import { BottomBarTabWrapper } from './style'
function BottomBarTab(props) {
  const { tab, selected} = props
  return (
    <BottomBarTabWrapper
      selectedIcon={tab.selectedIcon}
      unSelectedIcon={tab.unSelectedIcon}
      isSelected={selected}>
      <div className='bottom-bar-tab-icon' />
      <div>{tab.title}</div>
    </BottomBarTabWrapper>
  )
}

export default BottomBarTab