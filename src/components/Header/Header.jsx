import React from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

import withAuth from "../../hoc/withAuth";

import { load } from "../../services/localStorage";
import logoIcon from "../../images/logo.png";
import exit from "../../images/exit.png";
import {
  header,
  headerLeftWrapper,
  headerRightWrapper,
  logo,
  logoutStyle,
  userName,
  wrapper,
} from "./Header.module.css";

const Header = ({ logout, history, user }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleClickLogout = () => {
    logout(load("token"));
    history.push("/login");
  };

  return (
    <div className={wrapper}>
      <div className={header}>
        <NavLink to="/home" className={headerLeftWrapper}>
          <img src={logoIcon} alt="logo" className={logo} />
          {isMobile ? null : <p>Raschitalochka</p>}
        </NavLink>

        <div className={headerRightWrapper}>
          <p className={userName}>{user.userName}</p>
          <div onClick={handleClickLogout} className={logoutStyle}>
            <img src={exit} alt="logo" />
            {isMobile ? null : <p>Logout</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Header);
