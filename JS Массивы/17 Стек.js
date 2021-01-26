/*
strings.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной. Открывающие и закрывающие скобки должны быть одного вида. Пустая строка (отсутствие скобок) считается сбалансированной.
*/

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

// BEGIN (write your solution here)
const isBracketStructureBalanced = (str) => {
    const stack = [];
    for (const symbol of str) {
        if (openingSymbols.includes(symbol)) {
            stack.push(symbol);
        } else {
            const index = closingSymbols.indexOf(symbol);
            const pairSymbol = openingSymbols[index];
            if (stack.pop() !== pairSymbol) return false;
        }
    }
    return stack.length === 0;
};
export default isBracketStructureBalanced ;
// END

import isBracketStructureBalanced from './strings.js';

// Пример вложенности
isBracketStructureBalanced('(>');  // false
isBracketStructureBalanced('()');  // true
isBracketStructureBalanced('[()]');  // true
isBracketStructureBalanced('{<>}}'); // false
