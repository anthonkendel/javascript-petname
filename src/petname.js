let { adjectives } = require('./data/adjectives');
let { adverbs } = require('./data/adverbs');
let { names } = require('./data/names');

/**
 * @param {string[]} parts
 *
 * @returns {string}
 */
function getPart(parts) {
  Math.random();
  const numberOfValues = parts.length;
  const index = Math.floor(Math.random() * numberOfValues);
  return parts[index];
}

/**
 * @param {{ words: number, separator: string, letters: number }} parameters
 *
 * @returns {string}
 */
function generatePetname({ words = 2, separator = '-', letters = undefined } = {}) {
  let petnameParts = [];

  if (letters !== undefined) {
    adjectives = adjectives.filter((v) => v.length <= letters);
    adverbs = adverbs.filter((v) => v.length <= letters);
    names = names.filter((v) => v.length <= letters);
  }

  if (words <= 0) {
    words = 2;
  }
  if (words === 1) {
    petnameParts = [getPart(names)];
  }
  if (words === 2) {
    petnameParts = [getPart(adjectives), getPart(names)];
  }
  if (words >= 3) {
    const numberOfAdverbs = words - 2;
    const adverbParts = Array(numberOfAdverbs)
      .fill('')
      .map(() => getPart(adverbs));
    petnameParts = [...adverbParts, getPart(adjectives), getPart(names)];
  }

  const petname = petnameParts.join(separator);
  return petname;
}

module.exports = {
  generatePetname,
};
