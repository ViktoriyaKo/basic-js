const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

// throw new NotImplementedError('Not implemented');

function deleteDigit(n) {
  let arr = [];
  let str = n
    .toString()
    .split("")
    .map((item) => {
      return +item;
    });
  // console.log(str);
  for (let i = 0; i < str.length; i++) {
    let res = str.slice(); //копия, чтобы изменять массив, каждый раз создавая новый
    res.splice(i, 1);
    let b = +res.join("");
    arr.push(b);
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};
