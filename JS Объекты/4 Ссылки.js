/*
objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам. Эта функция принимает на вход две компании и возвращает true, если их структура одинаковая, и false в обратном случае. Проверка должна проходить по свойствам name, state, website.
*/

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const is = (firstObj, secondObj) => {
  return (firstObj.name === secondObj.name &&
    firstObj.state === secondObj.state &&
    firstObj.website === secondObj.website) ? true : false;
};
export default is;
// END


import is from './company.js';

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
is(company1, company2); // false

const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
is(company1, company2); // true


// A more correct solution

// BEGIN
export default (company1, company2) => {
  const keys = ['name', 'state', 'website'];
  for (const key of keys) {
    if (company1[key] !== company2[key]) {
      return false;
    }
  }

  return true;
};
// END
