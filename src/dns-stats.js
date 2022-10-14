const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

// ВООБЩЕ НЕ РЕШЕНА!!!!!!!

function getDNSStats(domains) {
  //  let arr = [];
  // for (let i = 0; i < domains.length; i++) {
  //   arr[i] = domains.slice(i, i + 1);
  // }
  // let a = arr.map((item) => {
  //   return item.join().split(".");
  // });
  // let str = "";
  // a.forEach((item) => {
  //   return item.reverse();
  // });
  // return a;
}

module.exports = {
  getDNSStats,
};
