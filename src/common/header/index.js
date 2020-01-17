/*
 * @Description: header
 * @Date: 2019-10-08 15:04:45
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-14 16:31:57
 */
import { HeaderWrapper } from './style'
import React from 'react'
function Header(props) {
  const {title} = props
  return (
    <HeaderWrapper>
      <div className='header-content'>{title}</div>
    </HeaderWrapper>
  )
}

export default Header;