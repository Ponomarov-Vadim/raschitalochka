import { combineReducers } from "redux";
import * as actionTypes from "./financeActionTypes";

const totalBalance = (state = 0, { type, payload }) => {
  switch (type) {
    case actionTypes.FINANCE_SUCCESS:
      return payload.totalBalance;

    case actionTypes.FINANCE_ERROR:
      return state;

    default:
      return state;
  }
};

const typeTotalBalance = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.FINANCE_SUCCESS:
      return payload.typeTotalBalance;

    case actionTypes.FINANCE_ERROR:
      return state;

    default:
      return state;
  }
};

const financeData = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FINANCE_SUCCESS:
      return [...payload.data];

    case actionTypes.FINANCE_ERROR:
      return state;

    default:
      return state;
  }
};

export default combineReducers({ totalBalance, typeTotalBalance, financeData });
