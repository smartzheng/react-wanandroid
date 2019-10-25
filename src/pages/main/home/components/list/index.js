/*
 * @Date: 2019-10-23 18:24:11
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-25 11:47:50
 */
import React from 'react'
import { ListWrapper, ListItem } from './style'
//import likeIcon from '@assets/images/like.png'
import dislikeIcon from '@assets/images/dislike.png'
import { toWeb } from '@utils/navigate'

function HomeList(props) {
  const { articles } = props

  function onItemClick(article) {
    toWeb(article.get('link'))
  }

  return (
    <ListWrapper>
      {
        articles.map((item, index) => {
          return <ListItem
            onClick={() => onItemClick(item)}
            key={item.get('id')}>
            <div className='flex-align-center'>
              <div className='item-author flex-1'>
                {
                  item.get('author')
                    ?
                    `作者: ${item.get('author')}`
                    :
                    `分享人: ${item.get('shareUser')}`
                }
              </div>
              {
                item.get('tags').map((item, index) => {
                  return <div
                    key={item.get('url')}
                    className='item-tag'>
                    {item.get('name')}
                  </div>
                })
              }
              {
                item.get('fresh')
                  ?
                  <div className='item-tag'>
                    新
                  </div>
                  :
                  null
              }
            </div>
            <div className='item-title'>{item.get('title')}</div>
            <div className='item-footer'>
              <div className='item-footer-item'>
                分类: {item.get('superChapterName')}/{item.get('chapterName')}
              </div>
              <div className='item-footer-item'>
                时间: {item.get('niceDate')}
              </div>
              <img
                className='item-footer-like'
                alt='like'
                src={dislikeIcon} />
            </div>
          </ListItem>
        })
      }
    </ListWrapper>
  )
}

export default HomeList
