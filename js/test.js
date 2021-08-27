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

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newArray = [];

  numbers.forEach(number => {
    if (number % 2 === 0) {
      newArray.push(Number(number + value));
      continue
    }
    newArray.push(number);
  });

  // Пиши код выше этой строки
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
