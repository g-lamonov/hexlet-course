/*
arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:

Массив
Индекс
Значение по умолчанию (равно null)
*/

// BEGIN (write your solution here)
const get = (arr, index, value = null) => ((index >= arr.length || index < 0) ? value : arr[index]);
export default get;
// END
