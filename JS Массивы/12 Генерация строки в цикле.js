/*
strings.js
Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.
*/

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const buildDefinitionList = (arr) => {
  if (arr.length === 0) return '';
  const parts = [];
  for (const item of arr) {
    parts.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`);
  }
  const innerValue = parts.join('');
  const result = `<dl>${innerValue}</dl>`;
  return result;
};
export default buildDefinitionList;
// END

const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];

buildDefinitionList(definitions);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
