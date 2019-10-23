/*
 * @Description: 知识体系
 * @Date: 2019-09-30 17:01:09
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-14 14:28:06
 */

import { connect } from 'react-redux';
import React from 'react';
// import { actions } from './store';
import { SystemWrapper } from './style'
function System(props) {

  return (
    <SystemWrapper>
      知识体系
    </SystemWrapper>
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
)(System);