import { combineReducers } from "redux";

import * as actionTypes from "./sessionActionTypes";

const user = (state = { error: "" }, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_AUTHORIZED:
    case actionTypes.LOGIN_SUCCESS:
      return payload.user;

    case actionTypes.LOGIN_ERROR:
      return { ...payload };

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_AUTHORIZED:
    case actionTypes.LOGIN_SUCCESS:
      return payload.token;

    case actionTypes.LOGIN_ERROR:
    case actionTypes.LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};

const isAuthorized = (state = false, { type }) => {
  switch (type) {
    case actionTypes.USER_AUTHORIZED:
    case actionTypes.LOGIN_SUCCESS:
      return true;

    case actionTypes.LOGIN_ERROR:
    case actionTypes.LOGOUT_SUCCESS:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  isAuthorized
});
