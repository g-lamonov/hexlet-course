/*
arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива кошелёк с деньгами и название валюты и возвращает сумму денег указанной валюты.

Реализуйте данную функцию используя управляющие инструкции.

Параметры функции:

Массив, содержащий купюры разных валют с различными номиналами
Наименование валюты
Примеры
*/

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable no-continue */

// BEGIN (write your solution here)

const getTotalAmount = (moneyArray, currency) => {
    if (moneyArray.length === 0) return 0;
    let money = 0;
    for (const item of moneyArray) {
        if (item.slice(0, 3) !== currency) continue;
        money += Number(item.slice(4));
    }
    return money;
};


export default getTotalAmount;
// END


const money1 = [
  'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
getTotalAmount(money1, 'usd') // 16

const money2 = [
  'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
];
getTotalAmount(money2, 'eur') // 135

const money3 = [
  'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
];
getTotalAmount(money3, 'rub') // 270
