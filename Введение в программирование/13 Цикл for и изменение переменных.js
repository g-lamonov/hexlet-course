/*

isPrime.js
Напишите функцию isPrime(). Она принимает число и возвращает true, если число является простым, и false в ином случае.

Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.

Используйте цикл for и арифметические шорткаты.

*/

// @ts-check

// BEGIN (write your solution here)
const isPrime = (number) => {
  if (number === 0 || number === 1 || number < 1) {
    return false;
  }
  for (let counter = 2; counter <= number-1; counter++) {
    if (number % counter === 0) {
      return false;
    }
  }
  return true;

}
// END

export default isPrime;