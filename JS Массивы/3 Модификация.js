/*
arrays.js
Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть.
*/

// @ts-check
/* eslint-disable no-param-reassign, prefer-destructuring, import/prefer-default-export */

// BEGIN (write your solution here)

export const swap = (numbers) => {
  if (numbers.length <= 1) {
    return numbers;
  }
  const firstNum = numbers[0];
  const lastNum = numbers.length - 1;
  numbers[0] = numbers[lastNum];
  numbers[lastNum] = firstNum;
  return numbers;
};
// END
