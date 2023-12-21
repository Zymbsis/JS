// function sortStr(someString) {
//   let newString = someString.split('').sort().join('');
//   return newString;
// }

// let someString = 'asdfbcrgtewrqwexcvfghdrg';
// console.log(sortStr(someString));

//TODO: 3 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
//інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt('Введіть свій логін');
// if (loginInput) {
//   if (loginInput.toLowerCase() === 'admin') {
//     const password = prompt('Введіть свій пароль');
//     if (password) {
//       if (password === 'Я головний') {
//         alert('Добрий день!');
//       } else {
//         alert('Невірний пароль!');
//       }
//     } else {
//       alert('Скасовано');
//     }
//   } else {
//     alert('Я вас не знаю');
//   }
// } else {
//   alert('Я вас не знаю');
// }

// let number = prompt('Enter number bigger than 100');
// while (number <= 100) {
//   number = prompt('Enter number bigger than 100');
// }
// alert('Thank you');

// function fakeBin(x) {
//   x = x.split('');
//   let newArray = [];
//   for (const elements of x) {
//     if (elements >= 5) {
//       newArray.push('1');
//     } else {
//       newArray.push('0');
//     }
//   }
//   return newArray.join('');
// }
// console.log(fakeBin('123456789'));

// function fakeBin(x) {
//   x = x.split('');
//   let newArray = [];
//   for (let i = 0; i < x.length; i++) {
//     x[i] >= 5 ? newArray.push('1') : newArray.push('0');
//   }
//   return newArray.join('');
// }

// console.log(fakeBin('123456789'));

// function fakeBin(x) {
//   x = x.split('');
//   for (let i = 0; i < x.length; i++) {
//     // x[i] >= 5 ? (x[i] = '1') : (x[i] = '0');
//     x[i] = x[i] >= 5 ? 1 : 0;
//   }
//   return x.join('');
// }
// console.log(fakeBin('123456789'));

// function binaryArrayToNumber(arr) {
//   arr = arr.reverse();
//   let newArr = 0;
//   for (let i = arr.indexOf(1); i < arr.length && i !== -1; i++) {
//     newArr += arr[i] * 2 ** i;
//   }
//   return newArr;
// }
// console.log(binaryArrayToNumber([0, 0, 0, 0])); // 0
// console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
// console.log(binaryArrayToNumber([0, 1, 0, 1])); // 5
// console.log(binaryArrayToNumber([1, 0, 0, 1])); // 9
// console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6
// console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
// console.log(binaryArrayToNumber([1, 0, 1, 1])); // 11

// function summation(num) {
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(summation(5));

// function summation(num) {
//   let total = (num * (num + 1)) / 2;
//   return total;
// }
// console.log(summation(5));

// function summation(num) {
//   let total = 0;
//   for (let i = num; i > 0; i--) {
//     total += i;
//   }
//   return total;
// }

// console.log(summation(5));

// let str = 'is2 Thi1s T4est 3a';
// let newStr = str.split(' ');
// let newIndexArr = [];
// for (let i = 0; i < newStr.length; i++) {
//   let stringOfLetters = newStr[i].split('');
//   console.log(stringOfLetters);
//   for (let x = 0; x < stringOfLetters.length; x++) {
//     if (stringOfLetters[x] >= 0) {
//       let newIndex = +stringOfLetters[x];
//       console.log(newIndex);
//       newIndexArr.push(newIndex);
//       console.log(newIndexArr);
//     }
//   }
// }
// console.log(newStr);

// let hhh = '+234';

// if (parseInt(hhh) <= 0) {
//   console.log(hhh.length === 4 || hhh.length === 6);
// }

// function order(words) {
//   let newWords = words.split(' ');
//   let newArray = [];
//   console.log(newWords);
//   for (let i = 1; i <= 9; i++) {
//     for (let x = 0; x < newWords.length; x++) {
//       if (newWords[x].includes(i)) {
//         newArray.push(newWords[x]);
//       }
//     }
//   }
//   return newArray.join(' ');
// }
// let words = 'is2 Thi7s T9est 5a';
// console.log(order(words));

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   let totalOfPositives = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       totalOfPositives += arr[i];
//     }
//   }

//   return totalOfPositives;
// }
// const arr = [1, 5, -4, 7, 12];
// console.log(positiveSum(arr));

// function positiveSum(arr) {
//   let totalOfPositives = 0;
//   for (const number of arr) {
//     if (number > 0) {
//       totalOfPositives += number;
//     }
//   }
//   return totalOfPositives;
// }
// const arr = [1, 5, -4, 7, 12];
// console.log(positiveSum(arr));

