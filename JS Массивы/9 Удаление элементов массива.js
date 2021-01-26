/*
Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.

*/


// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const getSameParity = (arr) => {
  if (arr.length === 0) return [];
  const result = [];
  let number = (arr[0] % 2 === 0) ? 'even' : 'odd';
  for (const item of arr) {
    if (item % 2 === 0 && number === 'even' || item % 2 != 0 && number === 'odd') {
      result.push(item)
    };
  }
  return result;
}

export default getSameParity;
// END

getSameParity([]);        // []
getSameParity([1, 2, 3]); // [1, 3]
getSameParity([1, 2, 8]); // [1]
getSameParity([2, 2, 8]); // [2, 2, 8]



// other solution

// BEGIN
const getSameParity = (coll) => {
  if (coll.length === 0) {
    return [];
  }

  const result = [];
  const remainder = Math.abs(coll[0] % 2);

  for (const item of coll) {
    if (Math.abs(item % 2) === remainder) {
      result.push(item);
    }
  }

  return result;
};

export default getSameParity;
// END
