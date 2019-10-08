import { connect } from 'react-redux';
import React from 'react';
import BottomNavigator from './components/bottomNavigator'
import Header from '@common/header'
function Home() {
  return (
    <div className='home'>
      <Header />
      <main className='home-pages'>
        首页
      </main>
      <BottomNavigator />
    </div>
  )
};

const mapState = (state) => {
  return {
  };
};
const mapDispatch = (dispatch) => {
  return {

  }
};
export default connect(mapState, mapDispatch)(Home);