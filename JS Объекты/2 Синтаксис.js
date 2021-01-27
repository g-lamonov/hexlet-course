/*
objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая возвращает ассоциативный массив, соответствующий JSON из файла example.json в этом упражнении. Всё, что вам нужно сделать — посмотреть на содержимое example.json и руками сформировать объект аналогичной структуры.

Подсказки
Обратите внимание на сходство JSON и объекта. Оно не случайно. JSON является представлением объекта в текстовом виде.
*/

// @ts-check

// BEGIN (write your solution here)

const example = () => {
  const obj = {
    files: [
      "src/objects.js"
    ],
    config: true
  };
  return obj
};

export default example;
// END


// another solution

// BEGIN
export default () => {
  const obj = {
    files: ['src/objects.js'],
    config: true,
  };
  return obj;
};
// END
