/*
myMathModule.js
В файле myMathModule.js:

Создайте функцию getTriangleArea(), которая принимает два аргумента h и b и вычисляет площадь треугольника по формуле A = 1/2 * h * b, где h — высота, а b — основание треугольника.

Экспортируйте функцию.

solution.js
В файле solution.js:

Импортируйте getTriangleArea из модуля myMathModule.
Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n2/2. Используйте функцию square (принимает число и возвращает его квадрат).
Экспортируйте созданную функцию по умолчанию.
*/

// myMathModule.js

// @ts-check

// BEGIN (write your solution herec
export const getTriangleArea = (h, b) => {
  const area = (h * b) / 2;
  return area;
};
// END

// solution.js

// @ts-check

import square from './square.js';


// BEGIN (write your solution here)
import { getTriangleArea } from './myMathModule.js';

const solution = (n) => getTriangleArea(n, square(n) / 2);

export default solution;
// END
