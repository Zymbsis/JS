//! ===============  map() & flatMap()  ===============
//   map()
// - Поелементно перебирає оригінальний масив;
// - Не змінює оригінальний масив;
// - Результат роботи колбек - функції записується в новий масив;
// - Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований.

// Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках, коли результат — це багатовимірний масив, який необхідно «розгладити».

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((item) => item * 2);
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(newArr); // [2, 4, 6, 8, 10]

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];
// console.log(students.map((item) => item.name)); // ['Mango', 'Poly', 'Ajax', 'Kiwi', 'Houston']
// console.log(students.map((item) => item.score)); //[83, 59, 37, 94, 64]

// const students2 = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Poly', courses: ['science', 'mathematics'] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];
// console.log(students2.map((item) => item.name)); // ['Mango', 'Poly', 'Kiwi']
// console.log(students2.map((item) => item.courses)); // [Array(2), Array(2), Array(2)] => [['mathematics', 'physics'], ['science', 'mathematics'], ['physics', 'biology']]
// console.log(students2.flatMap((item) => item.courses)); // ['mathematics', 'physics', 'science', 'mathematics', 'physics', 'biology']

//! ===============  filter() & find()  ===============
// Метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову.
// Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання масиву припиняється. Тобто він, на відміну від методу filter(callback), шукає до першого збігу.
//   filter()
// - Не змінює оригінальний масив;
// - Поелементно перебирає оригінальний масив;
// - Повертає новий масив;
// - Додає в масив, що повертається, елементи, які задовольняють умову колбек-функції;
// - Якщо колбек повернув true, елемент додається в масив, що повертається;
// - Якщо колбек повернув false, елемент не додається в масив, що повертається;
// - Якщо жоден елемент не задовольнив умову, повертає порожній масив.
//   find()
// - Не змінює оригінальний масив;
// - Поелементно перебирає оригінальний масив;
// - Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true;
// - Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.

// const values = [51, -3, 27, 21, -68, 42, -37];
// const newValuesPositive = values.filter((item) => item > 0);
// const newValuesNegative = values.filter((item) => item < 0);
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// console.log(newValuesPositive); // [51, 27, 21, 42]
// console.log(newValuesNegative); // [-3, -68, -37]

// const lowScore = 50;
// const highScore = 80;
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];
// console.log(
//   students.filter((item) => item.score > lowScore && item.score < highScore),
// ); // [{…}, {…}] => [{ name: 'Poly', score: 59 }, { name: 'Houston', score: 64 }]
// console.log(students.filter((item) => item.score > highScore)); //[{…}, {…}] => [{ name: 'Mango', score: 83 }, { name: 'Kiwi', score: 94 }]
// console.log(students.filter((item) => item.score < lowScore)); // [{…}] => [{ name: 'Ajax', score: 37 }]

// const newStudents = students.filter((item) => item.score > highScore);
// console.log(newStudents.map((item) => item.name)); // ['Mango', 'Kiwi']

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
// console.log(colorPickerOptions.find((item) => item.label === 'blue')); // {label: 'blue', color: '#2196F3'}
// console.log(colorPickerOptions.find((item) => item.color === '#3F51B5')); // {label: 'indigo', color: '#3F51B5'}

// const sasha = ['Кицюнька'];
// const lyosha = ['Серденько'];

// const infiniteLove = (sasha, lyosha) =>
//   `${sasha[0]} + ${lyosha[0]} = ${String.fromCodePoint(0x1f496)}`;
// console.log(infiniteLove(sasha, lyosha));
