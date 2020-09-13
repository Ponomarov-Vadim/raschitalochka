import React from "react";
import { useMediaQuery } from "react-responsive";

import Navigation from "../Navigation/Navigation";
import Currency from "../Currency/Currency";
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const isDesktop = useMediaQuery({ minDeviceWidth: 1024 });
  return (
    <div className={styles.wrap}>
      <Navigation />
      {isDesktop ? <Currency /> : null}
    </div>
  );
};

export default Sidebar;
