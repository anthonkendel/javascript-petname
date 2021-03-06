const { adjectives } = require('./data/adjectives');
const { adverbs } = require('./data/adverbs');
const { names } = require('./data/names');

/**
 * @param {string[]} values
 *
 * @returns {string}
 */
function randomValue(values) {
  Math.random();
  const numberOfValues = values.length;
  const index = Math.floor(Math.random() * numberOfValues);
  return values[index];
}

/**
 * @returns {string}
 */
function generatePetname() {
  const separator = '-';

  const petname = [randomValue(adverbs), randomValue(adjectives), randomValue(names)].join(separator);

  return petname;
}

module.exports = {
  generatePetname,
};
