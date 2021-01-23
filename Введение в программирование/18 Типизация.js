/*
addDigits.js
Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2
*/

import { length } from './strings.js';

// BEGIN (write your solution here)
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const sum = (num) => {
  var str = num;
  while (String(str).length != 1) {
    var numbers = []
    for (let i=0; i < String(str).length; i++) {
      numbers.push(parseInt(String(str)[i]))
    }
    str = numbers.reduce(reducer)
  }
  
  return str
}

export default function addDigits(num) {
  if (String(num).length === 1) {
    return num
  } 
  else {
    return sum(num);
  }
}
// END
