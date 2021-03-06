/*
 * @Date: 2019-10-14 14:00:22
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-25 11:37:12
 */
import styled from 'styled-components';
import { commonStyle } from '@common/styled';
export const HeaderWrapper = styled('header')`
  .header-content{
    background:#59C9EF;
    position:fixed;
    display:flex;
    align-items:center;
    color:white;
    justify-content:center;
    font-weight:500;
    z-index:999;
    font-size:.3rem;
    top:0;
    left:0;
    right:0;
    height:${commonStyle.headerHeight};
  }
`;
