// import axios from "axios";

import { financeRequest, financeSuccess, financeError } from "./financeAction";
import { getToken, getUser } from "../session/sessionSelectors";
import { getFinanceTableById } from "../../../services/api";

export const fetchFinance = () => (dispatch, getState) => {
  dispatch(financeRequest());
  getFinanceTableById(getUser(getState()).id, getToken(getState()))
    .then(({ data: { finance } }) => {
      dispatch(financeSuccess(finance));
    })
    .catch((err) => {
      dispatch(financeError(err));
    });
};
