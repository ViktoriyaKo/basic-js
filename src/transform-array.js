const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
// ТЕСТЫ ПРОЙДЕНЫ
function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
    let copy = arr.slice();
    for (let i = 0; i < arr.length; i++) {
      if (copy[i] === "--discard-next") {
        copy.splice(i + 1, 1);
      } else if (copy[i] === "--discard-prev" && i !== 0) {
        // везде где есть -
        copy.splice(i - 1, 1);
      } else if (copy[i] === "--double-next") {
        copy.splice(i + 1, 0, copy[i + 1]);
      } else if (copy[i] === "--double-prev" && i !== 0) {
        copy.splice(i, 1, copy[i - 1]);
      }
    }
    let res = copy.filter((item) => {
      return (
        item !== "--discard-next" &&
        item !== "--discard-prev" &&
        item !== "--double-next" &&
        item !== "--double-prev" &&
        item !== undefined
      );
    });
    return res;
  }
}

module.exports = {
  transform,
};
