import { promises } from "fs";
import fetch from "node-fetch";

// All credit for the sources goes to https://github.com/dustinkirkland/petname.
const baseURL =
  "https://raw.githubusercontent.com/dustinkirkland/petname/master/usr/share/petname";
const sizes = ["small", "medium", "large"];
const types = ["adjectives", "adverbs", "names"];

async function makeRequest(size: string, type: string): Promise<string[]> {
  const fullURL = `${baseURL}/${size}/${type}.txt`;
  const response = await fetch(fullURL);
  const data = await response.text();
  const values = data.split("\n");
  return values;
}

async function fetchPetnameValues() {
  types.forEach(async (type) => {
    console.info(`Fetching ${type} values...`);
    const requests = sizes.map((size) => makeRequest(size, type));
    const responses = await Promise.all(requests);
    const values = responses.reduce(
      (previous, current) => [...previous, ...current],
      []
    );

    const fileName = `${type}.ts`;
    const fileValues = values.map((value) => `"${value}"`);
    const fileContents = `export const ${type} = [${fileValues}]`;

    await promises.writeFile(`src/data/${fileName}`, fileContents);
  });
  console.info("Done!");
}

fetchPetnameValues();
