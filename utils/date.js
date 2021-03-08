// Constants
const MONTH_NAMES = [
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

const DAY_NAMES = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Functions
const formatDateForName = (dateString) => {
  const d = new Date(dateString);

  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();

  return [
    year,
    month < 10 ? `0${month + 1}` : month + 1,
    date < 10 ? `0${date}` : date,
  ].join("-");
};

const formatDateForTitle = (dateString) => {
  const d = new Date(dateString);

  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const day = d.getDay();

  return `${DAY_NAMES[day - 1]} ${MONTH_NAMES[month]} ${
    date < 10 ? `0${date}` : date
  }, ${year}`;
};

module.exports = {
  formatDateForTitle,
  formatDateForName,
};
