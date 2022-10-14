const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let copy = arr.slice();
  let sortArr = copy.sort((a, b) => a - b);
  let indexLast = sortArr.lastIndexOf(-1);
  let sortArr1 = sortArr.slice(indexLast + 1); // без 1
  let a = arr
    .map((item, index) => {
      if (item === -1) return index;
    })
    .filter((item) => item !== undefined);

  for (let i = 0; i < a.length; i++) {
    sortArr1.splice(a[i], 0, -1);
  }
  return sortArr1;
}

module.exports = {
  sortByHeight,
};
