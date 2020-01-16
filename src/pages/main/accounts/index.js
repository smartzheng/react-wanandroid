/*
 * @Description: 导航
 * @Date: 2019-09-30 17:01:09
 * @Author: smartzheng
 * @Blog: https://smartzheng.github.io
 * @GitHub: https://github.com/smartzheng
 * @LastEditTime: 2019-10-23 16:15:39
 */
import { PageWrapper } from '../style'
import { connect } from 'react-redux';
import React from 'react';
//import { actions } from './store';
function Accounts(props) {
  return (
    <PageWrapper>
      公众号
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
)(Accounts);