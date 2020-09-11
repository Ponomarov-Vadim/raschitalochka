import * as actionTypes from "./sessionActionTypes";

export const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});

export const loginSuccess = (data) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: data,
});

export const loginError = (error) => ({
  type: actionTypes.LOGIN_ERROR,
  payload: {
    error,
  },
});

export const logoutRequest = () => ({
  type: actionTypes.LOGOUT_REQUEST,
});

export const logoutSuccess = (data) => ({
  type: actionTypes.LOGOUT_SUCCESS,
  payload: data,
});

export const logoutError = (error) => ({
  type: actionTypes.LOGOUT_ERROR,
  payload: {
    error,
  },
});

export const userAuthorized = (data) => ({
  type: actionTypes.USER_AUTHORIZED,
  payload: data,
});
