//? 1.
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//   classPoints.push(yourPoints);
//   let total = 0;
//   for (const number of classPoints) {
//     total += number;
//   }
//   total = total / classPoints.length;
//   return yourPoints >= total;
// }
// console.log(betterThanAverage([4, 5, 3, 5, 5, 4, 2, 3, 5], 5));

//? 2.
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// String.prototype.toJadenCase = function () {
//   let arr = this.split(' ');
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let eachWord = arr[i].split('');
//     eachWord[0] = eachWord[0].toUpperCase();
//     eachWord = eachWord.join('');
//     newArr.push(eachWord);
//   }

//   return newArr.join(' ');
// };
// console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

//? 3
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

// function sumArray(array) {
//   if (!array || array.length < 3) {
//     return 0;
//   } else {
//     array = array.sort(function (a, b) {
//       return a - b;
//     });
//     let total = 0;
//     for (let i = 1; i < array.length - 1; i++) {
//       total = total + array[i];
//     }
//     return total;
//   }
// }

// console.log(sumArray([1, 3, 9, 5, 11, 4]));
// function sumArray(array) {
//   if (!array || array.length < 3) {
//     return 0;
//   } else {
//     array = array.sort(function (a, b) {
//       return a - b;
//     });
//     array = array.slice(1, array.length - 1);
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//       total = total + array[i];
//     }
//     return total;
//   }
// }
// console.log(sumArray([1, 3, 9, 5, 11, 4]));

// function sumArray(array) {
//   if (array === null || array === undefined || array.length < 3) {
//     return 0;
//   } else {
//     array = array.sort(function (a, b) {
//       return a - b;
//     });
//     array = array.slice(1, array.length - 1);
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//       total = total + array[i];
//     }
//     return total;
//   }
// }
// console.log(sumArray([1, 3, 9, 5, 11, 4]));

// function sumArray(array) {
//   let sum = 0;

//   if (!array || array.length <= 2) {
//     return sum;
//   }
//   let sorted = array.sort((a, b) => a - b);
//   for (let i = 1; i < sorted.length - 1; i++) {
//     sum += sorted[i];
//   }
//   return sum;
// }
// console.log(sumArray([1, 3, 9, 5, 11, 4]));
// function litres(time) {
//   const total = time * 0.5;
//   return parseInt(total);
// }

//? 4.
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// function litres(time) {
//   let total = time * 0.5;
//   return Math.floor(total);
// }
// console.log(litres(1.4));

// function litres(time) {
//   let total = time * 0.5;
//   return parseInt(total);
// }
// console.log(litres(1.4));

// function litres(time) {
//   return Math.floor(time * 0.5);
// }
// console.log(litres(1.4));

// function litres(time) {
//   let total = String(time * 0.5);
//   return total.includes('.') ? +total.slice(0, total.indexOf('.')) : +total;
// }
// console.log(litres(12.3));

//? 5.
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// function reverseWords(str) {
//   let newArrReverse = [];
//   str = str.split(' ');
//   for (let i = 0; i < str.length; i++) {
//     str[i] = str[i].split('').reverse().join('');
//     newArrReverse.push(str[i]);
//   }
//   return newArrReverse.join(' ');
// }
// console.log(reverseWords('This is an example!'));

// function reverseWords(str) {
//   console.log(str.split(''));
//   console.log(str.split('').reverse());
//   console.log(str.split('').reverse().join(''));
//   console.log(str.split('').reverse().join('').split(' '));
//   console.log(str.split('').reverse().join('').split(' ').reverse());
//   console.log(str.split('').reverse().join('').split(' ').reverse().join(' '));
//   return str.split('').reverse().join('').split(' ').reverse().join(' ');
// }
// console.log(reverseWords('This is an example!'));

//? 6
// This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"

