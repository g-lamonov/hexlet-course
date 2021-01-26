/*
arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3 (три).

В случае пустого массива функция должна вернуть 0 (для этого в коде можно использовать guard expression):
*/


/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const calculateSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0) {
      sum += arr[i];
    }
  }

  return sum;
};

export default calculateSum;
// END


const coll1 = [8, 9, 21, 19, 18, 22, 7];
calculateSum(coll1); // 48

const coll2 = [2, 0, 17, 3, 9, 15, 4];
calculateSum(coll2); // 27

const coll = [];
calculateSum(coll); // 0
