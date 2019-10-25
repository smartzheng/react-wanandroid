/*
 * @Description: 主页
 * @Date: 2019-09-30 17:01:09
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-25 11:46:46
 */

import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { actions } from './store'
import SwipeableViews from 'react-swipeable-views'
import { BannerItem } from './style'
import HomeList from './components/list'
import { toWeb } from '@utils/navigate'
function Home(props) {
  const {
    banners,
    getBanners,
    currentPage,
    articles,
    getArticles
  } = props

  useEffect(() => {
    getBanners()
  }, [getBanners])

  useEffect(() => {
    getArticles(currentPage)
  }, [getArticles, currentPage])

  function onBannerClick(banner) {
    toWeb(banner.get('url'))
  }

  return (
    <>
      <SwipeableViews>
        {
          banners.sort((pre, next) => {
            return pre.order - next.order
          }).map(banner => {
            return <BannerItem
              onClick={() => onBannerClick(banner)}
              key={banner.get('id')}
              imagePath={banner.get('imagePath')} >
              <div className='banner-title'>
                {banner.get('title')}
              </div>
            </BannerItem>
          })}
      </SwipeableViews>
      <HomeList articles={articles} />
    </>
  )
}

function mapState(state) {
  return {
    banners: state.getIn(['home', 'banners']),
    currentPage: state.getIn(['home', 'currentPage']),
    articles: state.getIn(['home', 'articles']),
  }
}
function mapDispatch(dispatch) {
  return {
    getBanners: () => dispatch(actions.getBanners()),
    getArticles: (currentPage) => {
      dispatch(actions.getArticles(currentPage))
    },
  }
}
export default connect(
  mapState,
  mapDispatch
)(Home)