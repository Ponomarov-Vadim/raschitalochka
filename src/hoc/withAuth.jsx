import React from "react";
import { connect } from "react-redux";

import * as operations from "../redux/reducers/session/sessionOperations";
import {
  getIsAuthorized,
  getUser,
} from "../redux/reducers/session/sessionSelectors";

const withAuth = (Component) => {
  const WithAuth = (props) => <Component {...props} />;

  const mapStateToProps = (state) => ({
    isAuthorized: getIsAuthorized(state),
    user: getUser(state),
  });

  const mapDispatchToProps = {
    login: operations.login,
    logout: operations.logout,
    userSession: operations.userSession
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )((props) => <WithAuth {...props} />);
};

export default withAuth;
