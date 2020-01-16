/*
 * @Date: 2019-10-08 18:23:56
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-25 10:08:17
 */
import styled from 'styled-components';

export const BannerItem = styled('div')`
  background: url(${props => props.imagePath});
  height: 4rem;
  background-size:cover;
  position: relative;
  
  .banner-title{
    position: absolute;
    bottom:0;
    height: .5rem;
    background: #33333333;
    line-height:.5rem;
    padding-left:.2rem;
    color:white;
    left: 0;
    right: 0;
  }
`;
