export const toISODate = (milliseconds) => {
  var date = new Date(milliseconds);
  var y = String(date.getFullYear()).slice(2);
  var m = date.getMonth() + 1;
  var d = date.getDate();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  return [d, m, y].join(".");
};

export const formatNumbers = (num) => {
  const numToFixed = num.toFixed(2);
  return String(numToFixed).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
};

export const scrollToUp = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });