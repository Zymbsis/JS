//? charAt() => Returns the character at the specified index.
// const str = 'abcd';
// console.log(str.charAt(0)); // a   ===    console.log(str[0]);
// console.log(str.charAt(1)); // b   ===    console.log(str[1]);
// console.log(str.charAt(2)); // c   ===    console.log(str[2]);
// console.log(str.charAt(3)); // d   ===    console.log(str[3]);

//? charCodeAt() => Returns the Unicode value of the character at the specified location.
// const str = 'abcd';
// console.log(str.charCodeAt(0)); // 97
// console.log(str.charCodeAt(1)); // 98
// console.log(str.charCodeAt(2)); // 99
// console.log(str.charCodeAt(3)); // 100

//? concat() => Returns a string that contains the concatenation of two or more strings.
// let str = 'abcd';
// str = str.concat('efghi');
// console.log(str); // abcdefghi
// (str.concat('efghi') === (str + 'efghi') === (`${str}efghi`);

//? startsWith & endsWith() => Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at startPosition or endPosition – length(this). Otherwise returns false.
// const str = 'abcde';
// console.log(str.startsWith('ab')); // true
// console.log(str.startsWith('de')); // false
// console.log(str.endsWith('ab')); // false
// console.log(str.endsWith('de')); // true

//? includes() => Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
// const str = 'abcdef';
// console.log(str.includes('abcd')); // true
// console.log(str.includes('apple')); // false

//? indexOf() => Returns the position of the first occurrence of a substring.
// const str = 'abcddcba';
// console.log(str.indexOf('a')); // 0
// console.log(str.indexOf('b')); // 1
// console.log(str.indexOf('c')); // 2
// console.log(str.indexOf('d')); // 3

//? lastIndexOf() => Returns the position of the last occurrence of a substring.
// const str = 'abcddcba';
// console.log(str.lastIndexOf('a')); // 7
// console.log(str.lastIndexOf('b')); // 6
// console.log(str.lastIndexOf('c')); // 5
// console.log(str.lastIndexOf('d')); // 4

//? localeCompare() => Determines whether two strings are equivalent in the current locale.
// const str1 = 'a';
// const str2 = 'b';
// const str3 = 'a';
// console.log(str1.localeCompare(str2)); // -1
// console.log(str2.localeCompare(str3)); // 1
// console.log(str2.localeCompare(str1)); // 1
// console.log(str3.localeCompare(str2)); // -1
// console.log(str1.localeCompare(str3)); // 0
// console.log(str3.localeCompare(str1)); // 0

//? match() => Matches a string with a regular expression, and returns an array containing the results of that search.

//? matchAll() => Matches a string with a regular expression, and returns an iterable of matches containing the results of that search.

//? padStart() & padEnd => Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start or end of the current string.
// let str1 = 'aaa';
// let str2 = 'aaa';
// let str3 = 'aaa';
// console.log(str1.length, str2.length, str3.length); // 3 3 3
// console.log((str1 = str1.padStart(10, '-')), str1.length); // -------aaa 10
// console.log((str2 = str2.padEnd(5, '+')), str2.length); //aaa++ 5
// console.log((str3 = str3.padStart(6, '$').padEnd(9, '$')), str3.length); //$$$aaa$$$ 9

//? repeat() => Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
// let str1 = 'a';
// let str2 = 'b';
// let str3 = 'c';
// console.log((str1 = str1.repeat(2))); // aa
// console.log((str2 = str2.repeat(3))); // bbb
// console.log((str3 = str3.repeat(8))); // cccccccc

//? replace() => Replaces text in a string, using a regular expression or search string.
// let str1 = 'abcd';
// let str2 = 'abcd';
// let str3 = 'abcd';
// console.log((str1 = str1.replace('abc', 'moo'))); // mood
// console.log((str2 = str2.replace('cd', 'ba'))); // abba
// console.log((str3 = str3.replace('bc', '********'))); // a********d

//? search() => Finds the first substring match in a regular expression search.
// const str = 'abcde';
// console.log(str.search('a')); // 0
// console.log(str.search('ab')); // 0
// console.log(str.search('cde')); // 2
// str.search() === str.indexOf()

//? slice() => Returns a section of a string.
// let str1 = 'abcde';
// let str2 = 'abcde';
// let str3 = 'abcde';
// console.log(
//   str1.indexOf('a'),
//   str1.indexOf('b'),
//   str1.indexOf('c'),
//   str1.indexOf('d'),
//   str1.indexOf('e'), // 0 1 2 3 4
// );
// console.log((str1 = str1.slice(0, 3))); // abc
// console.log((str2 = str2.slice(3, 4))); // d
// console.log((str3 = str3.slice(-3))); // cde

//? split() => Split a string into substrings using the specified separator and return them as an array.
// let str1 = 'abcde';
// let str2 = 'abcde';
// let str3 = 'abcde abcde';
// console.log((str1 = str1.split(''))); // ['a', 'b', 'c', 'd', 'e']
// console.log((str2 = str2.split(' '))); // ['abcde']
// console.log((str3 = str3.split(' '))); // ['abcde', 'abcde']

//? trim() & trimStart() & trimEnd() => Removes the leading and trailing white space and line terminator characters from a string/start or end of string.
// let str1 = '    ab cd    ';
// console.log(str1.length); // 13
// console.log((str1 = str1.trim()));
// console.log(str1.length); // 5
// let str2 = '    ab cd';
// console.log(str2.length); // 9
// console.log((str2 = str2.trimStart()));
// console.log(str2.length); // 5
// let str3 = 'ab cd    ';
// console.log(str3.length); // 9
// console.log((str3 = str3.trimEnd()));
// console.log(str3.length); // 5
