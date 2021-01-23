/*
reverse.js
Реализуйте функцию reverse(), которая переворачивает строку. Например:
*/

// @ts-check

// BEGIN (write your solution here)
const reverse = (str) => {
  let i = str.length - 1;
  let result = '';
  
  while (i >= 0) {
    result = str[i];
    i = i--;
  }

  return result;
}
// END

export default reverse;
