/*
math.js
Реализуйте и экспортируйте по умолчанию функцию, которая возвращает среднее арифметическое всех переданных аргументов. Если функции не передать ни одного аргумента, то она должна вернуть null.
*/

// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
const average = (...numbers) => {
  if (!numbers.length) return null;
  return _.sum(numbers) / numbers.length;
};

export default average;
// END


average(0); // 0
average(0, 10); // 5
average(-3, 4, 2, 10); // 3.25
average(); // null
