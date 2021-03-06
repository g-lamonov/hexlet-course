/*
tests/take.test.js
Напишите тесты для функции without(coll, [values]), которая принимает первым параметром массив и возвращает его копию, из которой исключены значения, переданные вторым и последующими параметрами.

_.without([2, 1, 2, 3], 1, 2); // [3]
*/

import getFunction from '../functions.js';

const without = getFunction();

// BEGIN (write your solution here)
test("without", () => {
    // Проверка на то, что функция удаляет значение
    expect(without([1, 2, 3], 1)).toEqual([2, 3]);
    // Проверка на то, что функция ничего не удаляет, если в массиве нет такого элемента
    expect(without([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    // Проверка на то, что функция оставляет неизменным массив при отсутствии аргументов во втором и последующих параметрах
    expect(without([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    // Проверка на то, что пустой массив остается неизменным
    expect(without([], 1)).toEqual([]);
    // Проверка удаления двух значений
    expect(without([1, 2, 3, 4], 2, 4)).toEqual([1, 3]);
    // Проверка удаления всех значений
    expect(without([1, 2, 3], 1, 2, 3)).toEqual([]);
  });
// END
