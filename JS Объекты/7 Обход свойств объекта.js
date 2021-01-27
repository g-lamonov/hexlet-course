/*
objects.js
Реализуйте и экспортируйте функцию по умолчанию, которая формирует из переданного объекта другой объект, включающий только указанные свойства. Параметры:

Исходный объект
Массив имен свойств
*/

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
const pick = (obj, items) => {
  const result = {};
  const entries = Object.entries(obj);
  for (const item of items) {
    for (const [key, value] of entries) {
      if (key === item) result[key] = value;
    }
  }
  return result;
};

export default pick;
// END

import pick from './objects.js';

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

pick(data, ['user']); // { user: 'ubuntu' }
pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
pick(data, []); // {}
// Если такого свойства нет в исходных данных,
// то оно игнорируется
pick(data, ['none', 'cores']); // { cores: 4 }


//Solution using lodash

// BEGIN
export default (data, keys) => {
  const result = {};

  for (const key of keys) {
    if (_.has(data, key)) {
      result[key] = data[key];
    }
  }

  return result;
};
// END