// function positiveSum(arr) {
//   let totalOfPositives = 0;
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] > 0) {
//       totalOfPositives += arr[i];
//     }
//     i++;
//   }
//   return totalOfPositives;
// }
// const arr = [1, 5, -4, 7, 12];
// console.log(positiveSum(arr));

// function findUniq(arr) {
//   for (const number of arr) {
//     if (arr.indexOf(number) === arr.lastIndexOf(number)) {
//       return number;
//     }
//   }
// }
// console.log(findUniq([1, 1, 1, 5, 1, 1]));

// function findUniq(arr) {
//   let number = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//       number.push(arr[i]);
//     }
//   }
//   return parseFloat(number);
// }
// console.log(findUniq([5, 1, 2, 1, 2]));

// function findUniq(arr) {
//   let number = [];
//   let i = 0;
//   while (i < arr.length) {
//     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//       number.push(arr[i]);
//     }
//     i++;
//   }
//   return parseFloat(number);
// }
// console.log(findUniq([3, 3, 5, 1, 1]));

// function findUniq(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//       return arr[i];
//     }
//   }
// }
// console.log(findUniq([5, 1, 2, 1, 2]));

// Працює лише для непарної кількості елементів в масиві/
// function findUniq(arr) {
//   let uniqNumber = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (uniqNumber[arr[i]]) {
//       delete uniqNumber[arr[i]];
//     } else {
//       uniqNumber[arr[i]] = true;
//     }
//   }
//   let number = Object.keys(uniqNumber);
//   return number.length === 1 ? parseInt(number[0]) : undefined;
// }

// console.log(findUniq([3, 3, 10, 3, 3, 3, 3]));
// function sumArray(array) {
//   array = array.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(array);
//   array = array.slice(1, -1);
//   console.log(array);

//   let total = 0;

//   for (let i = 0; i < array.length; i++) {
//     total = total + array[i];
//   }
//   console.log(total);

//   return total;
// }
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   if (book.author === 'Robert Sheckley') {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }
// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const each of products) {
//     if (each.name === productName) {
//       return each.price;
//     }
//   }
//   // return null;
// }
// console.log(getProductPrice('Engine'));
// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   let arr = [];
//   for (const item of products) {
//     if (propName === 'name') {
//       arr.push(item.name);
//     } else if (propName === 'price') {
//       arr.push(item.price);
//     } else if (propName === 'quantity') {
//       arr.push(item.quantity);
//     }
//   }
//   return arr;
// }

// function stray(numbers) {
//   let number = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
//       number.push(numbers[i]);
//     }
//   }
//   return parseInt(number);
// }

// let humanYearsCatYearsDogYears = function (humanYears) {
//   let arr;
//   if (humanYears === 1) {
//     arr = [1, 15, 15];
//     return arr;
//   } else if (humanYears === 2) {
//     return (arr = [2, 24, 24]);
//   } else {
//     return (arr = [
//       humanYears,
//       (humanYears - 2) * 4 + 24,
//       (humanYears - 2) * 5 + 24,
//     ]);
//   }
// };
// console.log(humanYearsCatYearsDogYears(5));

// let humanYearsCatYearsDogYears = function (humanYears) {
//   return humanYears === 1
//     ? [1, 15, 15]
//     : humanYears === 2
//     ? [2, 24, 24]
//     : [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
// };
// console.log(humanYearsCatYearsDogYears(8));

// let countSheep = function (num) {
//   console.log(arguments);
//   let cantSleepWithoutLyosha = '';
//   for (let i = 1; i <= num; i++) {
//     cantSleepWithoutLyosha += `${i} sheep...`;
//   }
//   return cantSleepWithoutLyosha;
// };
// console.log(countSheep(5));

// function getMiddle(s) {
//   console.log(arguments);

//   s = s.split('');

//   if (s.length % 2 === 0 && s.length > 2) {
//     return s.slice(s.length / 2 - 1, s.length / 2 + 1).join('');
//   } else if (s.length % 2 !== 0 && s.length > 2) {
//     return s
//       .slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1)
//       .join('');
//   }
// }

// console.log(getMiddle('tetetetete', 'rrr', 55));

// function addOverNum(value, ...args) {
//   console.log(...args);
//   console.log(args);

//   let total = 0;
//   for (const item of args) {
//     if (item > value) {
//       total += item;
//     }
//   }
//   return total;
// }
// console.log(addOverNum(15, 32, 6, 13, 19, 8));

// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals, ...rest) {
//   console.log(rest);
//   return {
//     1: rest.reduce((a, b) => a + b),
//     2: laLigaGoals + copaDelReyGoals + championsLeagueGoals,
//   };
// }
// console.log(goals(43, 10, 5, 15, 25, 78, 4, 6, 13));
// function getExtremeScores(scores) {
//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getAllPropValues());

// const nameEmployee = ['Ann', 'Katrine', 'Sofia', 'Pol', 'Rob', 'Alfred'];
// const newListEmployee = nameEmployee.map((item) => item[0]);
// console.log(newListEmployee);

// function match(candidate, job) {
//   if (Object.keys(candidate).length > 0 && Object.keys(job).length > 0) {
//     return (
//       parseInt(Object.values(job)) >= parseInt(Object.values(candidate)) * 0.9
//     );
//   } else {
//     try {
//       throw new Error('Error: One or both objects are empty');
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
// }

// console.log(match({ minSalary: 120000 }, { maxSalary: 130000 }));
// const surname = {
//   A: 'Analogue',
//   B: 'Bomb',
//   C: 'Catalyst',
//   D: 'Discharge',
//   E: 'Electron',
//   F: 'Faraday',
//   G: 'Gig',
//   H: 'Hacker',
//   I: 'IP',
//   J: 'Jabber',
//   K: 'Killer',
//   L: 'Lazer',
//   M: 'Mike',
//   N: 'n00b',
//   O: 'Overclock',
//   P: 'Payload',
//   Q: 'Quark',
//   R: 'Roy',
//   S: 'Spy',
//   T: 'T-Rex',
//   U: 'Unit',
//   V: 'Virus',
//   W: 'Worm',
//   X: 'X',
//   Y: 'Yob',
//   Z: 'Zombie',
// };
// console.log(Object.entries(surname)[0]);

// function arithmetic(a, b, operator) {
//   switch (operator) {
//     case 'add':
//       return a + b;
//     case 'subtract':
//       return a - b;
//     case 'multiply':
//       return a * b;
//     case 'divide':
//       return a / b;
//   }
// }
// console.log(arithmetic(1, 2, 'add'));
// console.log(arithmetic(1, 2, 'subtract'));
// console.log(arithmetic(1, 2, 'multiply'));
// console.log(arithmetic(1, 2, 'divide'));

// function arithmetic(a, b, operator) {
//   return operator === 'add'
//     ? a + b
//     : operator === 'subtract'
//     ? a - b
//     : operator === 'multiply'
//     ? a * b
//     : operator === 'divide'
//     ? 1 / 2
//     : 'operator not found';
// }
// console.log(arithmetic(1, 2, 'add'));
// console.log(arithmetic(1, 2, 'subtract'));
// console.log(arithmetic(1, 2, 'multiply'));
// console.log(arithmetic(1, 2, 'divide'));

// function arithmetic(a, b, operator) {
//   const newObj = {
//     add: a + b,
//     subtract: a - b,
//     multiply: a * b,
//     divide: a / b,
//   };
//   return newObj[operator];
// }
// console.log(arithmetic(1, 2, 'add'));
// console.log(arithmetic(1, 2, 'subtract'));
// console.log(arithmetic(1, 2, 'multiply'));
// console.log(arithmetic(1, 2, 'divide'));
// const myName = 'Sasha';
// function greet(myName) {
//   console.log(`Welcome ${myName}!`);
// }
// console.log(greet(myName));
// console.log(greet);

// const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArrOfNum = arrOfNum.map((item) => item ** 2);
// console.log(newArrOfNum);
// console.log(arrOfNum);

// let arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arrOfNum = arrOfNum.map((item) => item ** 2);
// console.log(newArrOfNum);
// console.log(arrOfNum);

// let str = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// str = str.map((item) => item + item);
// console.log(str);

// let newStr = str.map((item) => item.length);
// console.log(newStr);
// newStr = newStr.map((item) => item * 2);
// console.log(newStr);
// let str = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// str = str.map((item, index) =>
//   index % 2 === 0 ? item.toUpperCase() : item.toLowerCase(),
// );
// console.log(str);

// let str = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// str = str.map(function (item, index) {
//   if (index % 2 === 0) {
//     return item.toUpperCase();
//   } else {
//     return item.toLowerCase();
//   }
// });
// console.log(str);

// const cart = {
//   product1: 10,
//   product2: 100,
//   product3: 1000,
//   calculateTotal() {
//     let total = 0;

//     for (const item of Object.values(this)) {
//       total += !isNaN(item) ? item : 0;
//     }
//     return total;
//   },
// };
// console.log(cart.calculateTotal());
// // console.log(Object.values(cart));

// function flickSwitch(arr) {
//   // const indexFlick = arr.indexOf('flick');
//   const newArr = arr.map(
//     (item, index) => (item = item === 'flick' ? !Boolean(item) : Boolean(item)),
//   );
//   return newArr;
// }
// console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])); // true, true, false, false, true
// let symbol = '';

// const startCode = 0x0000;
// const endCode = 0xffff;

// for (let i = startCode; i <= endCode; i++) {
//   const STRANGE_STRING = String.fromCharCode(i);

//   if (
//     STRANGE_STRING.toUpperCase().toLowerCase().length > STRANGE_STRING.length
//   ) {
//     console.log(STRANGE_STRING);
//     break;
//   }
// }
// function quadrant(x, y) {
//   if (x > 0) {
//     return y > 0 ? 1 : 4;
//   } else {
//     return y > 0 ? 2 : 3;
//   }
// }
// console.log(quadrant(1, 2)); // 1
// console.log(quadrant(3, 5)); // 1
// console.log(quadrant(-10, 100)); // 2
// console.log(quadrant(-1, -9)); // 3
// console.log(quadrant(19, -56)); // 4

// function countPositivesSumNegatives(input) {
//   if (input.length === 0) {
//     return `[]`;
//   }
//   return input.reduce((acc, item) => (item < 0 ? acc + item : 0));
// }
// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ]),
// );

// function countPositivesSumNegatives(input) {
//   if (input === null || input.length === 0) {
//     return [];
//   }
//   let arrPositive = [];
//   let arrNegative = [];
//   for (const item of input) {
//     item > 0 ? arrPositive.push(item) : arrNegative.push(item);

//   }
//   console.log(arrPositive, arrNegative);

//   return [arrPositive.length, arrNegative.reduce((acc, item) => acc + item)];
// }
// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) {
//     return [];
//   }

//   const arrPositive = input.filter((item) => item > 0);
//   const sumNegative = input.reduce(
//     (acc, item) => (item < 0 ? acc + item : acc),
//     0,
//   );

//   return [arrPositive.length, sumNegative];
// }

// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) {
//     return [];
//   }
//   const positives = input.filter((item) => item > 0);
//   const negatives = input.filter((item) => item < 0);
//   return [positives.length, negatives.reduce((a, b) => a + b)];
// }
// console.log(
//   countPositivesSumNegatives([
//     0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
//   ]),
// );
// function neutralize(s1, s2) {
//   let newS = '';
//   for (let i = 0; i < s1.length; i++) {
//     newS += s1[i].localeCompare(s2[i]) === 0 ? s1[i] : '0';
//   }
//   return newS;
// }
// console.log(neutralize('-+-+-+', '-+-+-+'));
// function sameCase(a, b) {
//   console.log(a.charCodeAt());
//   if (
//     ((a.charCodeAt() >= 65 && a.charCodeAt() <= 90) ||
//       (a.charCodeAt() >= 97 && a.charCodeAt() <= 122)) &&
//     ((b.charCodeAt() >= 65 && b.charCodeAt() <= 90) ||
//       (b.charCodeAt() >= 97 && b.charCodeAt() <= 122))
//   ) {
//     if (a.toLowerCase() === a && b.toLowerCase() === b) {
//       return 1;
//     } else if (a.toUpperCase() === a && b.toUpperCase() === b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   } else return -1;
// }

// function sameCase(a, b) {
//   if (
//     a.toUpperCase() === a.toLowerCase() ||
//     b.toLowerCase() === b.toUpperCase()
//   ) {
//     return -1;
//   } else if (
//     (a === a.toLowerCase() && b === b.toLowerCase()) ||
//     (a === a.toUpperCase() && b === b.toUpperCase())
//   ) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// console.log(sameCase('5', '6'));
// //65 90 98 122

// const quarterOf = (month) => {
//   switch (month) {
//     case 1:
//     case 2:
//     case 3:
//       return 1;
//     case 4:
//     case 5:
//     case 6:
//       return 2;
//     case 7:
//     case 8:
//     case 9:
//       return 3;
//     default:
//       return 4;
//   }
// };
// console.log(quarterOf(4));

// function warnTheSheep(queue) {
//   const index = queue.toReversed().indexOf('wolf');
//   return index > 0
//     ? `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
//     : `Pls go away and stop eating my sheep`;
// }

// console.log(warnTheSheep(['sheep', 'wolf', 'sheep']));

// function points(games) {
//   const newGames = games.map((a) => {
//     if (a[0] > a[2]) {
//       return 3;
//     } else if (a[0] < a[2]) {
//       return 0;
//     } else {
//       return 1;
//     }
//   });
//   return newGames.reduce((a, b) => a + b);
// }
// console.log(
//   points([
//     '1:0',
//     '2:0',
//     '3:0',
//     '4:0',
//     '2:1',
//     '3:1',
//     '4:1',
//     '3:2',
//     '4:2',
//     '4:3',
//   ]),
// );
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   if (dadYearsOld > sonYearsOld * 2) {
//     return dadYearsOld - sonYearsOld * 2;
//   } else {
//     return sonYearsOld - (dadYearsOld % sonYearsOld);
//   }
// }
// console.log(twiceAsOld(55, 30));
// const arr = ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'];
// console.log(arr.jo);
// const students = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Poly', courses: ['science', 'mathematics'] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];
// console.log(students.map((item) => item.name));
// console.log(students.map((item) => item.courses));
// console.log(students.flatMap((item) => item.courses));

// const getUsersWithEyeColor = (users, color) => {
//   const eyeColorObj = users.filter((item) => item.eyeColor === color);
//   return eyeColorObj.map((item) => item.name);
// };
// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//       },
//     ],
//     'green',
//   ),
// );
// var number = function (array) {
//   return array.map((item, index) => `${index + 1}: ${item}`);
// };
// console.log(number(['a', 'b', 'c']));
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];
// console.log(students.reduce((a, b) => a + b.score, 0));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((item) => item.rating > 8)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map((item) => item.author);
// // console.log(books);
// // console.table(books);
// // console.dir(books);
// console.log(books);
// const fakeBin = (x) =>
//   x
//     .split('')
//     .map((item) => (item < 5 ? 0 : 1))
//     .join('');
// console.log(fakeBin('45385593107843568'));

// function sort(arr) {
//   return arr.toSorted((a, b) => a - b);
// }
// console.log(sort([111, 56, 31]));

// function minMax(a, b) {
//   return [Math.min(...a) ** b, Math.max(...a) ** b];
// }

// console.log(minMax(sort([17, 12, 14, 9, 6]), 4));

// function blaBlaBla(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   const resultOfB = b[1] - b[0];
//   console.log(resultOfB);
//   return a.map((item) => parseInt((item * resultOfB) / c));
// }
// console.log(
//   blaBlaBla(sort([2, 3, 4, 5, 6]), minMax(sort([2, 3, 4, 5, 6]), 5), 10),
// );
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case '+':
//       return value1 + value2;
//     case '-':
//       return value1 - value2;
//     case '*':
//       return value1 * value2;

//     default:
//       return value1 / value2;
//   }
// }
// console.log(basicOp('+', 4, 7)); // 11
// console.log(basicOp('-', 15, 18)); // 3
// console.log(basicOp('*', 5, 5)); // 25
// console.log(basicOp('/', 49, 7)); // 7
// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest('Mango', function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest('Poly', function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });
// function getCount(str) {
//   const newStr = str
//     .split('')
//     .filter((item) =>
//       item === 'a'
//         ? item
//         : item === 'e'
//         ? item
//         : item === 'i'
//         ? item
//         : item === 'o'
//         ? item
//         : item === 'u'
//         ? item
//         : 0,
//     );

//   return newStr;
// }
// console.log(getCount('abracadabra'));

// const reg = /hello/i;
// const greet = 'hello world!';
// console.log(reg);
// console.log(greet);
// greet = greet.exes(reg);
// const getCount = (str) =>
//   // /[aeiou]/.test(str) ? str.match(/[aeiou]/g).length : 0;
//   str.match(/[a|i|e|o|u]/g) ? str.match(/a|i|e|o|u/g).length : 0;

// console.log(getCount('abracadabra'));

// const str = [':-)', ';~D', ':-D', ':_D'];
// // const countSmileys = (arr) =>
// //   /[()]/.test(arr.join('')) ? arr.join('').match(/[()]/g).length : 0;

// const countSmileys = (arr) =>
//   // /[)D]/.test(arr.join('')) ? arr.join('').match(/[)D]/g).length : 0;
//   console.log(countSmileys(str));
// function stringClean(s) {
//   return s.replace(/[0-9]/g, '');
// }
// console.log(stringClean('Dsa32 cdsc34232 csa!!! 1I 4Am cool!'));
// function flickSwitch(arr) {}
// console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));

// function lowercaseCount(str) {
//   return str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0;
// }
// console.log(lowercaseCount(''));

// function flickSwitch(arr) {

// }
// console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));
// const str = [
//   'flick',
//   'bicycle',
//   'jarmony',
//   'flick',
//   'sheep',
//   'flick',
//   'bicycle',
//   'jarmony',
//   'flick',
// ];
// str[0] !== 'flick' ? (str[0] = true) : (str[0] = false);

// for (let i = 1; i < str.length; i++) {
//   str[i] !== 'flick'
//     ? (str[i] = Boolean(str[i - 1]))
//     : (str[i] = !Boolean(str[i - 1]));
// }

// console.log(str);

// function flickSwitch(arr) {
//   if (arr.length > 0) {
//     arr[0] = arr[0] !== 'flick' ? true : false;
//     for (let i = 1; i < arr.length; i++) {
//       arr[i] !== 'flick'
//         ? (arr[i] = Boolean(arr[i - 1]))
//         : (arr[i] = !Boolean(arr[i - 1]));
//     }
//   }
//   return arr;
// }
// console.log(flickSwitch([]));
// function descendingOrder(n) {
//   return +n
//     .toString()
//     .split('')
//     .toSorted((a, b) => b - a)
//     .join('');
// }
// console.log(descendingOrder(123456789));

// function openOrSenior(data) {
//   return data.map((item) => (item[0] > 55 && item[1] > 7 ? 'Senior' : 'Open'));
// }
// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ]),
// );
// function findEvenIndex(arr) {
//   let total = 0;
//   const arrOfSum = [];
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     arrOfSum.push(total);
//   }
// }
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

// const shortenSpeech = function (str) {
//   str = str.split(' ');
//   let newStr = [];
//   str.map((item) => {
//     if (item.length < 4) {
//       newStr.push(item);
//     } else {
//       newStr.push(item.replace(/(?<=.{3})[aeouiy].*/g, '.'));
//     }
//   });
//   return newStr.join(' ');
// };
// console.log(shortenSpeech('Hello, do you want a coffee ? '));
// // 'Hell. do you want a coff. ? ',
// console.log(shortenSpeech('Did you bring your computer ?'));
// // 'Did you bring your comp. ?',
// console.log(shortenSpeech("I've just finished my first kata"));
// // "I'v. just fin. my first kat.";

// function findEvenIndex(arr) {
//   let total1 = 0;
//   let total2 = 0;
//   const arrOfSum1 = [];
//   const arrOfSum2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     total1 += arr[i];
//     total2 += arr.toReversed()[i];
//     arrOfSum1.push(total1);
//     arrOfSum2.push(total2);
//   }
//   console.log(arrOfSum1);
//   console.log(arrOfSum2.toReversed());
// }
// console.log(findEvenIndex([1, 2, 7, 4, 3, 6, 1]));

// const solution = (str) => str.split('').toReversed().join('');
// console.log(solution('world'));
// const oddOrEven = (array) =>
//   array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';
// console.log(oddOrEven([0]));
// String.prototype.toJadenCase = function () {
//   return this.split(' ')
//     .map((item) => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
//     .join(' ');
// };
// console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

// function nthEven(n) {
//   let total = 0;
//   for (let i = 1; i < n; i++) {
//     total += 2;
//   }
//   return total;
// }
// console.log(nthEven(1298734));
// 0, 2, 4, 6, 8, 10
// 1, 2, 3, 4, 5, 6

// function getSum(a, b) {
//   let total = 0;
//   if (a === b) {
//     return a;
//   } else if (a < b) {
//     for (let i = a; i <= b; i++) {
//       total += i;
//     }
//     return total;
//   } else {
//     for (let i = b; i <= a; i++) {
//       total += i;
//     }
//     return total;
//   }
// }
// console.log(getSum(0, -1));

// function getSum(a, b) {}
// console.log(getSum(3, 5));

// const str = 'lalala-blablabla';
// const obj = {
//   length: 5,
// };
// const arr = Array.from(obj);
// console.log(arr);
// const a = 10;
// const b = 20;
// console.log(Array.from({ length: b - a + 1 }, (item, index) => a + index));

// function nthEven(n) {
//   return n * 2 - 2;
// }
// // console.log(nthEven(1298734));
// function test() {
//   console.log(this);
// }

// const obj = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // console.log(obj.test());
// const obj1 = {
//   name: 'Blackburn Dotson',
//   email: 'blackburndotson@furnigeer.com',
//   eyeColor: 'brown',
//   friends: ['Jacklyn Lucas', 'Linda Chapman'],
//   isActive: false,
//   balance: 1498,
//   gender: 'male',
//   test1() {
//     console.log(this);
//   },
//   test: test,
// };
// const obj2 = {
//   name: 'Sheree Anthony',
//   email: 'shereeanthony@kog.com',
//   eyeColor: 'brown',
//   friends: ['Goldie Gentry', 'Briana Decker'],
//   isActive: true,
//   balance: 2764,
//   gender: 'female',
//   test2() {
//     console.log(this);
//   },
// test: test,
// };
// obj1.test1();
// obj2.test2();
// obj1.test();
// obj2.test();

// const book = {
//   updateAuthor(newAuthor) {
//     return this;
//   },
// };

// console.log(book.updateAuthor('Jacob'));

// const mergeArrays = (arr1, arr2) =>
//   arr1
//     .filter((item) => !arr2.includes(item))
//     .concat(arr2)
//     .toSorted((a, b) => a - b);

// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

// const mergeArrays = (arr1, arr2) =>
//   arr1
//     .concat(arr2)
//     .toSorted((a, b) => a - b)
//     .filter((item, index, arr) => item !== arr[index + 1]);

// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

// const flip = (d, a) =>
//   d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);

// console.log(flip('R', [3, 2, 1, 2]));
// console.log(flip('L', [1, 4, 5, 3, 5]));

// const flip = (d, a) => {
//   let result = a.sort((a, b) => a - b);
//   return d === 'R' ? result : result.reverse();
// };

// console.log(flip('R', [3, 2, 1, 2]));
// console.log(flip('L', [1, 4, 5, 3, 5]));

// function sumOfDifferences(arr) {
//   return arr
//     .sort((a, b) => b - a)
//     .reduce(
//       (acc, item, index, arr) =>
//         index < arr.length - 1 ? acc + (item - arr[index + 1]) : acc,
//       0,
//     );
// }

// const sumOfDifferences = (arr) =>
//   arr
//     .sort((a, b) => b - a)
//     .reduce(
//       (acc, x, i, a) =>
//         arr.length > 1 ? (i + 1 < arr.length ? acc + (x - a[i + 1]) : acc) : 0,
//       0,
//     );
// const number = function (busStops) {
//   return busStops.reduce((acc, item) => acc + (item[0] - item[1]), 0);
// };
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ]),
// );
// function test() {
//   return Object.values(this);
// }
// console.log(test());