// function accum(s) {
//   console.log((s = s.toUpperCase().split('')));
//   let newS = '';
//   for (let i = 0; i < s.length; i++) {
//     let repeatedChar = s[i].repeat(i + 1);
//     newS += repeatedChar.charAt(0) + repeatedChar.slice(1).toLowerCase();
//     if (i < s.length - 1) {
//       newS += '-';
//     }
//   }
//   return newS;
// }
// console.log(accum('abcd'));

// function accum(s) {
//   let sArray = s.toLowerCase().split('');
//   console.log(sArray);
//   let mumbleArray = []
//   for (let i = 0; i < sArray.length; i++) {
//     console.log((mumbleArray[i] = '' + sArray[i].toUpperCase()));
//     for (let j = 1; j <= i; j++) {
//       console.log((mumbleArray[i] += sArray[i]));
//     }
//   }
//   return mumbleArray.join('-');
// }
// console.log(accum('abcd'));

// function accum(s) {
//   return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
// }
// console.log(accum('abcd'));

// function accum(s) {
//   s = s.toLowerCase().split('');
//   let newArr = [];
//   for (let i = 0; i < s.length; i++) {
//     newArr.push(s[i].toUpperCase() + s[i].repeat(i));
//   }
//   return newArr.join('-');
// }
// console.log(accum('abcd'));
//? 7
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   let newArr = [];
//   for (const item of products) {
//     let arrOfArr = Object.entries(item);
//     for (let i = 0; i < arrOfArr.length; i++) {
//       arrOfArr[i][0] === productName ? newArr.push(arrOfArr[i][1]) : newArr;
//     }
//   }
//   return newArr;
// }
// console.log(calculateTotalPrice('name'));
// console.log(calculateTotalPrice('price'));
// console.log(calculateTotalPrice('quantity'));
// console.log(calculateTotalPrice('blabla'));

//? 8
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//   return s
//     .split('')
//     .filter((item) => item !== '!')
//     .join('');
// }
// console.log(removeExclamationMarks('Hello! world!!!')); // Hello world

// function removeExclamationMarks(s) {
//   return s.split('!').join('');
// }
// console.log(removeExclamationMarks('Hello! world!!!')); // Hello world

//? 9
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// console.log(getAllPropValues());
// function arrayDiff(a, b) {
//   const newArr = a.filter((item) => !b.includes(item));
//   return newArr;
// }

//? 10
//! REDUCE()
// function count(arr) {
//   let total = arr.reduce((a, b) => a + b);
//   return total;
// }
// console.log(count([1, 2, 3, 4, 5, 6])); // 21

// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   return [...arguments].reduce((a, b) => a + b);
// }
// console.log(goals(43, 10, 5)); // 58

//? 11
//! ARRAY.FROM()
// let str = 'abcdefg';
// let arr = Array.from(str);
// console.log(arr); //['a', 'b', 'c', 'd', 'e', 'f', 'g']

// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   console.log(arguments); // Arguments(3) [43, 10, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
//   const arr = Array.from(arguments);
//   console.log(arr); // [43, 10, 5]
//   return arr.reduce((a, b) => a + b);
// }
// console.log(goals(43, 10, 5)); // 58

//? 12
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// function count(string) {
//   let object = {};
//   string = string.split('');
//   for (let i = 0; i < string.length; i++) {
//     let currentChar = string[i];
//     let count = string.filter((item) => item === currentChar).length;
//     if (!object.hasOwnProperty(currentChar)) {
//       object[currentChar] = count;
//     }
//   }
//   return object;
// }
// console.log(count(''));
// console.log(count('a'));
// console.log(count('ab'));
// console.log(count('aba'));
// console.log(count('ABC'));

// function count(string) {
//   let object = {};
//   string = string.split('');
//   for (let i = 0; i < string.length; i++) {
//     let count;
//     count = string.filter((item) => string[i].includes(item));
//     console.log(count);
//     object[string[i]] = count.length;
//   }
//   return object;
// }
// console.log(count(''));
// console.log(count('a'));
// console.log(count('ab'));
// console.log(count('aba'));
// console.log(count('ABC'));

