/*
arrays.js
Реализуйте и экспортируйте по умолчанию функцию, принимающую на вход два массива и возвращающую количество общих уникальных значений в обоих массивах.
*/

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
const getSameCount = (firstArray, secondArray) => {
  const uniqItemsFirstArray = _.uniq(firstArray);
  const uniqItemsSecondArray = _.uniq(secondArray);
  let result = 0;
  for (const item of uniqItemsFirstArray) {
    if (uniqItemsSecondArray.includes(item)) result++
  }
  return result;
}

export default getSameCount;
// END


// Общие повторяющиеся элементы: 1, 3, 2
getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3

// Общие повторяющиеся элементы: 4
getSameCount([1, 4, 4], [4, 8, 4]); // 1

// Общие повторяющиеся элементы: 1, 10
getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2

// Нет элементов
getSameCount([], []); // 0
