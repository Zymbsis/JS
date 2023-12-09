// Константа Ціна 100
// Аргументи функції
// isAlcohol (може мати такую значення beer wine grocery vegetables meat milk bread snacks)
// hasPassport (може мати три значения yes student no)
// age
// quantity
// Є два типи товарів: алкоголь та інші товари
// При оплаті товару на касі виконуються такі перевірки
// Якщо алкоголь - попросити документ з віком.
// Якщо не алкоголь - суму до сплати і усе інше не виконується.
// Якщо алкоголь і є паспорт перевіряється вік
// Якщо вік більше 18 - сума до сплати
// Якщо менше - повідомлення «ми не продаємо алкоголь неповнолітнім»
// Якщо алкоголь і немає паспорту або студентське посвідчення - повідомлення «необхідно саме паспорт» і усе інше не виконується
// const price = 100;
// function sellAlcohol(isAlcohol, hasPassport, age, quantity) {
//   let amountPay = quantity * price;
//   if (isAlcohol !== 'beer' && isAlcohol !== 'wine') {
//     return `Amount to be payed is ${amountPay}`;
//   } else if (hasPassport != 'yes') {
//     return `A passport is required`;
//   } else if (age < 18) {
//     return `We do not sell alcohol to minors`;
//   } else {
//     return `Amount to be payed is ${amountPay}`;
//   }
// }
// sellAlcohol('wine', 'no', 15, 20);
// console.log(sellAlcohol('wine', 'no', 15, 20));

// Якщо число меньше нуля - підвести до Кубу і вивести значення
// Якщо нуль - то рядок шо каже «число = 0»
// Якщо більше нуля - квадратний корінь від числа з трьома знаками після коми

function changeNumber(random) {
  if (random < 0) {
    return Math.pow(random, 3);
  } else if (random === 0) {
    return `Number = 0`;
  } else {
    return parseFloat(Math.sqrt(random).toFixed(3));
  }
}
console.log(changeNumber(55));

// Функція createArrayOfNumbers(min, max) приймає два параметра:
// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.
function createArrayOfNumbers(min, max) {
  let myArray = [];
  for (let i = min; i <= max; i++) {
    myArray.push(i);
  }
  return myArray;
}
console.log(createArrayOfNumbers(18, 25)); // [18, 19, 20, 21, 22, 23, 24, 25]

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.
function calculateTotalPrice(order) {
  let totalOrder = 0;
  for (let i = 0; i < order.length; i++) {
    totalOrder += order[i];
  }
  return totalOrder;
}
let order = [1, 2, 3];
console.log(calculateTotalPrice(order));

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.
// function getEvenNumbers(start, end) {
//   let evenNumbersArr = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbersArr.push(i);
//     }
//   }
//   return evenNumbersArr;
// }

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

function checkStorage(storage, item) {
  if (storage.includes(item.toLowerCase())) {
    return `${item.toLowerCase()} is available to order!`;
  } else {
    return `Sorry! We are out of stock!`;
  }
}
let storage = ['apple', 'cherry', 'banana', 'pear', 'watermelon'];
let item = 'APPLE';
console.log(checkStorage(storage, item));

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.
// Доповни код функції:
// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.
// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив

function getCommonElements(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = [1, 3, 5, 7, 9];
console.log(getCommonElements(array1, array2));

// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.
function calculateTotalPrice(order) {
  let totalOrder = 0;
  for (let element of order) {
    totalOrder += element;
  }
  return totalOrder;
}

// Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

function createReversedArray() {
  let createReversedArray = 0;
  createReversedArray = Array.from(arguments);
  return createReversedArray.toReversed();
}
