/*
arrays.js
Реализуйте и экспортируйте функцию getMax(), которая ищет в массиве максимальное значение и возвращает его.
*/

/* eslint-disable import/prefer-default-export, prefer-const */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// @ts-check

// BEGIN (write your solution here)
export const getMax = (arr) => {
    if (!arr.length) return null;
    let [max, ...rest] = arr;
    for (const item of rest) {
        if (item > max) max = item;
    }
    return max;
};
// END


import { getMax } from '../arrays.js';

// Для пустого массива возвращается null
getMax([]); // null
getMax([1, 10, 8]); // 10
