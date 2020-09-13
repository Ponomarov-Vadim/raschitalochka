export const initCategoryColors = [
  { category: "Main Expenses", color: "#ecb22a" },
  { category: "Food", color: "#e28b20" },
  { category: "Car", color: "#d25925" },
  { category: "Self Care", color: "#67b7d0" },
  { category: "Child Care", color: "#5593d7" },
  { category: "Household Products", color: "#ffab00" },
  { category: "Education", color: "#9cc254" },
  { category: "Entertaiment", color: "#73ad57" },
  { category: "Other Expenses", color: "#507c3a" },
  { category: "Irregular Income", color: "#75c16e" },
  { category: "Regular Income", color: "#75c16e" },
];

export const getCategoryColor = (category) => {
  return initCategoryColors.find((el) => el.category === category);
};
