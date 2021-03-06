const { isNumber } = require('./isNumber');

it.each`
  value        | expected
  ${null}      | ${false}
  ${undefined} | ${false}
  ${NaN}       | ${false}
  ${''}        | ${false}
  ${' '}       | ${false}
  ${'10a'}     | ${false}
  ${'-1'}      | ${true}
  ${'0'}       | ${true}
  ${'1'}       | ${true}
  ${'100'}     | ${true}
  ${'111'}     | ${true}
  ${'000'}     | ${true}
`('should return $expected for $value', ({ value, expected }) => {
  expect(isNumber(value)).toBe(expected);
});
