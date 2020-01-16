/*
 * @Description: 导航
 * @Date: 2019-09-30 17:01:09
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-14 13:45:39
 */

import { connect } from 'react-redux';
import React from 'react';
import { PageWrapper } from '../style'
//import { actions } from './store';
function Navigation(props) {

  return (
    <PageWrapper>
      导航
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
)(Navigation);