/*
solution.js
Напишите функцию smallestDivisor(). Она должна находить наименьший целый делитель числа. Поведение у функции такое же, как в предыдущем уроке, но реализация (код функции) должна быть другой. На этот раз реализуйте императивный итеративный процесс, что означает:

не используйте рекурсию
используйте переменные
используйте цикл while
Например, наименьший делитель числа 15 это 3.
*/

// @ts-check
/* eslint operator-assignment: off */

// BEGIN (write your solution here)

const smallestDivisor = (n) => {
  if (n < 1) {
    return NaN;
  }
  if (n === 1) {
    return 1;
  }
  let result = 2;
  
  while (n % result != 0) {
    result = result + 1
  }
  return result;
}

export default smallestDivisor;