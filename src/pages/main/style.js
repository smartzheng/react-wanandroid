/*
 * @Date: 2019-10-14 12:21:11
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 17:14:28
 */
import styled from 'styled-components';

export const MainWrapper = styled('main')`
  padding:.2rem;
  background-color:#eee;
  flex:1;
`

export const PageWrapper = styled('div')`
  visibility:${props => props.isSelected ? 'visible' : 'hidden'}
`