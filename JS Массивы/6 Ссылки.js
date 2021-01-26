/*
arrays.js
Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы внутри него в обратном порядке.

Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse().
*/

// @ts-check
/* eslint-disable no-param-reassign, import/prefer-default-export */

// BEGIN (write your solution here)
export const reverse = (arr) => {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        const reservingItem = arr[i];
        arr[i] = arr[j];
        arr[j] = reservingItem;
    }
    return arr;
};

// END
