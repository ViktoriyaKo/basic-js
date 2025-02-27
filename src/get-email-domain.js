const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
// ТЕСТЫ ПРОЙДЕНЫ
function getEmailDomain(email) {
  let arr = email.split("");
  let indexDot = arr.lastIndexOf("@");
  let res = arr.slice(indexDot + 1).join("");
  return res;
}

module.exports = {
  getEmailDomain,
};
