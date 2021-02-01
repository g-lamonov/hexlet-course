/*
tests/set.test.js
Напишите тесты для функции set(obj, path, value) возвращающей объект, в котором она изменяет (или добавляет) значение по указанному пути. Функция мутирует объект.

const object = { a: [{ b: { c: 3 } }] };

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // => 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z); // => 5

*/


// @ts-check

import _ from 'lodash';

import getFunction from '../functions.js';

const set = getFunction();

// BEGIN (write your solution here)
let object;
beforeEach(() => {
  object = { a: [{ b: { c: 3 } }] };
});

test("adding element", () => { expect(set(object, "a[0].b.c", 4)).toEqual({ a: [{ b: { c: 4 } }], });
});

test("changing element", () => { expect(set(object, "a[0].b.c", 5)).toEqual({ a: [{ b: { c: 5 } }], });
});
// END
