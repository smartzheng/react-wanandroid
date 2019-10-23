/*
 * @Date: 2019-10-08 18:23:56
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 16:59:12
 */
import styled from 'styled-components';

export const BannerItem = styled('div')`
    background: url(${props => props.imagePath});
    height: 4rem;
    background-size:cover;
`;
export const HomeList = styled('div')`
    height: 1000rem;
`;