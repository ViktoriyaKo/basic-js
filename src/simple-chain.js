const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this; // везде кроме finish
  },

  removeLink(position) {
    if (
      position <= 0 || // 0 в тестах
      position > this.chain.length ||
      typeof position !== "number" ||
      position === null ||
      position === undefined
    ) {
      this.chain = []; // обязательное условие!!!
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1); // -1!!!!
      return this;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let res = "";
    for (let i = 0; i < this.chain.length; i++) {
      if (i === this.chain.length - 1) {
        res += `( ${this.chain[i]} )`;
      } else {
        res += `( ${this.chain[i]} )~~`;
      }
    }
    this.chain = []; // обязательное условие!!!
    return res;
  },
};

module.exports = {
  chainMaker,
};