// const obj1 = {
//   name: 'Blackburn Dotson',
//   email: 'blackburndotson@furnigeer.com',
//   eyeColor: 'brown',
//   friends: ['Jacklyn Lucas', 'Linda Chapman'],
//   isActive: false,
//   balance: 1498,
//   gender: 'male',
//   test1(n) {
//     return (this.balance += n);
//   },
//   test: test,
// };
// const obj2 = {
//   name: 'Sheree Anthony',
//   email: 'shereeanthony@kog.com',
//   eyeColor: 'brown',
//   friends: ['Goldie Gentry', 'Briana Decker'],
//   isActive: true,
//   balance: 2764,
//   gender: 'female',
//   // test2() {
//   //   return this;
//   // },
//   test: test,
// };
// console.log(obj1.test1(2));
// // console.log(obj2.test2());
// console.log(obj1.test());
// // console.log(obj2.test());
// function multipleOfIndex(array) {
//   return array.filter((item, index, arr) => item === 0 || item % index === 0);
// }
// console.log(multipleOfIndex([0, -6, 32, 82, 9, 25]));

// function mergeArrays(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .sort((a, b) => a - b)
//     .filter((item, index, arr) => arr[index] !== arr[index + 1]);
// }
// function mergeArrays(arr1, arr2) {
//   return arr1
//     .filter((item) => !arr2.includes(item))
//     .concat(arr2)
//     .sort((a, b) => a - b);
// }
// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(
//       (item) =>
//         (item !== 'a') &
//         (item !== 'i') &
//         (item !== 'e') &
//         (item !== 'o') &
//         (item !== 'u') &
//         (item !== 'A') &
//         (item !== 'I') &
//         (item !== 'E') &
//         (item !== 'O') &
//         (item !== 'U'),
//     )
//     .join('');
// }
// function disemvowel(str) {
// return str.match(/[^aeiou]/gi).join('');
// return str.replace(/[aeiou]/gi, '');
// }
// function disemvowel(str) {
//   const newStr = str.split('');
//   const arr = [];
//   for (let i = 0; i < newStr.length; i++) {
//     if (
//       (newStr[i] !== 'a') &
//       (newStr[i] !== 'e') &
//       (newStr[i] !== 'i') &
//       (newStr[i] !== 'o') &
//       (newStr[i] !== 'u') &
//       (newStr[i] !== 'A') &
//       (newStr[i] !== 'E') &
//       (newStr[i] !== 'I') &
//       (newStr[i] !== 'O') &
//       (newStr[i] !== 'U')
//     ) {
//       arr.push(newStr[i]);
//     }
//   }
//   return arr.join('');
// }
// function disemvowel(str) {
//   // return str.match(/[^aeiou]/gi)?.join('');
//   return /[^aeiou]/gi.test(str) ? str.match(/[^aeiou]/gi).join('') : '';
// }
// console.log(disemvowel('ioohhha'));
// const obj = {
//   english: 'Welcome',
//   czech: 'Vitejte',
//   danish: 'Velkomst',
//   dutch: 'Welkom',
//   estonian: 'Tere tulemast',
//   finnish: 'Tervetuloa',
//   flemish: 'Welgekomen',
//   french: 'Bienvenue',
//   german: 'Willkommen',
//   irish: 'Failte',
//   italian: 'Benvenuto',
//   latvian: 'Gaidits',
//   lithuanian: 'Laukiamas',
//   polish: 'Witamy',
//   spanish: 'Bienvenido',
//   swedish: 'Valkommen',
//   welsh: 'Croeso',
// };

