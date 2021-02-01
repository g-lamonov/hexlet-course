/*
tests/take.test.js
Напишите тесты для функции take(items, n), которая возвращает первые n элементов из массива:
take([], 2); // []
take([1, 2, 3]); // [1]
take([1, 2, 3], 2); // [1, 2]
take([4, 3], 9); // [4, 3]
*/

import { strict as assert } from 'assert';
import getFunction from '../functions.js';

const take = getFunction();

// BEGIN (write your solution here)
// Проверка работы функции с пустым массивом
assert.deepStrictEqual(take([], 2), []);
// Проверка работы функции с отсутствием числа в качестве аргумента функции
assert.deepStrictEqual(take([1, 2, 3]), [1]);
// Проверка работы функции с числом в качетсве аргумента функции
assert.deepStrictEqual(take([1, 2, 3], 2), [1, 2]);
// Проверка работы функции с числом большим чем количество элементов в массиве
assert.deepStrictEqual(take([1, 2, 3], 10), [1, 2, 3]);
// END
