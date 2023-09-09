// get the current day of the week
const today = new Date();
const dayOfWeek = today.getDay();

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayOfWeekElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);

const millisecondsElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);

// display the day of the week to the dom
dayOfWeekElement.textContent = daysOfTheWeek[dayOfWeek];

setInterval(getUTCMilliseconds, 1);

function getUTCMilliseconds() {
  const milliseconds = new Date().getUTCMilliseconds();
  millisecondsElement.textContent = milliseconds;
}
