/**
 * @typedef {('en' | 'de' | 'fr' | 'it')} Locale
 */

/**
 * @const {Number} current date
 */
const now = new Date();

/**
 * Change the year of the given date
 *
 * @param {Date} date
 * @param {Number} year
 * @returns {Date} date with changed year
 */
export function changeYear(date, year) {
  return new Date(year, date.getMonth(), date.getDate());
}

/**
 * Change the month of the given date
 *
 * @param {Date} date
 * @param {Number} month
 * @returns {Date} date with changed year
 */
export function changeMonth(date, month) {
  return new Date(date.getFullYear(), month, date.getDate());
}

/**
 * Change the year and month of the given date
 *
 * @param {Date} date
 * @param {Number} year
 * @param {Number} month
 * @returns {Date} date with changed year
 */
export function changeYearAndMonth(date, year, month) {
  return new Date(year, month, date.getDate());
}

/**
 * Add days to the given date
 *
 * @param {Date} date
 * @param {Number} days
 * @returns {Date} date with days added
 */
export function addDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

/**
 * Get the last monday of the given date
 *
 * @param {Date} date
 * @returns {Date} last monday
 */
export function getLastMonday(date = now) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - date.getDay() + 1
  );
}

/**
 * Get the first day of the month
 *
 * @param {Date} date
 * @returns {Date} first day of the month
 */
export function getFirstDayOfMonth(date = now) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Get the last day of the month
 *
 * @param {Date} date
 * @returns {Date} last day of the month
 */
export function getLastDayOfMonth(date = now) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
 * Calculate the minutes between two dates
 *
 * @param {Date} date1
 * @param {Date} date2
 * @returns {Number} minutes between two dates
 */
export function calcMinsBetween(date1, date2) {
  return Math.abs(Math.round((date1.getTime() - date2.getTime()) / 60000));
}

/**
 * Checks if the given dates are equal
 *
 * @param {Date} date1
 * @param {Date} date2
 * @returns {Boolean} are dates equal
 */
export function isEqual(date1, date2) {
  return date1.getTime() === date2.getTime();
}

/**
 * Checks if it is the same day
 *
 * @param {Date} date1
 * @param {Date} date2
 * @returns {Boolean} is same day
 */
export function isSameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/**
 * Checks if it is the current day
 *
 * @param {Date} date
 * @returns {Boolean} is current day
 */
export function isToday(date) {
  return isSameDay(date, now);
}

/**
 * Checks if it is the day in the past
 *
 * @param {Date} date
 * @returns {Boolean} is day in the past
 */
export function isDayInThePast(date) {
  return date < now;
}

/**
 * Get the day of the week of the given date
 *
 * @param {Locale} locale
 * @param {Date} date
 * @returns {String} day of the week
 */
export function getWeekday(locale, date) {
  let weekday = new Date(0, 0, date.getDay()).toLocaleString(locale, { weekday: 'long' });
  return capitalize(weekday.replace(/\./, ''));
}

/**
 * Get the day of the week of the given date
 *
 * @param {Locale} locale
 * @param {Date} date
 * @returns {String} day of the week
 */
export function getWeekdayShort(locale, date) {
  let weekday = new Date(0, 0, date.getDay()).toLocaleString(locale, { weekday: 'short' });
  return capitalize(weekday.replace(/\./, ''));
}

/**
 * Get the month of the given date
 *
 * @param {Locale} locale
 * @param {Date} date
 * @returns {String} month
 */
export function getMonth(locale, date) {
  let month = new Date(0, date.getMonth()).toLocaleString(locale, { month: 'long' });
  return capitalize(month.replace(/\./, ''));
}

/**
 * Get the month abbreviation of the given date
 *
 * @param {Locale} locale
 * @param {Date} date
 * @returns {String} month
 */
export function getMonthShort(locale, date) {
  let month = new Date(0, date.getMonth()).toLocaleString(locale, { month: 'short' });
  return capitalize(month.replace(/\./, ''));
}

/**
 * Get all days of the given month
 *
 * @param {Date} date
 * @returns {Date[]} days of the month
 */
export function getDaysOfMonth(date = now) {
  const firstDay = getFirstDayOfMonth(date);
  const lastDay = getLastDayOfMonth(date);
  return [...Array(lastDay.getDate())].map((_, i) => addDays(firstDay, i));
}

/**
 * To ISO 8601 date string without 'T' and 'Z'
 *
 * @param {Date} date
 * @returns ISO 8601 date string without 'T' and 'Z'
 */
export function toLocalISOStringWithoutTAndZ(date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().replace("T", " ").replace("Z", "");
}

/**
 * To ISO 8601 date string but just the date
 *
 * @param {Date} date
 * @returns ISO 8601 date string date
 */
export function toLocalISOStringDate(date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().split("T")[0];
}

/**
 * Formats the time of the given date to HH:MM
 *
 * @param {Date} date
 * @returns {String} formatted time
 */
export function formatTime(date) {
  return `${prefixZero(date.getHours())}:${prefixZero(date.getMinutes())}`;
}

/**
 * Formats the given date to d. mmmm yyyy
 *
 * @param {Locale} locale
 * @param {Date} date
 * @returns {String} formatted date
 */
export function formatDate(locale, date) {
  return `${date.getDate()}. ${getMonth(locale, date)} ${date.getFullYear()}`;
}

/**
 * Prefix number with zero if one digit
 *
 * @param {Number} num
 * @returns {String}
 */
function prefixZero(num) {
  if (num < 10) return "0" + num;
  return num.toString();
}

/**
 * Capitalize the first letter of the given string
 *
 * @param {String} str
 * @returns capitalized string
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
