//TODO =======================================================================================================================

// class User {
//   constructor(name, age, sex, email) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//     this.email = email;
//   }
//   getName() {}
// }

// const newUser = new User('Oleksandra', 30, 'female', 'post@mail.com');

// console.log(newUser); // {name: 'Oleksandra', age: 30, sex: 'female', email: 'post@mail.com'}
//TODO =======================================================================================================================

// class User {
//   constructor(param) {
//     this.name = param.name;
//     this.age = param.age;
//     this.sex = param.sex;
//     this.email = param.email;
//   }
//   getName() {}
// }

// const newUser = new User({
//   name: 'Oleksandra',
//   age: 30,
//   sex: 'female',
//   email: 'post@mail.com',
// });

// console.log(newUser); // {name: 'Oleksandra', age: 30, sex: 'female', email: 'post@mail.com'}
//TODO =======================================================================================================================

// const sasha = {
//   name: 'Oleksandra',
//   age: 30,
//   sex: 'female',
//   email: 'post@mail.com',
// };

// class User {
//   constructor(sasha) {
// this.userName = sasha.name;
// this.userAge = sasha.age;
// this.userEmail = sasha.email;
//   }
// }

// const newUser = new User(sasha);

// console.log(newUser); // {name: 'Oleksandra', age: 30, email: 'post@mail.com'}
//TODO =======================================================================================================================
// const sasha = {
//   name: 'Oleksandra',
//   age: 30,
//   sex: 'female',
//   email: 'post@mail.com',
// };

// class User {
//   constructor({ name, age, email }) {
//     this.userName = sasha.name;
//     this.userAge = sasha.age;
//     this.userEmail = sasha.email;
//   }
// }

// const newUser = new User(sasha);

// console.log(newUser); // {name: 'Oleksandra', age: 30, email: 'post@mail.com'}
//TODO =======================================================================================================================
// class User {
//   constructor(name, age, sex, email) {
//     this.userName = name;
//     this.userAge = age;
//     this.userSex = sex;
//     this.userEmail = email;
//   }
//   getName() {
//     return this.userName;
//   }
//   changeName(newName) {
//     this.userName = newName;
//   }
//   addSurname(surname) {
//     this.userSurname = surname;
//   }
// }

// const newUser = new User('Oleksandra', 30, 'female', 'post@mail.com');

// console.log(newUser); // {name: 'Oleksandra', age: 30, sex: 'female', email: 'post@mail.com'}
// console.log(newUser.getName()); // Oleksandra
// newUser.changeName('Sasha');
// console.log(newUser.getName()); // Sasha
// newUser.addSurname('Husar');
// console.log(newUser); // {userName: 'Sasha', usrAge: 30, userSex: 'female', userEmail: 'post@mail.com', userSurname: 'Husar'}
// newUser.userCity = 'Kyiv';
// console.log(newUser); // {userName: 'Sasha', usrAge: 30, userSex: 'female', userEmail: 'post@mail.com', userSurname: 'Husar', userCity: 'Kyiv'}
//TODO =======================================================================================================================
// class User {
//   #userName;
//   constructor(name, age, sex, email) {
//     this.#userName = name;
//     this.userAge = age;
//     this.userSex = sex;
//     this.userEmail = email;
//   }
//   getName() {
//     return this.#userName;
//   }
//   changeName(newName) {
//     this.#userName = newName;
//   }
//   addSurname(surname) {
//     this.userSurname = surname;
//   }
// }

// const newUser = new User('Oleksandra', 30, 'female', 'post@mail.com');
// console.log(newUser);
// newUser.userAge = 25;
// console.log(newUser);
// newUser.changeName('Sasha');
// console.log(newUser);
