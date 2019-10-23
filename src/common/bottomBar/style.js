/*
 * @Date: 2019-10-14 12:05:03
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 16:20:13
 */
import styled from 'styled-components';

export const BottomBarWrapper = styled('div')`
  height: 1rem;
  display:flex;
  justify-content:space-between;
  padding:0 .5rem;
  position:fixed;
  bottom:0;
  border-top-width:.1rem;
  border-color:#eee;
  left:0;
  right:0;
`
export const BottomBarTabWrapper = styled('div')`
  display:flex;
  flex-direction:column;
  font-size:.22rem;
  align-items:center;
  justify-content:center;
  color:${props => props.isSelected ? '#333333' : '#999999'}
  .bottom-bar-tab-icon{
    margin-bottom:.1rem;
    width:.42rem;
    height: .42rem;
    background-size:.42rem .42rem;
    background-image:url(${props => props.isSelected ? props.selectedIcon : props.unSelectedIcon})
  }
`