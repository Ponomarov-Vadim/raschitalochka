import React, { useState } from "react";
import {
  button,
  textarea,
  formContainer,
  categoriesList,
  categoriesItem,
  dateInput,
  inputContainer,
  commentsHeader,
  categoriesHeader,
  amountInputCost,
  amountInputIncome,
  blockHeader,
  radioCost,
  radioIncome,
} from "./FormCostIncome.module.css";
import axios from "axios";

const categoriesCost = [
  "Main Expenses",
  "Food",
  "Car",
  "Entertaiment",
  "Self Care",
  "Child Care",
  "Household Products",
  "Education",
  "Other Expenses",
];

const categoriesIncom = ["Regular Income", "Irregular Income"];

const FormCostIncome = ({ actionType, changeIsModalOpen }) => {
  const categories =
    actionType === "COST" ? [...categoriesCost] : [...categoriesIncom];

  const amountStyle =
    actionType === "COST" ? amountInputCost : amountInputIncome;

  const radioStyle = actionType === "COST" ? radioCost : radioIncome;

  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dateParse = Date.parse(date) / 1000;

    const options = {
      method: "post",
      data: {
        date: dateParse,
        type: "+",
        category: category,
        amount: amount,
        balanceAfter: 300000,
        comments: comments,
        typeBalanceAfter: "+",
      },
      url: `https://raschitalochka.goit.co.ua/api/finance/5f57c3529043240c96228515`,
    };

    axios(options).then((res) => {
      console.log(res);
    });

    // console.log(
    //   `amount: ${amount}; date: ${date}; category: ${category}; comments: ${comments};`
    // );
    if (changeIsModalOpen) changeIsModalOpen();
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "amount":
        setAmount(value);
        break;
      case "date":
        setDate(value);
        break;
      case "categories":
        setCategory(value);
        break;
      case "comments":
        setComments(value);
        break;
      default:
        break;
    }
  };
  return (
    <form className={formContainer} onSubmit={handleSubmit}>
      <div className={inputContainer}>
        <input
          className={amountStyle}
          name="amount"
          onChange={handleChange}
          placeholder="Amount.00"
          type="number"
          min="0"
        />
        <input
          className={dateInput}
          name="date"
          type="date"
          onChange={handleChange}
          placeholder="DD/MM/"
        />
      </div>
      <span className={`${categoriesHeader} ${blockHeader}`}>Categories</span>
      <ul className={categoriesList} role="group">
        {categories.map((category) => (
          <li key={category} className={categoriesItem}>
            <label>
              <input
                className={radioStyle}
                onChange={handleChange}
                name="categories"
                type="radio"
                value={category}
              />
              <span style={{ padding: "0 0 0 16px" }}>{category}</span>
            </label>
          </li>
        ))}
      </ul>
      <span className={`${commentsHeader} ${blockHeader}`}>Comments</span>
      <textarea
        className={textarea}
        onChange={handleChange}
        name="comments"
        type="textarea"
        placeholder="Comment's"
      />
      <button type="submit" className={button}>
        Add
      </button>
    </form>
  );
};

export default FormCostIncome;
