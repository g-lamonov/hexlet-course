/*
tests/gt.test.js
Напишите тесты для функции _.gt(value, other), которая возвращает true в том случае, если value > other, и false в иных случаях.

gt(3, 1); // true
gt(3, 3); // false
gt(1, 3); // false

*/

// @ts-check

import getFunction from '../functions.js';

const gt = getFunction();

// BEGIN (write your solution here)
test('gt', () => {
  // Проверка на то, что функция возвращает true в случае value > other
  expect(gt(13, 7)).toBe(true);
  // Проверка на то, что функция возвращает false в случае value < other
  expect(gt(7, 13)).toBe(false);
  // Проверка на то, что функция возвращает false в случае value = other
  expect(gt(7, 7)).toBe(false);
  // Проверка на то, что функция возвращает false, если ничего не переделается
  expect(gt()).toBe(false);
  });
// END
