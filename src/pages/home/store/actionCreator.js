import Request from "@api/request";
import { fromJS } from "immutable";
import { constants } from "./index";

export function getBanner(banner) {
  return async dispatch => {
    const banner = await Request.getBanner();
    dispatch(setBanner(banner))
  };
}
export function setBanner(banner) {
  return {
    type: constants.GET_BANNER,
    banner: fromJS(banner),
  };
}