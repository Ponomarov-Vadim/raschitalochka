import * as actionTypes from "./financeActionTypes";

export const financeRequest = () => ({
  type: actionTypes.FINANCE_REQUEST,
});

export const financeSuccess = (data) => ({
  type: actionTypes.FINANCE_SUCCESS,
  payload: data,
});

export const financeError = (error) => ({
  type: actionTypes.FINANCE_ERROR,
  payload: {
    error,
  },
});
