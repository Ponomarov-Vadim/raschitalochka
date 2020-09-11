import axios from "axios";

import { save } from "../../../services/localStorage";

import { getToken } from "./sessionSelectors";
import {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  userAuthorized,
} from "./sessionActions";
import { setAuthHeader, setBaseURL } from "../../../services/api";

export const login = (data, history) => (dispatch) => {
  dispatch(loginRequest());
  setBaseURL();
  axios
    .post("/api/login", data)
    .then(({ data }) => {
      save("session", {
        token: data.token,
        user: { id: data.user.id, userName: data.user.name },
      });
      setAuthHeader(data.token);
      dispatch(loginSuccess(data));
      history.push("/home");
    })
    .catch((error) => {
      dispatch(loginError(error));
      alert("User is not defined"); //мб пинотифи какой нибудь?
    });
};

export const logout = (storeToken = null) => (dispatch, getState) => {
  dispatch(logoutRequest());
  const token = storeToken ? storeToken : getToken(getState());
  setBaseURL();
  setAuthHeader(token);

  axios
    .get("/api/logout")
    .then(() => {
      save("session", null);
      dispatch(logoutSuccess());
    })
    .catch((error) => dispatch(logoutError(error)));
};

export const userSession = (data) => (dispatch) => {
  dispatch(userAuthorized(data));
};
