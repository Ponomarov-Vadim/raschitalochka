import React from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./TotalBalance.module.css";

const TotalBalance = ({ totalBalance }) => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-device-width: 768px) and (max-device-width: 1223px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
  });

  return (
    <div className={styles.wrapBlance}>
      {isDesktop && (
        <>
          <p className={styles.textBalabce}>Total Balance, UAH</p>
          <p className={styles.balance}>{totalBalance}</p>
        </>
      )}
      {isTablet && (
        <>
          <p className={styles.textBalabce}>Total Balance: </p>
          &nbsp;
          <p className={styles.balance}>{totalBalance} UAH</p>
        </>
      )}
      {isMobile && (
        <>
          <p className={styles.textBalabce}>Total Balance, UAH</p>
          <p className={styles.balance}>{totalBalance}</p>
        </>
      )}
    </div>
  );
};

export default TotalBalance;
