const { adjectives } = require('./data/adjectives');
const { adverbs } = require('./data/adverbs');
const { names } = require('./data/names');
const { generatePetname } = require('./petname');

const separator = '---';

it('should generate petname', () => {
  const words = 1;
  const petname = generatePetname({ separator, words });
  const parts = petname.split(separator);

  expect(parts).toHaveLength(words);
  expect(names).toContain(parts[0]);
});

it('should generate petname with adjective', () => {
  const words = 2;
  const petname = generatePetname({ separator, words });
  const parts = petname.split(separator);

  expect(parts).toHaveLength(words);
  expect(adjectives).toContain(parts[0]);
  expect(names).toContain(parts[1]);
});

it('should generate petname with adjective with default parts if words option is negative', () => {
  const words = -2;
  const petname = generatePetname({ separator, words });
  const parts = petname.split(separator);

  expect(parts).toHaveLength(2);
  expect(adjectives).toContain(parts[0]);
  expect(names).toContain(parts[1]);
});

it('should generate petname with adjective and adverb', () => {
  const words = 3;
  const petname = generatePetname({ separator, words });
  const parts = petname.split(separator);

  expect(parts).toHaveLength(words);
  expect(adverbs).toContain(parts[0]);
  expect(adjectives).toContain(parts[1]);
  expect(names).toContain(parts[2]);
});

it('should generate petname with adjective and multiple adverbs', () => {
  const words = 5;
  const petname = generatePetname({ separator, words });
  const parts = petname.split(separator);

  expect(parts).toHaveLength(words);
  expect(adverbs).toContain(parts[0]);
  expect(adverbs).toContain(parts[1]);
  expect(adverbs).toContain(parts[2]);
  expect(adjectives).toContain(parts[3]);
  expect(names).toContain(parts[4]);
});
