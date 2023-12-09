let someNumberArr = [1, 2, 3, 4, 5];
console.log(someNumberArr); // [1, 2, 3, 4, 5]

//* Щоб отримати доступ до значення елемента масиву, вказуємо індекс елемента всередині квадратних дужок.
console.log(someNumberArr[0]); // 1
console.log(someNumberArr[1]); // 2
console.log(someNumberArr[2]); // 3
console.log(someNumberArr[3]); // 4
console.log(someNumberArr[4]); // 5

//* Результат звернення до елемента масиву можна зберегти у змінну і використовувати його надалі.
let someNumberVar = someNumberArr[0];
console.log(someNumberVar); // 1

//* Перевизначення значення елемента
someNumberArr[0] = 100;
console.log(someNumberArr); // [100, 2, 3, 4, 5]

//* Довжина масиву = кількість елементів в масиві
console.log(someNumberArr.length); // 5

//* Індекс останнього елемента масиву
console.log(someNumberArr.length - 1); // 4

let someStringArr = ['cat', 'dog', 'mouse'];
console.log(someStringArr); // ["cat", "dog", "mouse"]

//* Щоб отримати доступ до значення елемента масиву, вказуємо індекс елемента всередині квадратних дужок.
console.log(someStringArr[0]); // 'cat'
console.log(someStringArr[1]); // 'dog'
console.log(someStringArr[2]); // 'mouse'

//* Результат звернення до елемента масиву можна зберегти у змінну і використовувати його надалі.
let someStringVar = someStringArr[0];
console.log(someStringVar); // 'cat'

//* Перевизначення значення елемента
someStringArr[0] = 'rabbit';
console.log(someStringArr); // ["rabbit", "dog", "mouse"]

//* Довжина масиву = кількість елементів в масиві
console.log(someStringArr.length); // 3

//* Індекс останнього елемента масиву
console.log(someStringArr.length - 1); // 2

//* JOIN & SPLIT
// Split => рядок перетворює на масив
// Join => масив перетворює на рядок
let newArray = 'My name is Oleksandra';
console.log(newArray); // My name is Oleksandra
console.log(newArray.split(' ')); // 'My, 'name', 'is', 'Oleksandra'
console.log(newArray.split(' ').join('$')); // My$name$is$Oleksandra
console.log(newArray.split(' ').join('')); // MynameisOleksandra
console.log(newArray.split(' ').join('/')); // My/name/is/Oleksandra

console.log(newArray.split(' ').join('').split('')); // 'M', 'y', 'n', 'a', 'm', 'e', 'i', 's', 'O', 'l', 'e', 'k', 's', 'a', 'n', 'd', 'r', 'a'
console.log(newArray.split(' ').join(' ')); // My name is Oleksandra
// newArray = 'abcd';
// console.log(newArray);
// console.log(newArray.split(''));

//SLICE
let myArray = newArray.split(' ');
console.log(myArray.slice(0, 1)); // 'My'
console.log(myArray.slice(0, 2)); // 'My', 'name'
console.log(myArray.slice(0, 3)); // 'My', 'name', 'is'
console.log(myArray.slice(0, 4)); // 'My, 'name', 'is', 'Oleksandra'
console.log(myArray.slice(1, 3)); // 'name', 'is'
console.log(myArray.slice(2, 4)); // 'is', 'Oleksandra'
console.log(myArray.slice(2)); // 'is', 'Oleksandra'
console.log(myArray.slice()); // 'My, 'name', 'is', 'Oleksandra'
console.log(myArray.slice(-3)); // ['name', 'is', 'Oleksandra'

//INDEXOF
console.log(myArray.indexOf('My')); // 0
console.log(myArray.indexOf('name')); // 1
console.log(myArray.indexOf('is')); // 2
console.log(myArray.indexOf('Oleksandra')); // 3
console.log(myArray.indexOf('Olena')); // -1
