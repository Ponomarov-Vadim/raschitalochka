import React, { useState } from "react";
import style from "./FormCostIncome.module.css";
import { postIncomeCost } from "../../services/api";

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

const FormCostIncome = ({
  actionType,
  changeIsModalOpen,
  balance,
  token,
  user,
  getFinance
}) => {
  const categories =
    actionType === "COST" ? [...categoriesCost] : [...categoriesIncom];

  const amountStyle =
    actionType === "COST" ? style.amountInputCost : style.amountInputIncome;

  const radioStyle =
    actionType === "COST" ? style.radioCost : style.radioIncome;

  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(Date.now());
  const [category, setCategory] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const time = new Date(date).getTime();
    const balanceAfter = actionType === "COST" ? balance - amount : balance + Number.parseInt(amount);

    if (!category) {
      alert("Some require fields is empty!")
      return;
    }

    const finance = {
      date: time,
      type: actionType === "COST" ? "-" : "+",
      category: category,
      amount: amount,
      balanceAfter,
      comments: comments,
      typeBalanceAfter: balanceAfter > 0 ? "+" : "-",
    };
    console.log(finance);

    postIncomeCost(user.id, token, finance);
    getFinance();
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
    <form className={style.formContainer} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <input
          className={amountStyle}
          name="amount"
          onChange={handleChange}
          placeholder="Amount.00"
          type="number"
          min="0"
        />
        <input
          className={style.dateInput}
          name="date"
          type="date"
          onChange={handleChange}
          placeholder="DD/MM/"
        />
      </div>
      <span className={`${style.categoriesHeader} ${style.blockHeader}`}>
        Categories
      </span>
      <ul className={style.categoriesList} role="group">
        {categories.map((category) => (
          <li key={category} className={style.categoriesItem}>
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
      <span className={`${style.commentsHeader} ${style.blockHeader}`}>
        Comments
      </span>
      <textarea
        className={style.textarea}
        onChange={handleChange}
        name="comments"
        type="textarea"
        placeholder="Comment's"
      />
      <button type="submit" className={style.button}>
        Add
      </button>
    </form>
  );
};

export default FormCostIncome;
