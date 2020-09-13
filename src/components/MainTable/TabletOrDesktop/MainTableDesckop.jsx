import React from "react";

import { toISODate, formatNumbers } from "../../../helpers/format";
import {
  wrap,
  table,
  tableRow,
  tableHead,
  boxButtons,
  notifyMessage,
} from "./MainTableDesckop.module.css";

const MainTableDesckop = ({ financeData, children }) => {
  return (
    <section className={wrap}>
      <div className={boxButtons}>{children}</div>
      <table className={table}>
        <thead className={tableHead}>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comments</th>
            <th>Amount, UAH</th>
            <th>Balance After</th>
          </tr>
        </thead>
        <tbody>
          {financeData.map(
            ({ _id, date, type, category, comments, amount, balanceAfter }) => (
              <tr key={_id} className={tableRow}>
                <td>{toISODate(date)}</td>
                <td>{type}</td>
                <td>{category}</td>
                <td>{comments}</td>
                <td style={{ color: type === "+" ? "#75c16e" : "#ff6c00" }}>
                  {formatNumbers(amount)}
                </td>
                <td>{formatNumbers(balanceAfter)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {!financeData.length && (
        <h2 className={notifyMessage}>You have no transactions</h2>
      )}
    </section>
  );
};

export default MainTableDesckop;
