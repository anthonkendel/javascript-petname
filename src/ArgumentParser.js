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
      const valueAsNumber = Number(value);
      this.options[key] = isNaN(valueAsNumber) ? value : valueAsNumber;
    }
  }
}
module.exports = {
  ArgumentParser,
};
