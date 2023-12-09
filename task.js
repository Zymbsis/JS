/* Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is - */

function findSing(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    return "The sign is -";
  } else {
    return "The sign is +";
  }
}

console.log(findSing(5, 6, -4)); // The sign is -
console.log(findSing(-5, 6, -4)); // The sign is -
console.log(findSing(5, -6, -4)); // The sign is -
console.log(findSing(5, 6, 4)); // The sign is +
console.log(findSing(-5, -6, -4)); //The sign is -

function simpleMath(a, b, c, d) {
  let ab = b - a >= 0 ? Math.pow(b - a, 2) : (b - a) % 3;
  let bc = c - b >= 0 ? Math.pow(c - b, 2) : (c - b) % 3;
  let cd = d - c >= 0 ? Math.pow(d - c, 2) : (d - c) % 3;
  console.log(ab);
  console.log(bc);
  console.log(cd);
}
console.log(simpleMath(4, 6, 24, 1));

/* Функція приймає у якості аргумента суму до сплати на касі для 4 типів клієнтських карток - new amator loyal vip. При сумі покупки від 5000 вони отримують знижки 5 10 15 та 20 відсотків відповідно. При суммі покупки від 10000 тільки loyal та vip отримують НА СУМУ ІЗ ВЖЕ ДІЮЧОЮ ЗНИЖКОЮ ще додаткові 10% знижки. При суммі до 5000 - показувати на яку суму потрібно добрати товарів, щоб була знижка. */

function totalDiscount(typeCard, fullAmount) {
  let discount = 0;
  let amountDue = fullAmount - fullAmount * discount;
  if (typeCard == "new" && fullAmount >= 5000) {
    discount = 0.05;
  } else if (typeCard == "amator" && fullAmount >= 5000) {
    discount = 0.1;
  } else if (typeCard == "loyal" && fullAmount >= 5000) {
    discount = 0.15;
  } else if (typeCard == "vip" && fullAmount >= 5000) {
    discount = 0.2;
  }

  if ((typeCard == "loyal" || typeCard == "vip") && fullAmount >= 10000) {
    amountDue = amountDue * 0.9;
  }
  if (fullAmount < 5000) {
    5000 - fullAmount;
  }
  console.log(amountDue);
}
console.log(totalDiscount("new", 12000));
// function totalDiscount(typeCard) {
//   let fullAmount;
//   let discount;
//   let amountDue = fullAmount - fullAmount * discount;
// }
