/*
 * @Date: 2019-10-14 14:00:22
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-14 17:02:28
 */
import styled from 'styled-components';
import headerBg from '@assets/images/blue_gradient_bg.png';
import { commonStyle } from '@common/styled';
export const HeaderWrapper = styled('header')`
  .header-content{
    background: url(${headerBg});
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:${commonStyle.headerHeight};
    z-index:99;
  }
  .header-placeholder{
    height:${commonStyle.headerHeight};
  }
`;
