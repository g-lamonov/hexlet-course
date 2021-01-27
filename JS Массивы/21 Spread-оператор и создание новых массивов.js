/*
arrays.js
Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы, то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.

В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.
*/

/* eslint-disable import/prefer-default-export, default-case, consistent-return */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export const flatten = (arr) => {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = [...result, ...item];
    } else {
      result = [...result, item];
    }
  }
  return result;
};

// END


import { flatten } from '../arrays.js';

// Для пустого массива возвращается []
flatten([]); // []
flatten([1, [3, 2], 9]); // [1, 3, 2, 9]
flatten([1, [[2], [3]], [9]]); // [1, [2], [3], 9]
