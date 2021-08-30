// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);

// ---------------------------------------------------------

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Пиши код выше этой строки
// }

// getCommonElements([1, 2, 3], [2, 4]);

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// -----------------------------------------------------

// СТРЕЛОЧНЫЕ ФУНКЦИИ

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) =>
//  {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// ------------------------------------------------------------

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;

// // Пиши код выше этой строки

// -------------------------------------------------------------

// Анонимные стрелочные функции отлично подходят как коллбеки

// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// Стрелочную коллбек - функцию также можно объявлять отдельно
// и передавать на неё ссылку.

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);

// --------------------------------------------------------------------
// Пиши код ниже этой строки
// const  calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) =>
//     totalPrice += item
//   );

//   return totalPrice;
// }
// // Пиши код выше этой строки

// ----------------------------------------------------------------------

// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// ---------------------------------------------------------------

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Пиши код выше этой строки
//   return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// ---------------------------------------------------------

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки

//   const newArray = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });
//   return newArray;

//   // Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// ----------------------------------------------------------

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

// ------------------------------------------------

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика'],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap(book => book.genres);

// ----------------------------------------------------------------

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// const getUserNames = users => {
//   return users.map(user => user.name);
// };

// console.log(getUserNames);

// ----------------------------------------------

// // Пиши код ниже этой строки
// const getUserEmails = users => { return users.map(user => user.email)

//   };
//   // Пиши код выше этой строки

// ----------------------------------------------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// ------------------------------------------------------------------

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index,
// );

// -------------------------------------------------------------

// exercise 17

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// -------------------------------------------------------------

// exercise 18

// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//  return users.filter( ({eyeColor}) => eyeColor === color )

// };
// // Пиши код выше этой строки

// --------------------------------------------------------------------

// exercise 19

// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({ age }) => age > minAge && age < maxAge);
// };
// // Пиши код выше этой строки

// ---------------------------------------------------------------

// exercise 20

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(({ friends }) => {
//         if (friends.includes(friendName))
//     return friends;

//   });
// };

// console.log(getUsersWithFriend);

// ---------------------------------------------------------

// exercise 21

// // Пиши код ниже этой строки
// const getFriends = (users) => {
//   return users.flatMap((user) =>user.friends).filter((friend, index,allUsers) => allUsers.indexOf(friend) ===index);
// };
// // Пиши код выше этой строки

// ----------------------------------------------------------------
// exercise 22

// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//    return users.filter (({isActive}) => isActive);
// };
// // Пиши код выше этой строки

// ----------------------------------------------------------------------

// exercise 23

// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//   return users.filter (({isActive}) => !isActive)
// };
// // Пиши код выше этой строки

// -----------------------------------------------------------------------
// exercise 24

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// -------------------------------------------------------------------------
// exercise 25

// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email)
// };
// // Пиши код выше этой строки

// --------------------------------------------------------------------

// exercise 26

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(
//   element => element % 2 === 0,
// );
// const eachElementInSecondIsOdd = secondArray.every(
//   element => element % 2 !== 0,
// );

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);

// ---------------------------------------------------------------
// exercise 27

// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//   return users.every(({isActive}) => isActive )
// };
// // Пиши код выше этой строки

// -------------------------------------------------------------------
// exercise 28

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);

// ------------------------------------------------------------------

// exercise 29

// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//    return users.some(({isActive}) => isActive)
// };
// // Пиши код выше этой строки

// ---------------------------------------------------------------------

// exercise 30

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, element) => acc + element, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// -------------------------------------------------------
// exercise 31

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);
// ------------------------------------------------------------------
// exercise 32

// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => (total + user.balance) ,0)
// };
// // Пиши код выше этой строки

// ------------------------------------------------------------------------

// exercise 33

// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//    return users.reduce((acc, user) => acc + user.friends.length ,0)
// };
// // Пиши код выше этой строки