// // console.log(obj);

// const greet = (language) => obj[language] || obj.english;

// console.log(greet('welsh'));
// const ironmanTriathlon = {
//   swim: 2.4,
//   bike: 112,
//   run: 26.2,
// };
// function iTri(s) {
//   const totalDistance = Object.values(ironmanTriathlon).reduce(
//     (a, b) => a + b,
//     0,
//   );
//   // console.log(totalDistance);

//   if (s === 0) {
//     return 'Starting Line... Good Luck!';
//   } else if (s < ironmanTriathlon.swim) {
//     return { Swim: `${(totalDistance - s).toFixed(2)} to go!` };
//   } else if (
//     s >= ironmanTriathlon.swim &&
//     s < ironmanTriathlon.swim + ironmanTriathlon.bike
//   ) {
//     return { Bike: `${(totalDistance - s).toFixed(2)} to go!` };
//   } else if (
//     s >= ironmanTriathlon.swim + ironmanTriathlon.bike &&
//     s < totalDistance - 10
//   ) {
//     return { Run: `${(totalDistance - s).toFixed(2)} to go!` };
//   } else if (totalDistance - s > 0 && totalDistance - s <= 10) {
//     return { Run: 'Nearly there!' };
//   } else {
//     return "You're done! Stop running!";
//   }
// }

