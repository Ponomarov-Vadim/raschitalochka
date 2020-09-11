import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import TotalBalance from "../TotalBalance/TotaleBalanceContainer";

// material-icon
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from "@material-ui/icons/Timeline";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

// css
import styles from "./Navigation.module.css";

const Navigation = () => {
  const isTabletOrDesktop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
  });

  return (
    <div>
      <div className={styles.navigation}>
        <div className={styles.wrap}>
          <NavLink
            exact
            to="/home"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            <HomeIcon style={{ fontSize: 16 }} />
            <p className={styles.text}>Home</p>
          </NavLink>

          <div className={styles.stick}></div>

          <NavLink
            to="/home/diagram"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            <TimelineIcon style={{ fontSize: 18 }} />
            <p className={styles.text}>Diagram</p>
          </NavLink>

          <div className={styles.stick}></div>
        </div>

        {isTabletOrDesktop && <TotalBalance />}

        {isMobile && (
          <NavLink
            to="/home/currency"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            <AttachMoneyIcon style={{ fontSize: 24 }} />
          </NavLink>
        )}
      </div>

      {isMobile && <TotalBalance />}
    </div>
  );
};

export default Navigation;
