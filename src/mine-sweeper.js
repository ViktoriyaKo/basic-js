const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

// НЕ РЕШЕНО
function minesweeper(matrix) {
  // let copy = matrix.forEach(item => item.forEach(item => item === 1));
  // console.log(copy);
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     if(matrix[i][j] === true) {
  //       matrix[i][j] = 1;
  //       matrix[i][j + 1] = 1
  //     }
  //   }
  // }
}

module.exports = {
  minesweeper,
};
