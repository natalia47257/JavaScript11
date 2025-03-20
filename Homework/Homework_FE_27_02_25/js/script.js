// Задача 1. 1 уровень сложности: 1. Легкая Задача Напишите функцию introduce, которая выводит в консоль строку: "Привет, меня зовут [имя]!" Функция должна использовать this.firstname. Затем создайте два объекта с полем firstname Используя метод call, вызовите функцию introduce для каждого объекта, чтобы в консоли отобразились правильные приветствия.

// Метод call() позволяет вызывать функцию с явным указанием this. Это позволяет использовать одну и ту же функцию для разных обьектов

// 1. Cоздание функции introduce()
// this.firstname означает, что обьект, который будет передан в метод call() имеет свойство firstname
function introduce() {
  console.log(` Привет, меня зовут ${this.firstname}!`);
}
// 2. Cоздадим два обьекта с полем firstname
const person1 = { firstname: "Maria" };
const person2 = { firstname: "Bob" };
// 3. Используем метод call, чтобы вызвать функцию introduce с разными объектами:
introduce.call(person1); //  Привет, меня зовут Maria!
introduce.call(person2); //  Привет, меня зовут Bob!

// Задача 2. Создайте функцию sumThreeNumbers, которая принимает три числа и возвращает их сумму. Затем создайте массив из трёх чисел, например [2, 4, 6]. Используйте метод apply, чтобы передать элементы массива в функцию как аргументы и вычислить сумму с помощью apply.

// Метод apply() позволяет вызывать функцию, передавая аргументы в виде массива.
// 1. Создаем функцию sumThreeNumbers, которая принимает три числа и возвращает их сумму:
function sumThreeNumbers(a, b, c) {
  return a + b + c;
}
// 2. Создаем массив чисел
const numbers = [4, 7, 9];
// 3. Использоавание метода apply() для передачи массива в функцию
const result = sumThreeNumbers.apply(null, numbers);
console.log(result); // 20
// Первый аргумент метода apply() - это this, но так как функция sumThreeNumbers не использует this, можно передать null
// Второй аргумент - это массив [4, 7, 9], который метод apply() разворачивает в аргументы a, b, c


// Задача 3. Сложная Задача
// Реализуйте функцию calculateFinalPrice(extraDiscount, basePrice, tax, productTitle),
// extraDiscount — дополнительная скидка в процентах;
// basePrice — базовая цена продукта;
// tax — налог на продукт;
// productTitle — название продукта.
// Функция вычисляет окончательную цену продукта по формуле:
// finalPrice = (basePrice + tax) * (1 - (this.discountRate + extraDiscount) / 100);
// discountRate — персональная скидка клиента в процентах;
// fullname — полное имя клиента.
// Функция должна выводить в консоль сообщение:
// Окончательная цена продукта ${productTitle} для пользователя ${this.fullname}: ${finalPrice}.

// Создайте два объекта клиентов:
// Объект customerA со свойствами:
//      discountRate: 5 (5% персональной скидки);
//      fullname: "Alice".
// Объект customerB со свойствами:
//      discountRate: 10 (10% персональной скидки);
//      fullname: "Bob".

// Создайте две привязанные функции с помощью метода bind.
// Функцию customerACalculateFinalPrice, которая привязана к объекту customerA и имеет предустановленную дополнительную скидку extraDiscount = 5.
// Функцию customerBCalculateFinalPrice, которая привязана к объекту customerB и имеет предустановленную дополнительную скидку extraDiscount = 10.

// Примените эти функции к массиву products, содержащему объекты:
// [
//   { title: "Телефон", basePrice: 1000, tax: 100 },
//   { title: "Ноутбук", basePrice: 2000, tax: 200 },
//   { title: "Планшет", basePrice: 500, tax: 50 }
// ]
// Для каждого продукта должны быть вызваны обе функции (для customerA и customerB), выводя результаты в консоль.
// Окончательная цена продукта Телефон для пользователя Alice: 990
// Окончательная цена продукта Телефон для пользователя Bob: 880
// … (аналогично для других продуктов)

// Метод bind() позволяет создать новую функцию с заранее заданным this и частичнно переданными аргументами. Здесь используется, чтобы привязать функцию расчета цены к каждому клиенту с персональной дополнительной скидкой.
// 1. Создаем функцию calculateFinalPrice, которая вычисляет окончательную цену товара с учетом персональной и дополнительной скидок.
function calculateFinalPrice(extraDiscount, basePrice, tax, productTitle) {
  const finalPrice = (basePrice + tax) * (1 - (this.discountRate + extraDiscount) / 100);
  console.log(`Окончательная цена продукта ${productTitle} для пользователя ${this.fullname}: ${finalPrice}.`);
}
// 2. Создаем обьекты клиентов
const customerA = { discountRate: 5, fullname: "Alice" };
const customerB = { discountRate: 10, fullname: "Bob" };
// 3. Привязываем функция calculateFinalPrice к клиентам с персональной дополнительной скидкой
const customerACalculateFinalPrice = calculateFinalPrice.bind(customerA, 5);
const customerBCalculateFinalPrice = calculateFinalPrice.bind(customerB, 10);
// 4. Массив товаров
const products = [
  { title: "Телефон", basePrice: 1000, tax: 100 },
  { title: "Ноутбук", basePrice: 2000, tax: 200 },
  { title: "Планшет", basePrice: 500, tax: 50 }
]
// 5. Применяем функции к каждому товару
for (let i = 0; i < products.length; i++) {
  let product = products[i];

customerACalculateFinalPrice(product.basePrice, product.tax, product.title);

customerBCalculateFinalPrice(product.basePrice, product.tax, product.title)
};

// 6. Вывод в консоль
// Окончательная цена продукта Телефон для пользователя Alice: 990.
// Окончательная цена продукта Телефон для пользователя Bob: 880.
// Окончательная цена продукта Ноутбук для пользователя Alice: 1980.
// Окончательная цена продукта Ноутбук для пользователя Bob: 1760.
// Окончательная цена продукта Планшет для пользователя Alice: 495.
// Окончательная цена продукта Планшет для пользователя Bob: 440.

