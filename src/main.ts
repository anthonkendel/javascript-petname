import { adjectives } from "./data/adjectives";
import { adverbs } from "./data/adverbs";
import { names } from "./data/names";

function randomValue(values: string[]): string {
  Math.random();
  const numberOfValues = values.length;
  const index = Math.floor(Math.random() * numberOfValues);
  return values[index];
}

const separator = "-";
const value = [
  randomValue(adverbs),
  randomValue(adjectives),
  randomValue(names),
].join(separator);

console.info(value);
