import { getCategoryColor } from '../../helpers/initialCategoryColors';

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


export const getType = (arr, type) => arr.filter((el) => el.type === type);

export const getAllTypeAmount = (arr) =>
  arr.reduce((acc, el) => (acc = acc + el.amount), 0);

export const getCategories = (arr) => {
  const unicCategory = [];
  arr.forEach((el) => {
    if (!unicCategory.includes(el.category)) unicCategory.push(el.category);
  });
  return unicCategory;
};

export const getAllCategoryAmount = (arr) => {
  const unicCategory = getCategories(arr);
  return unicCategory.map((category) => {
    const categoryAmount = arr.reduce(
      (acc, el) => (acc = el.category === category ? acc + el.amount : acc),
      0
    );
    return { category, categoryAmount, color: getCategoryColor(category).color };
  });
};

export const getFilteredDataBySelectedMonth = (arr, selctedMonth) => {
  return arr.filter(
    (el) => months[new Date(el.date).getMonth()] === selctedMonth
  );
};

export const getFilteredDataBySelectedYear = (arr, selectedYear) => {
  return arr.filter((el) => {
    if (new Date(el.date).getFullYear() === selectedYear) {
      return el;
    }
    return null;
  });
};

export const getFilteredDataByYearAndMonth = (data = [], year, month) =>
  getFilteredDataBySelectedMonth(
    getFilteredDataBySelectedYear(data, year),
    month
  );

export const getMonths = arr => {
    const uniqMonth = [];
    arr.forEach(({ date }) => {
      const index = new Date(date).getMonth();
      const month = months[index];
      if (!uniqMonth.includes(month)) uniqMonth.push(month);
    });
    return months.filter(month => uniqMonth.includes(month));
  };
  
  export const getYears = arr => {
    const uniqYear = [];
    arr.forEach(({ date }) => {
      const year = new Date(date).getFullYear();
      if (!uniqYear.includes(year)) uniqYear.push(year);
    });
    return uniqYear.sort((prev, next) => prev - next);
  };
