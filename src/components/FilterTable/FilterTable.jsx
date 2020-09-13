import React from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import { formatNumbers } from "../../helpers/format";

import style from "./FilterTable.module.css";

const FilterTable = ({ filteredData, totalCost, totalIncome }) => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
  });
  return (
    <div className={style.tableWrap}>
      <ul className={style.table}>
        {(isDesktop || isMobile) && (
          <li className={style.rowHeader}>
            <p className={style.tableHeader}>Categories</p>
            <p className={style.tableHeader}>Amount</p>
          </li>
        )}
        {filteredData.map((item) => (
          <li className={style.row} key={item.category}>
            <div className={style.categoryWrap}>
              <div
                className={style.square}
                style={{ backgroundColor: item.color }}
              />
              <p className={style.cellCategory}>{item.category}</p>
            </div>
            <p className={style.cell}>{formatNumbers(item.categoryAmount)}</p>
          </li>
        ))}
      </ul>
      <ul className={style.total}>
        <li className={style.totalRow}>
          <p className={style.totalCosts}>Total Costs:</p>
          <p className={style.totalCostsAmaunt}>{formatNumbers(totalCost)}</p>
        </li>
        <li className={style.totalRow}>
          <p className={style.totalIncome}>Total Income:</p>
          <p className={style.totalIncomeAmaunt}>{formatNumbers(totalIncome)}</p>
        </li>
      </ul>
    </div>
  );
};

FilterTable.defaultProps = {
  filteredData: [],
  totalCost: 0,
  totalIncome: 0,
};

FilterTable.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object),
  totalCosts: PropTypes.number,
  totalIncome: PropTypes.number,
};

export default FilterTable;
