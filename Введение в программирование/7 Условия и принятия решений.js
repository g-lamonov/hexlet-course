/*
finalGrade.js
Реализуйте функцию finalGrade(), которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.

Функция принимает два аргумента:

exam — оценка за экзамен, число от 0 до 100;
projects — количество проектов, число от 0 и выше.
Функция возвращает: число (итоговую оценку).

Есть четыре возможных итоговых оценки:

100, если оценка за экзамен выше 90 или есть больше 10 проектов
90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
0 в любом другом случае
*/

// @ts-check

// BEGIN (write your solution here)

// END
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  }
  if (exam > 75 && projects >= 5) {
    return 90;
  }
  if (exam > 50 && projects >= 2) {
    return 75;
  }
  return 0;
  
}
export default finalGrade;
