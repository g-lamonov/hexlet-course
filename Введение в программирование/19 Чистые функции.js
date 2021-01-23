/*
solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.
*/

// @ts-check

import { length, toUpperCase } from './strings.js';

// BEGIN (write your solution here)
export default function up(str) {
    var newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            newStr += toUpperCase(str[0]);
        } else {
            if (str[i - 1] === ' ') {
                newStr += toUpperCase(str[i])
            } else {
                newStr += str[i]
            }
        }
    }
    return newStr
}
// END