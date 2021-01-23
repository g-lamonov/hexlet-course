/*
smallestDivisor.js
Реализуйте тело функции smallestDivisor(), используя итеративный процесс. Функция должна находить наименьший делитель заданного числа. Число, передаваемое в функцию, больше нуля.

Доп. условие: делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).

Например, наименьший делитель числа 15 это 3.
*/

// @ts-check

const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  if (num === 1) {
    return 1;
  }
  if (num % 2 === 0) {
    return 2;
  }
  const iter = (number, acc) => {
    if (number % acc === 0) {
      return acc;
    }
    return iter(number, acc + 1);
  };
  return iter(num, 2);
  // END
};

export default smallestDivisor;