// console.log(iTri(2.3));
// console.log(iTri(2.5));
// console.log(iTri(115));
// console.log(iTri(113));
// function well(x) {
//   const newArr = x
//     .flat()
//     .filter((item) => item.toString().toLowerCase() === 'good');
//   console.log(newArr);

//   switch (newArr.length) {
//     case 0:
//       return 'Fail!';
//     case 1:
//     case 2:
//       return 'Publish!';
//     default:
//       return 'I smell a series!';
//   }
// }
// function well(x) {
//   const newArr = x.flat().filter((item) => item.toString().match(/good/gi));
//   return newArr.length >= 3
//     ? 'I smell a series!'
//     : newArr.length >= 1
//     ? 'Publish!'
//     : 'Fail!';
// }
// console.log(
//   well([
//     ['bad', 'bAd', 'bad'],
//     ['bad', 'bAd', 'bad'],
//     ['bad', 'bAd', 'bad'],
//   ]),
// );
// console.log(
//   well([
//     ['gOOd', 'bad', 'BAD', 'bad', 'bad'],
//     ['bad', 'bAd', 'bad'],
//     ['GOOD', 'bad', 'bad', 'bAd'],
//   ]),
// );
// console.log(
//   well([
//     ['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'],
//     ['bad'],
//     ['gOOd', 'BAD'],
//   ]),
// );
// function squareDigits(num) {
//   console.log(+`${num}`.split('').reduce((acc, curr) => acc + curr ** 2, ''));
// }
// console.log(squareDigits(3212));
// console.log(squareDigits(2112));

