/*
strings.js
Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку и считает, сколько символов (без учёта повторяющихся символов) использовано в этой строке. Например, в строке yy используется всего один символ — y. А в строке 111yya! — используется четыре символа: 1, y, a и !.
*/

/* eslint-disable no-restricted-syntax */

// BEGIN (write your solution here)
const countUniqChars = (str) => {
  if (str === '') return 0;
  let uniqString = '';
  for (const symbol of str) {
    if (!uniqString.includes(symbol)) {
      uniqString += symbol;
    }
  }
  return uniqString.length;
}
export default countUniqChars;
// END


const text1 = 'yyab'; // y, a, b
countUniqChars(text1); // 3

const text2 = 'You know nothing Jon Snow';
countUniqChars(text2); // 13

// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
countUniqChars(text3); // 0
