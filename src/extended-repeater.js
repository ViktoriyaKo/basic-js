const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// НЕ РЕШЕНА
function repeater(str, options) {
  let string = String(str),
    additionRepeatTimes = options.additionRepeatTimes || 1,
    repeatTimes = options.repeatTimes || 1,
    separator = options.separator || "+",
    addition = String(options.addition);
  additionSeparator = options.additionSeparator || "|";

  let str1 = "";
  if (addition === "undefined") {
    for (let i = 0; i < repeatTimes; i++) {
      str1 += string;
      for (let j = 0; j < additionRepeatTimes; j++) {
        str1 += "";
        if (j !== additionRepeatTimes - 1) {
          str1 += additionSeparator;
        }
      }
      if (i !== repeatTimes - 1) {
        str1 += separator;
      }
    }
  } else {
    for (let i = 0; i < repeatTimes; i++) {
      str1 += string;
      for (let j = 0; j < additionRepeatTimes; j++) {
        str1 += addition;
        if (j !== additionRepeatTimes - 1) {
          str1 += additionSeparator;
        }
      }
      if (i !== repeatTimes - 1) {
        str1 += separator;
      }
    }
  }

  return str1;
}
module.exports = {
  repeater,
};