// function isPangram(string) {
//   console.log(
//     string
//       .toLowerCase()
//       .split('')
//       .toSorted((a, b) => a.localeCompare(b) - b.localeCompare(a))
//       .filter((item, index, arr) => arr[index] !== arr[index + 1])
//       .join('')
//       .includes('abcdefghijklmnopqrstuvwxyz'),
//   );
// }

// function isPangram(string) {
//   return new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;
// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // true
// console.log(isPangram('This is not a pangram.')); // false
// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
// console.log(isPangram('This is not a pangram.'));
// function isPangram(string) {
//   return 'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .every((item) => string.toLowerCase().includes(item));
// }
// const isPangram = (string) =>
//   'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .every((item) => string.toLowerCase().includes(item));

// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
// console.log(isPangram('This is not a pangram.'));

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// class Storage {
//   constructor(item) {
//     this.item = item;
//   }
//   getItems() {
//     return this.item;
//   }
//   addItem(newItem) {
//     return this.item.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     return (this.item = this.item.filter((item) => item !== itemToRemove));
//   }
// }
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// function scoreboard(string) {
//   return string
//     .split(' ')
//     .filter(
//       (item) =>
//         Object.keys(this).includes(item) && typeof this[item] !== 'function',
//     )
//     .map((item) => this[item]);
// }
// const obj = {
//   nil: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
//   score: scoreboard,
// };
// console.log(obj.score('The score is four nil'));
// console.log(obj.score('new score two three'));
// console.log(obj.score('Arsenal just conceded another goal, two nil'));

// function scoreboard(string) {
//   let newStr = string.split(' ');
//   for (let i = 0; i < newStr.length; i++) {
//     if (Object.keys(obj).includes(newStr[i])) {
//       newStr[i] = obj[newStr[i]];
//     }
//   }
//   return newStr
//     .join(' ')
//     .match(/[0-9]/g)
//     .map((item) => +item);
// }
// const obj = {
//   nil: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
// };

// function scoreboard(string) {
//   return string
//     .split(' ')
//     .slice(-2)
//     .map((item) => obj[item]);
// }
// const obj = {
//   nil: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
// };

//
// function scoreboard(string) {
//   return string
//     .split(' ')
//     .filter(
//       (item) =>
//         Object.keys(this).includes(item) && typeof this[item] !== 'function',
//     )
//     .map((item) => this[item]);
// }
// const obj = {
//   nil: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
//   score: scoreboard,
// };
// console.log(obj.score('The score is four nil'));
// console.log(obj.score('new score two three'));
// console.log(obj.score('Arsenal just conceded another goal, two nil'));

