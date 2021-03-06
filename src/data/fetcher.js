const { writeFile } = require('fs').promises;
const fetch = require('node-fetch');

// All credit for the sources goes to https://github.com/dustinkirkland/petname.
const baseURL = 'https://raw.githubusercontent.com/dustinkirkland/petname/master/usr/share/petname';
const sizes = ['small', 'medium', 'large'];
const types = ['adjectives', 'adverbs', 'names'];

/**
 *
 * @param {string} size
 * @param {string} type
 *
 * @returns {Promise<string[]>}
 */
async function makeRequest(size, type) {
  const fullURL = `${baseURL}/${size}/${type}.txt`;
  const response = await fetch(fullURL);
  const data = await response.text();
  const values = data.split('\n');
  return values;
}

/**
 * @returns {void}
 */
async function fetcher() {
  types.forEach(async (type) => {
    console.info(`Fetching ${type} values...`);
    const requests = sizes.map((size) => makeRequest(size, type));
    const responses = await Promise.all(requests);
    const values = responses.reduce((previous, current) => [...previous, ...current], []);

    const fileName = `${type}.js`;
    const fileValues = values.map((value) => `"${value}"`);
    const fileContents = `module.exports = { ${type}: [${fileValues}] };`;

    await writeFile(`src/data/${fileName}`, fileContents);
  });
  console.info('Done!');
}

fetcher();
