#!/usr/bin/env node

const { ArgumentParser } = require('./ArgumentParser');
const { generatePetname } = require('./petname.js');

const [, , ...arguments] = process.argv;

const parser = new ArgumentParser();
for (let index = 0; index < arguments.length; index++) {
  const argument = arguments[index];
  const value = arguments[index + 1];

  if (argument && value) {
    parser.parseArgument(argument, value, ['--words', '-w'], 'words');
    parser.parseArgument(argument, value, ['--separator', '-s'], 'separator');
    parser.parseArgument(argument, value, ['--letters', '-l'], 'letters');
  }
  index++;
}

console.log(generatePetname(parser.options));
