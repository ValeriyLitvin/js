// задача 2.1 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));

// задача 2.2 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";

//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));

// задача 2.3 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }

// console.log(checkStorage(100, 50));

// задача 2.4 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits);

// задача 2.5 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement);

// задача 2.6 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

// задача 2.7 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// задача 2.8 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);
// console.log(lastElementIndex);

// задача 2.9 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getExtremeElements(array) {
//   // Change code below this line
//   array.splice(1, array.length - 2);
//   return array;
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// задача 2.10 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));

// задача 2.11 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let words;
//   words = message.split(" ");
//   const price = words.length * pricePerWord;
//   return price;
//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// задача 2.12 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }

// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// );

// задача 2.13 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function slugify(title) {
//   const slug = title.toLowerCase().split(" ").join("-");
//   return slug;
// }
// console.log(slugify("Arrays for begginers"));

// задача 2.14 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// задача 2.15 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

// задача 2.16 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   // const allArray = firstArray.concat(secondArray).slice(0, maxLength);
//   return firstArray.concat(secondArray).slice(0, maxLength);
//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// задача 2.17 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// задача 2.18 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;

//   // Change code above this line
// }
// console.log(calculateTotal(3));

// задача 2.19 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// задача 2.20 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const price of order) {
//     total += price;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// задача 2.21 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function findLongestWord(string) {
//   // Change code below this line
//   let words = string.split(" ");
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < words.length; i += 1) {
//     wordLength = words[1].length;

//     if (words[i].length > wordLength) {
//       longestWord = words[i];

//       return longestWord;
//     }
//   }
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumpeds over the lazy dog"));

// задача 2.22 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// задача 2.23 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// // возвращает[(4, 5)];

// задача 2.24 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum"));

// задача 2.25 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const array = [];
//   for (const number of array1) {
//     if (array2.includes(number)) {
//       array.push(number);
//     }
//   }
//   return array;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// задача 2.26 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const orders of order) {
//     total += orders;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// задача 2.27 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (value < number) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// задача 2.28 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// Значение переменной a это число 0
// Значение переменной b это число 1
// Значение переменной c это число 3
// Значение переменной d это число 5
// Значение переменной e это число 2

// // задача 2.29
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));

// задача 2.30 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// задача 2.31 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// console.log(findNumber(2, 6, 5));

// задача 2.32 //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function includes(array, value) {
//   // Change code below this line
//   for (let arr of array) {
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));

const logins = ["a", "b", "c", "d"];

const find = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Знайшли ${loginToFind}`
    : `${loginToFind} такого не найшли`;
};
console.log(find(logins, "a"));
console.log(find(logins, "s"));
console.log(find(logins, "d"));
console.log(find(logins, "r"));
