/*
arrays.js
Реализуйте и экспортируйте функцию getWeekends(), которая возвращает массив из двух элементов – названий выходных дней на английском. Функция принимает на вход параметр – формат возврата. Всего есть два возможных значения:

'long' (по умолчанию) – массив содержит значения saturday и sunday
'short' – массив содержит значения sat и sun
*/

// @ts-check
/* eslint-disable import/prefer-default-export, default-case, consistent-return */

// BEGIN (write your solution here)
export const getWeekends = (str) => ((str === 'short') ? ['sat', 'sun'] : ['saturday', 'sunday']);
// END
