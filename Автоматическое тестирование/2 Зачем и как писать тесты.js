/*
tests/collection.test.js
Напишите тесты для функции get(obj, key, defaultValue). Эта функция извлекает значение из объекта при условии, что ключ существует. В ином случае возвращается defaultValue.

get({ hello: 'world' }, 'hello'); // world
get({ hello: 'world' }, 'hello', 'kitty'); // 'world'
get({}, 'hello', 'kitty'); // 'kitty'
*/

// @ts-check
import getFunction from '../functions.js';

const get = getFunction();

// BEGIN (write your solution here)
if (get({ hello: "world" }, "hello") !== "world") {
  throw new Error("Функция не возвращает нужное значение по существующему ключу");
}

if (get({ hello: "world" }, "hello", "kitty") === "kitty") {
  throw new Error("Функция возвращает значение ключа, даже если есть значение по умолчанию");
}

if (get({}, "hello", "kitty") !== "kitty") {
  throw new Error("Функция возвращает значение по умолчанию, даже если нет ключа");
}

// END
