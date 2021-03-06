const { isNumber } = require('./isNumber');

class ArgumentParser {
  constructor() {
    this.options = {};
  }
  /**
   *
   * @param {string} argument
   * @param {unknown} value
   * @param {string[]} validArguments
   * @param {string} key
   */
  parseArgument(argument, value, validArguments, key) {
    if (validArguments.includes(argument)) {
      this.options[key] = isNumber(value) ? Number(value) : value;
    }
  }
}
module.exports = {
  ArgumentParser,
};
