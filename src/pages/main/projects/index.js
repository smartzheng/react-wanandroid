/*
 * @Description: 导航
 * @Date: 2019-09-30 17:01:09
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 16:48:00
 */

import { connect } from 'react-redux';
import React from 'react';
import { PageWrapper } from '../style'
//import { actions } from './store';
function Projects(props) {

  return (
    <PageWrapper>
      项目
    </PageWrapper>
  )
};

function mapState(state) {
  return {};
};
function mapDispatch(dispatch) {
  return {};
};
export default connect(
  mapState,
  mapDispatch
)(Projects);