//? 13
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// function sortArray(array) {
//   let arrOfOddNum = [];
//   for (const item of array) {
//     if (item % 2 !== 0) {
//       arrOfOddNum.push(item);
//     }
//   }
//   arrOfOddNum.sort(function (a, b) {
//     return a - b;
//   });
//   let oddIndex = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       array[i] = arrOfOddNum[oddIndex];
//       oddIndex++;
//     }
//   }
//   return array;
// }

// console.log(sortArray([5, 8, 6, 3, 4]));

//? 14
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// function findShort(s) {
//   let min = Infinity;
//   for (const item of s.split(' ')) {
//     if (item.length < min) {
//       min = item.length;
//     }
//   }
//   return min;
// }
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

//? 15
// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.
// Your task is to create a function that, given a proper first and last name, will return the correct alias.
// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.
// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
// const firstName = {
//   A: 'Alpha',
//   B: 'Beta',
//   C: 'Cache',
//   D: 'Data',
//   E: 'Energy',
//   F: 'Function',
//   G: 'Glitch',
//   H: 'Half-life',
//   I: 'Ice',
//   J: 'Java',
//   K: 'Keystroke',
//   L: 'Logic',
//   M: 'Malware',
//   N: 'Nagware',
//   O: 'OS',
//   P: 'Phishing',
//   Q: 'Quantum',
//   R: 'RAD',
//   S: 'Strike',
//   T: 'Trojan',
//   U: 'Ultraviolet',
//   V: 'Vanilla',
//   W: 'WiFi',
//   X: 'Xerox',
//   Y: 'Y',
//   Z: 'Zero',
// };
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
// function aliasGen() {
//   if (
//     Object.keys(firstName).includes(arguments[0].charAt(0).toUpperCase()) &&
//     Object.keys(surname).includes(arguments[1].charAt(0).toUpperCase())
//   ) {
//     let alias =
//       firstName[`${arguments[0].charAt(0).toUpperCase()}`] +
//       ' ' +
//       surname[`${arguments[1].charAt(0).toUpperCase()}`];
//     return alias;
//   }
//   return 'Your name must start with a letter from A - Z.';
// }
// console.log(aliasGen('jaisy', 'Petrovic'));

// function aliasGen() {
//   let alias = '';
//   if (
//     Object.keys(firstName).includes(arguments[0].charAt(0).toUpperCase()) &&
//     Object.keys(surname).includes(arguments[1].charAt(0).toUpperCase())
//   ) {
//     for (const item of Object.keys(firstName)) {
//       if (item === arguments[0].charAt(0).toUpperCase()) {
//         alias += firstName[item] + ' ';
//       }
//     }
//     for (const item of Object.keys(surname)) {
//       if (item === arguments[1].charAt(0).toUpperCase()) {
//         alias += surname[item];
//       }
//     }
//     return alias;
//   } else {
//     return 'Your name must start with a letter from A - Z.';
//   }
// }
// console.log(aliasGen('Zaisy', 'Petrovic'));

//? 16
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
// function whatCentury(year) {
//   let startSymbols = year.endsWith('00')
//     ? parseInt(year.slice(0, 2)).toString()
//     : (parseInt(year.slice(0, 2)) + 1).toString();
//   if (startSymbols[0] > 1) {
//     if (startSymbols[1] === '1') {
//       return startSymbols + 'st';
//     } else if (startSymbols[1] === '2') {
//       return startSymbols + 'nd';
//     } else if (startSymbols[1] === '3') {
//       return startSymbols + 'rd';
//     }
//   }
//   return startSymbols + 'th';
// }
// console.log(whatCentury('1124'));
// console.log(whatCentury('2259'));
// console.log(whatCentury('2154'));
// console.log(whatCentury('2000'));
