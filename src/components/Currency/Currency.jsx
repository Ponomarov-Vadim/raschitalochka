import React, { useEffect, useState } from "react";
import { currencyStyle, currencyHead } from "./Currency.module.css";
import CurrencyItem from "./CurrencyItem/CurrencyItem";
import { fetchCurrency } from "../../services/api";

const Currency = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    fetchCurrency().then(({ data }) => {
      const filteredData = data.filter((elem) => elem.ccy !== "BTC");
      setCurrency(filteredData);
    });
  }, []);

  return (
    <div className={currencyStyle}>
      <div className={currencyHead}>
        <p>Currency</p>
        <p>Sale</p>
        <p>Purchase</p>
      </div>

      {currency.map((elem) => {
        return (
          <CurrencyItem
            currency={elem.ccy}
            sale={+elem.sale}
            purchase={+elem.buy}
            key={Date.now() * Math.random()}
          />
        );
      })}
    </div>
  );
};

export default Currency;
