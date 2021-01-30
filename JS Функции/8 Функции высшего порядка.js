/*
users.js
Реализуйте функцию takeOldest(), которая принимает на вход список пользователей и возвращает самых взрослых. Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице. Экспортируйте данную функцию по умолчанию.
*/

// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
const takeOldest = (users, num = 1) => {
  let birthdays = (obj) => Date.parse(obj["birthday"]);
  return _.sortBy(users, birthdays).slice(0, num);
};

export default takeOldest;
// END

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

takeOldest(users);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];

// Another solution

// BEGIN
const takeOldest = (users, count = 1) => {
  const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  return sorted.slice(0, count);
};

export default takeOldest;
// END
