/*
 * @Description: 主页
 * @Date: 2019-09-30 17:01:09
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 17:05:22
 */

import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { actions } from './store';
import SwipeableViews from 'react-swipeable-views';
import { BannerItem, HomeList } from './style'
import { Link } from 'react-router-dom'
function Home(props) {
  const {
    getBanners,
    banners
  } = props;

  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <>
      <SwipeableViews>
        {
          banners.sort((pre, next) => {
            return pre.order - next.order
          }).map(banner => {
            return <Link
              to={`/bannerDetail/${banner.get('id')}`}
              key={banner.get('id')}>
              <BannerItem
                imagePath={banner.get('imagePath')} >
              </BannerItem>
            </Link>
          })}
      </SwipeableViews>
      <HomeList></HomeList>
    </>
  )
};

function mapState(state) {
  return { banners: state.getIn(['home', 'banners']) };
};
function mapDispatch(dispatch) {
  return { getBanners: () => dispatch(actions.getBanners()) };
};
export default connect(
  mapState,
  mapDispatch
)(Home);