// console.log(customer.getOrders());

// const newGetOrder = customer.getOrders;
// console.log(newGetOrder);

// const newCustomer = {
//   username: 'Poly',
//   balance: 25000,
//   discount: 0.2,
//   orders: ['Apple', 'Cherry', 'Banana'],
// };
// console.log(customer.getBalance.call(newCustomer));
// console.log(customer.getDiscount.call(newCustomer));
// console.log(customer.getOrders.call(newCustomer));
// console.log(customer.addOrder.apply(newCustomer, ['', 'Pear']));
// console.log(customer.getOrders.call(newCustomer));

// function scoreboard(string) {
//   return string
//     .split(' ')
//     .filter(
//       (item) =>
//         Object.keys(this).includes(item) && typeof this[item] !== 'function',
//     )
//     .map((item) => this[item]);
// }
// const obj = {
//   nil: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
//   score: scoreboard,
// };
// console.log(obj.score('The score is four nil'));
// console.log(obj.score('new score two three'));
// console.log(obj.score('Arsenal just conceded another goal, two nil'));
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';
// const cat = Object.create(dog);
// cat.say = 'Meow';
// console.log(animal); // { name: "Mango", [[Prototype]]: animal }
// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
// console.log(cat); // { name: "Mango", [[Prototype]]: animal }
// console.log(cat.hasOwnProperty('legs'));

// console.log(dog.name);
// console.log(dog.legs);
// console.log(animal.isPrototypeOf(dog));
// console.log(dog.isPrototypeOf(animal));

// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.
// function foo(a) {
//   return a % 2 ? Math.sqrt(a) : Math.pow(a, 2);
// }
// function foo2(a, b, foo) {
//   return foo(a * b);
// }
// console.log(foo2(3, 3, foo));

// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.
// function callbackEven(elem) {
//   return elem % 2 === 0;
// }
// function callbackO(elem) {
//   return elem.toString().toLowerCase()[0] === 'o';
// }
// function callbackOr(arr, callbackEven, callbackO) {
//   arr.find((item) => callbackEven(item) || callbackO(item));
// }
// console.log(callbackOr([1, 5, 'rl', 'p', 7, 'iii'], callbackEven, callbackO));

// const array = [2, 'onge', 4, 'rl', 'p', 7, 'iii'];

// function callbackFn(elem) {
//   return elem % 2 === 0 || elem.toString().toLowerCase()[0] === 'o';
// }

// function mainFn(arr, callbackFn) {
//   return arr.find((elem) => callbackFn(elem)) || null;
// }
// console.log(mainFn(array, callbackFn));

// const array = [1, 2, 3, 4, 5, 6, 7, 9, 12, 16, 37, 12];
// function isOdd(n) {
//   return n % 2 !== 0;
// }
// function foo(arr, isOdd) {
//   return arr
//     .filter((item) => isOdd(item) && item < 10)
//     .reduce((a, b) => a * b, 1);
// }
// console.log(foo(array, isOdd));
// const array = [1, 2, 3, 4, 5, 6, 7, 9, 12, 16, 37, 12];
// function isOdd(n) {
//   return n % 2 !== 0 && n < 10;
// }

// function foo(arr, isOdd) {
//   return arr.filter((item) => isOdd(item)).reduce((a, b) => a * b, 1);
// }
// console.log(foo(array, isOdd));

// const array = [1, 2, 3, 4, 5, 6, 7, 9, 12, 16, 37, 12];
// function isOdd(arr) {
//   return arr.filter((n) => n % 2 !== 0 && n < 10);
// }
// console.log(isOdd(array));

// function foo(arr, isOdd) {
//   return isOdd(arr).reduce((a, b) => a * b, 1);
// }
// console.log(foo(array, isOdd));

// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newArr = data.map((item) => item.values).flat();
// console.log(newArr);

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// console.log(people.some((item) => item.age < 20));

// const numbers = [2, 4, 6, 8, 10];
// console.log(numbers.every((item) => item % 2 === 0));

// const numbers = [1, 2, 3, 4, 5];
// function getNumber(arr, x) {
//   return arr.find((item) => item > x);
// }
// const res = getNumber(numbers, 3);
// console.log(res);

// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const sortedArray = (arr) => arr.toSorted((a, b) => a - b);
// console.log(sortedArray(numbersArray));

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sortedArray = (arr) => arr.toSorted((a, b) => a.localeCompare(b));
// const res = sortedArray(stringArray);
// console.log(res);

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// console.log(users.toSorted((a, b) => a.age - b.age));

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// console.log(user.filter((item) => item.age > 20));

// const numbers = [1, 2, 3, 4, 5];
// const sum = (arr) => arr.reduce((a, b) => a + b, 0);
// const res = sum(numbers);
// console.log(res);

// const arr = [1, 2, 3, 4, 5];
// const averageValue = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
// const res = averageValue(arr);
// console.log(res);

// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить повну інформацію про користувача.

// const user = {
//   firstName: 'Oleksandra',
//   lastName: 'Husar',
//   age: 30,
//   email: 'mail@gmail.com',
//   showInfo() {
//     return this;
//   },
// };
// console.log(user.showInfo());

// Напиши функцію, яка приймає об'єкт та колбек. Функція повинна визначити, чи є в об'єкті властивість "age" і чи є вік користувача повнолітнім (більше 18 років). Якщо так, викликай колбек із повідомленням "Повнолітній", інакше "Неповнолітній".
// function callBack(age) {
//   return age >= 18 ? 'Adult' : 'Minor';
// }

// function isAdult(obj, callback) {
//   return user.age ? callBack(user.age) : 'Property is undefined';
// }
// console.log(isAdult(user, callBack));

// class User {
//   name = 'Oleksandra';
// }
// console.log(User);
// const user = new User();
// user.name = 'Lyosha';

// console.log(user);
// class User {
//   constructor(name, email) {
//     (this.name = name), (this.email = email);
//   }
// }

// const mango = new User('Mango', 'mango@mail.com');
// console.log(mango);
// const Poly = new User('Poly', 'hhhh@gmai.com');
// console.log(Poly);
// delete Poly.email;
// console.log(Poly);
// class User {
//   constructor(params) {
//     this.name = params.name1;
//     this.email = params.email1;
//   }
// }

