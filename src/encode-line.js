const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
// ТЕСТЫ ПРОЙДЕНЫ
function encodeLine(str) {
  let count = 1;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      res += count + str[i];
      count = 0;
    }
    count++;
  }
  return res.replace(/1/g, "");
}

module.exports = {
  encodeLine,
};
