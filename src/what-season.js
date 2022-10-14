const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
//  date.getTime() - единственный метод, которого не было в deeperFakeDate
function getSeason(date) {
  if (date instanceof Date) {
    try {
      date.getTime();
    } catch (err) {
      throw new Error("Invalid date!");
    }
    let month = date.getMonth();
    if (month < 2 || month === 11) {
      return "winter";
    } else if (month >= 2 && month < 5) {
      return "spring";
    } else if (month >= 5 && month < 8) {
      return "summer";
    } else {
      return "autumn";
    }
  } else if (date === undefined || date === null || date === NaN) {
    return "Unable to determine the time of year!";
  } else {
    throw new Error("Invalid date!");
  }
}
module.exports = {
  getSeason,
};
