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
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return [
    year,
    month < 10 ? `0${month + 1}` : month + 1,
    day < 10 ? `0${day}` : day,
  ].join("-");
};

const formatDateForTitle = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${DAY_NAMES[day - 1]} ${MONTH_NAMES[month]} ${
    day < 10 ? `0${day}` : day
  }, ${year}`;
};

module.exports = {
  formatDateForTitle,
  formatDateForName,
};
