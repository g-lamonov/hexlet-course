/*
reference.js
Сделайте так, чтобы код внутри функции reference() порождал ошибку типа ReferenceError.

Вспомните, что ReferenceError возникает, когда используется несуществующий идентификатор (имя). Например, если ваша функция возвращает значение константы, но такой константы не существует. Или в каком-нибудь выражении (фрагмент кода, который вычисляется в значение, как формула) используется неизвестный идентификатор.

type.js
Сделайте так, чтобы код внутри функции type() порождал ошибку типа TypeError.

Вспомните, что TypeError возникает, когда вы используете неправильный тип. Например, если вы пытаетесь вызвать численную константу как функцию.

ВАЖНО
Ошибки должны генерироваться внутри функций reference() и type().
*/

//reference.js

// @ts-check

const reference = () => {
  // BEGIN (write your solution here)
  const value = otherValue + 3;
  return value;
  // END
};

export default reference;


//type.js

// @ts-check

const type = () => {
  // BEGIN (write your solution here)
  const value = 3;
  return value(5) + 2;
  // END
};



export default type;
