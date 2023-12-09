let array = [35, 23, 8, 12, 46, 28, 21, 11, 2];
function someNumberArr(array) {
  let totalEvenNumbers = 0;
  let totalOddNumbers = 0;
  for (let count = 0; count < array.length; count++) {
    if (array[count] % 2 === 0) {
      totalEvenNumbers += array[count];
    } else {
      totalOddNumbers += array[count];
    }
  }
  if (totalEvenNumbers > totalOddNumbers) {
    return `The sum of the even numbers of the array is greater than the sum odd numbers`;
  } else if (totalEvenNumbers < totalOddNumbers) {
    return `The sum of the odd numbers of the array is greater than the sum even numbers`;
  } else {
    return `The sum of the even numbers of the array is equal to the sum of the odd numbers`;
  }
}
console.log(someNumberArr(array));

// Парні числа - even numbers;
// Непарні числа - odd numbers
