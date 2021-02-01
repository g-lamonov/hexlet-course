/*
tests/cart.test.js
Напишите тесты для корзины интернет-магазина. Интерфейс:

makeCart – создает новую корзину (объект).
addItem(good, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
getItems – возвращает товары в формате [{ good, count }, { good, count }, ...]
getCost – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учетом их количества.
getCount – возвращает количество товаров в корзине

const cart = makeCart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length; // 2
cart.getCost(); // 35
cart.addItem({ name: 'house', price: 10 }, 1);
cart.getItems().length; // 3
cart.getCost(); // 45
*/

const makeCart = getImpelementation();

// BEGIN (write your solution here)
test("cart", () => {
  const cart = makeCart();
  // Работа с пустой корзиной
  expect(cart.getItems().length).toEqual(0);
  expect(cart.getCount()).toEqual(0);
  expect(cart.getCost()).toEqual(0);
  // Работа с одним предметом в корзине
  cart.addItem({ name: "bear", price: 3 }, 2);
  expect(cart.getItems().length).toEqual(1);
  expect(cart.getCount()).toEqual(2);
  expect(cart.getCost()).toEqual(6);
  // Работа с множеством предметов в корзине
  cart.addItem({ name: "bunny", price: 1 }, 7);
  expect(cart.getItems().length).toEqual(2);
  expect(cart.getCount()).toEqual(9);
  expect(cart.getCost()).toEqual(13);
});
// END
