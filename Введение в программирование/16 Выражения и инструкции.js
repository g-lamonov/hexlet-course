/*
squares.js
Реализуйте функцию square(), которая возвращает квадрат числа.
Реализуйте функцию sumOfSquares(), которая возвращает сумму квадратов двух чисел.
Реализуйте функцию squareSumOfSquares(), которая возвращает квадрат суммы квадратов двух чисел.
*/

// @ts-check

// BEGIN (write your solution here)
const square = (num) => num * num;
const sumOfSquares = (firstNum, secondNum) => square(firstNum) + square(secondNum);
const squareSumOfSquares = (firstNum, secondNum) => (sumOfSquares(firstNum, secondNum))**2;
// END

export {
  square,
  sumOfSquares,
  squareSumOfSquares,
};
