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
const getCount = (str) =>
  // /[aeiou]/.test(str) ? str.match(/[aeiou]/g).length : 0;
  // str.match(/[a|i|e|o|u]/g) ? str.match(/a|i|e|o|u/g).length : 0;

  console.log(getCount('abracadabra'));

const str = [':-)', ';~D', ':-D', ':_D'];
// const countSmileys = (arr) =>
//   /[()]/.test(arr.join('')) ? arr.join('').match(/[()]/g).length : 0;

const countSmileys = (arr) =>
  // /[)D]/.test(arr.join('')) ? arr.join('').match(/[)D]/g).length : 0;
  console.log(countSmileys(str));
