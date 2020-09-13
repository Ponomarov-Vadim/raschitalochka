import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import * as functions from "./functions";

import Graph from "../Graph/Graph";
import FilterTable from "../FilterTable/FilterTable";
import styles from "./Filter.module.css";

const Filter = ({ financeData }) => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-device-width: 767px) and (max-device-width: 1023px)",
  });

  const [month, setMonth] = useState(functions.months[new Date().getMonth()]);
  const [year, setYear] = useState(new Date().getFullYear());

  const [filteredData, setFilteredData] = useState([]);
  const [allCategories, setAllCategories] = useState({});

  useEffect(
    (props) => {
      setFilteredData(
        functions.getFilteredDataByYearAndMonth(financeData, year, month)
      );
    },
    [month, year]
  );

  useEffect(
    (props) => {
      setAllCategories(
        functions.getAllCategoryAmount(functions.getType(filteredData, "-"))
      );
    },
    [filteredData]
  );

  const handleChangeYear = ({ target: { value } }) => {
    setYear(value);
  };

  const handleChangeMonth = ({ target: { value } }) => {
    setMonth(value);
  };

  const totalCostIncome = (type) => {
    return functions.getAllTypeAmount(functions.getType(filteredData, type));
  };

  return (
    <div className={styles.container}>
      {isDesktop && <div className={styles.titleContainer}><p className={styles.title}>Cost Diagram</p></div>}
      {filteredData.length > 0 ? (
        <div className={styles.wrap}>
          <div className={styles.chartWrap}>
            {isTablet && <div className={styles.titleContainer}><p className={styles.title}>Cost Diagram</p></div>}
            <Graph filteredData={allCategories} />
          </div>
          <div className={styles.tableContaiter}>
            <div className={styles.selectors}>
              <select
                className={styles.select}
                value={month}
                onChange={handleChangeMonth}
                name="selectedMonth"
              >
                {functions.getMonths(financeData).map((month) => (
                  <option key={month} className={styles.option} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className={styles.select}
                value={year}
                onChange={handleChangeYear}
                name="selectedYear"
              >
                {functions.getYears(financeData).map((year) => (
                  <option key={year} className={styles.option} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <FilterTable
              filteredData={allCategories}
              totalCost={totalCostIncome("-")}
              totalIncome={totalCostIncome("+")}
            />
          </div>
        </div>
      ) : (
        <p className={styles.addCosts}>
          To build a schedule, please add the costs
        </p>
      )}
    </div>
  );
};

export default Filter;
