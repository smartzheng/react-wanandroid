import { constants } from './index'
import { fromJS } from "immutable";
const defaultState = fromJS({
  banners: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_BANNER: {
      return {
        banners: action.data,
      }
    }
    default: {
      return state;
    }
  }
}