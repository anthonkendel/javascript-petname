# [`javascript-petname`](https://github.com/anthonkendel/javascript-petname)

Petname implementation in JavaScript, inspired by [Dustin Kirkland's Petname](https://github.com/dustinkirkland/petname). The data is from [petname](https://github.com/dustinkirkland/petname).

[![latest git version](https://img.shields.io/github/v/tag/anthonkendel/javascript-petname?label=version)](https://github.com/anthonkendel/javascript-petname)
[![latest npm version](https://img.shields.io/npm/v/anthonkendel/javascript-petname)](https://www.npmjs.com/package/javascript-petname)
[![license](https://img.shields.io/github/license/anthonkendel/javascript-petname)](https://github.com/anthonkendel/javascript-petname/blob/master/LICENSE)

## Installation

### Requirements

- `node` >= v12
- `npm` >= v5

`javascript-petname` can either be installed globally or used with [`npx`](https://www.npmjs.com/package/npx).

```bash
npm install -g javascript-petname
```

```bash
npx javascript-petname
```

## Usage

```bash
npx javascript-petname <args>
```

The following arguments are available

| argument            | description                       |
| ------------------- | --------------------------------- |
| `--words`, `-w`     | number of words, defaults to `2`. |
| `--separator`, `-s` | separator, defaults to `-`        |

All arguments is available in the exported `generatePetname()` function.

## Example

```bash
npx javascript-petname
```

```bash
npx javascript-petname -w 4 -s =
```

```javascript
const { generatePetname } = require('javascript-petname');

generatePetname();
```

```javascript
const { generatePetname } = require('javascript-petname');

generatePetname({
  words: 4,
  separator: '=',
});
```

## Contributing

If you want to contribute and make our project better, your help is very welcome.

## License

[MIT © anthonkendel](https://choosealicense.com/licenses/mit/)
