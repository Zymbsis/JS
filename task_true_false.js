console.log(changeNumber(-3));
console.log(changeNumber(-2));
console.log(changeNumber(-1));
console.log(changeNumber(0));
console.log(changeNumber(1));
console.log(changeNumber(2));
console.log(changeNumber(3));
// ***********************************************
console.log(true && 3); // 3
console.log(false && 3); // false
console.log(true && 4 && "kiwi"); // kiwi
console.log(true && 0 && "kiwi"); // 0
console.log(true || 3); // true
console.log(true || 3 || 4); // true
console.log(true || false || 7); // true
console.log(null || 2 || undefined); // 2
console.log((1 && null && 2) > 0); // false
console.log(null || (2 && 3) || 4); // 3
console.log(1 && 5); // 5
console.log(5 && 1); // 1
console.log(0 && 2); // 0
console.log(2 && 0); // 0
console.log("" && "Mango"); // ""
console.log("Mango" && ""); // ""
console.log("Mango" && "Poly"); // "Poly"
console.log("Poly" && "Mango"); // "Mango"
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true
console.log(!true); // false
console.log(!false); // true
console.log(!3); // false
console.log(!"Mango"); // false
console.log(!0); // true
console.log(!""); // true

const isOnline = true;
const isNotOnline = !isOnline; // false
