/*
domain.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя сайта и возвращает информацию о нем:
*/

// @ts-check

// BEGIN (write your solution here)
const getDomainInfo = (website) => {
  const info = {};
  const http = website.startsWith('http');
  if (http) {
    const parts = website.split('/');
    const https = website.split(':');
    info.scheme = https[0];
    info.name = parts[parts.length - 1];
  } else if (!http) {
    info.scheme = 'http';
    info.name = website;
  }
  return info;
};
export default getDomainInfo;
// END

import getDomainInfo from './domain.js';

// Если домен передан без указания протокола,
// то по умолчанию берется http
getDomainInfo('yandex.ru')
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }

getDomainInfo('https://hexlet.io');
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }

getDomainInfo('http://google.com');
// {
//   scheme: 'http',
//   name: 'google.com',
// }


// another solution

// BEGIN
export default (domain) => {
  let scheme = '';
  if (domain.startsWith('https://')) {
    scheme = 'https';
  // else if другие протоколы
  } else {
    scheme = 'http';
  }

  const name = domain.replace(`${scheme}://`, '');

  return { scheme, name };
};
// END
