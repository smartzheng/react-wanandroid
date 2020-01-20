/*
 * @Date: 2019-10-23 18:24:18
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-25 09:45:20
 */
import styled from 'styled-components';

export const ListWrapper = styled('div')`
  width: 100%;  
`
export const ListItem = styled('div')`
  width: 100%;
  color:#333333;
  border-bottom: .01rem solid #eee;
  padding: .3rem .2rem;
  .item-author{
    font-size:.24rem;
  }
  .item-title{
    margin-top: .2rem;
    font-weight: bold;
    line-height: .35rem;
    color: #2e3135;
  }
   .item-tag{
      text-align:center;
      border: .01rem solid green;
      border-radius: .02rem;
      padding: .04rem;
      font-size:.20rem;
      color: green;
      margin-left:.05rem;
    }
  .item-footer{
    margin-top: .2rem;
    font-size:.24rem;
    color: #999999;
    display: flex;
    align-items:flex-end;
    .item-footer-item{
      margin-right: .5rem;
      margin-bottom: .02rem;
    }
    .item-footer-like{
      justify-self:self-end;
      width:.3rem;
      height:.3rem;
    }
  };
`
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