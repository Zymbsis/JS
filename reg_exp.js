// const countSmileys = (arr) =>
//   arr.filter(
//     (item) =>
//       (item.length === 2 && item[0].match(/[;:]/) && item[1].match(/[)D]/)) ||
//       (item.length === 3 &&
//         item[0].match(/[;:]/) &&
//         item[1].match(/[-~]/) &&
//         item[2].match(/[)D]/)),
//   ).length;

// console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));

// /^[a][b]?[c]$/g;

// const countSmileys = (arr) =>
//   arr.filter((item) => item.match(/^[;:][-~]?[)D]$/)).length;

// console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));

// Write a simple regex to validate a username. Allowed characters are:
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// function validateUsr(username) {
//   const res = /^[a-z\d_]{4,16}$/.test(username);
//   return res;
// }
// console.log(validateUsr());

//Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
// function getNumberFromString(s) {
//   return +s.match(/\d/g).join('');
// }
// console.log(getNumberFromString('Hello5 worl3d!'));

// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
// You can assume the input will always be a number.
// function validateCode(code) {
//   return /^[1-3]/.test(code);
// }
// console.log(validateCode(729));

// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
// String.prototype.digit = function () {
//   return /^\d$/.test(this);
// };
// console.log('7'.digit());

// function isLockNessMonster(s) {
//   return /tree fiddy|3.50|three fifty/g.test(s);
// }
// console.log(
//   isLockNessMonster(
//     'Your girlscout cookies are ready to ship. Your total comes to 3.50',
//   ),
// );

// const purifyTheStratholme = (s) => s.trim().replace(/.?i+.?/gi, '');
// console.log(purifyTheStratholme('1i2i 33 i4i5 55ii5'));

// =======================================================================================================================
// =============================== /[]/ ================================