// const mango = new User({
//   name1: 'Mango',
//   email1: 'mango@mail.com',
// });
// console.log(mango);
// class User {
//   constructor({ name1, email1 }) {
//     this.name = name1;
//     this.email = email1;
//   }
// }

// const mango = new User({
//   name1: 'Mango',
//   email1: 'mango@mail.com',
// });
// console.log(mango);

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getAge() {
//     return this.age;
//   }

//   changeAge(newAge) {
//     return (this.age = newAge);
//   }
// }
// const newUser = new User('Oleksandra', 30);
// console.log(newUser);
// console.log(newUser.getAge());
// console.log(newUser.changeAge(31));
// console.log(newUser.getAge());
// console.log(newUser);
/* Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is - */

// function findSing(a, b, c) {
//   if (a < 0 || b < 0 || c < 0) {
//     return "The sign is -";
//   } else {
//     return "The sign is +";
//   }
// }

// console.log(findSing(5, 6, -4)); // The sign is -
// console.log(findSing(-5, 6, -4)); // The sign is -
// console.log(findSing(5, -6, -4)); // The sign is -
// console.log(findSing(5, 6, 4)); // The sign is +
// console.log(findSing(-5, -6, -4)); //The sign is -

// function simpleMath(a, b, c, d) {
//   let ab = b - a >= 0 ? Math.pow(b - a, 2) : (b - a) % 3;
//   let bc = c - b >= 0 ? Math.pow(c - b, 2) : (c - b) % 3;
//   let cd = d - c >= 0 ? Math.pow(d - c, 2) : (d - c) % 3;
//   console.log(ab);
//   console.log(bc);
//   console.log(cd);
// }
// console.log(simpleMath(4, 6, 24, 1));

/* Функція приймає у якості аргумента суму до сплати на касі для 4 типів клієнтських карток - new amator loyal vip. При сумі покупки від 5000 вони отримують знижки 5 10 15 та 20 відсотків відповідно. При суммі покупки від 10000 тільки loyal та vip отримують НА СУМУ ІЗ ВЖЕ ДІЮЧОЮ ЗНИЖКОЮ ще додаткові 10% знижки. При суммі до 5000 - показувати на яку суму потрібно добрати товарів, щоб була знижка. */

// function totalDiscount(typeCard, fullAmount) {
//   let discount = 0;
//   let amountDue = fullAmount - fullAmount * discount;
//   if (typeCard == "new" && fullAmount >= 5000) {
//     discount = 0.05;
//   } else if (typeCard == "amator" && fullAmount >= 5000) {
//     discount = 0.1;
//   } else if (typeCard == "loyal" && fullAmount >= 5000) {
//     discount = 0.15;
//   } else if (typeCard == "vip" && fullAmount >= 5000) {
//     discount = 0.2;
//   }

//   if ((typeCard == "loyal" || typeCard == "vip") && fullAmount >= 10000) {
//     amountDue = amountDue * 0.9;
//   }
//   if (fullAmount < 5000) {
//     5000 - fullAmount;
//   }
//   console.log(amountDue);
// }
// console.log(totalDiscount("new", 12000));
// function totalDiscount(typeCard) {
//   let fullAmount;
//   let discount;
//   let amountDue = fullAmount - fullAmount * discount;
// }

// function quicksum(packet) {
//   let total = 0;
//   if (/^[A-Z]+(?:\s*[A-Z]+)*$/g.test(packet)) {
//     for (let i = 0; i < packet.length; i++) {
//       if (packet[i] !== ' ') {
//         console.log((total += (i + 1) * (packet[i].charCodeAt() - 64)));
//       }
//     }
//     return total;
//   } else return 0;
// }
// console.log(quicksum('Z     A'));
// console.log(quicksum('MID CENtTRAL'));

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const newUser = new User('Oleksandra', 30);
// console.log(newUser);
// console.log(newUser.name);
// console.log(newUser.age);
// newUser.name = 'Sasha';
// newUser.age = 31;
// console.log(newUser.name);
// console.log(newUser.age);

// class User {
//   #name;
//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }
//   getName() {
//     return this.#name;
//   }
//   getAge() {
//     return this.age;
//   }
//   changeName(newName) {
//     this.#name = newName;
//   }
//   changeAge(newAge) {
//     this.age = newAge;
//   }
// }
// const newUser = new User('Oleksandra', 30);
// console.log(newUser);
// console.log(newUser.getName());
// console.log(newUser.getAge());
// newUser.changeName('Sasha');
// newUser.changeAge(31);
// console.log(newUser.getName());
// console.log(newUser.getAge());
// console.log(newUser);

// class User {
//   #name;
//   #age;
//   constructor(name, age) {
//     this.#name = name;
//     this.#age = age;
//   }
//   get name() {
//     return this.#name;
//   }
//   get age() {
//     return this.#age;
//   }
//   set name(newName) {
//     this.#name = newName;
//   }
//   set age(newAge) {
//     this.#age = newAge;
//   }
// }
// const newUser = new User('Oleksandra', 30);
// console.log(newUser);
// console.log(newUser.name);
// console.log(newUser.age);
// newUser.name = 'Sasha';
// newUser.age = 31;
// console.log(newUser.name);
// console.log(newUser.age);

// class User {
//   #name;
//   #age;
//   static valueOfUser = 5;
//   constructor(name, age) {
//     this.#name = name;
//     this.#age = age;
//   }
//   someMethod() {
//     this.#age = this.#age + User.valueOfUser;
//   }
//   get age() {
//     return this.#age;
//   }
// }
// const newUser = new User('Oleksandra', 30);
// console.log(newUser);
// newUser.someMethod();
// console.log(newUser);
// console.log(newUser.age);

// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     return price > this.#maxPrice
//       ? 'Error! Price exceeds the maximum'
//       : 'Success! Price is within acceptable limits';
//   }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const newUser = new User('fff@gmail.com');
// console.log(newUser);
// console.log(newUser.email);
// newUser.email = 'jjj@gmail.com';
// console.log(newUser.email);

// class UserChild extends User {
//   constructor(email, posts) {
//     super(email);
//     this.posts = posts;
//   }
// }
// const userChild = new UserChild('lll@gmail.com', []);
// console.log(userChild);

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email); // Виклик конструктора батьківського класу User
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({
// 	email: "mango@mail.com",
// 	posts: []
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, access }) {
    super(email);
    this.access = access;
    this.blacklistedEmails = [];
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email) ? true : false;
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
