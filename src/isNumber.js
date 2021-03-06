/**
 * @param {unknown} value
 *
 * @returns {value is number}
 */
function isNumber(value) {
  return !isNaN(value) && !isNaN(parseFloat(value));
}

module.exports = {
  isNumber,
};
