/*
prime.js
Реализуйте и экспортируйте по умолчанию функцию, которая проверяет переданное число на простоту и печатает на экран yes или no.
*/
// @ts-check

// BEGIN (write your solution here)

// @ts-check
/* eslint-disable no-console */

// BEGIN (write your solution here)
const isPrime = (number) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const sayPrimeOrNot = (number) => isPrime(number) ? console.log("yes") : console.log("no");
export default sayPrimeOrNot;
// END


sayPrimeOrNot(5); // 'yes'
sayPrimeOrNot(4); // 'no'
