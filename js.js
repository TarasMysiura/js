// function slugify(title) {
//   // Change code below this line
//   // const m_s = message.split(" ");

//   return title.toLowerCase().split(" ").join("-");
//     // return title.split(" ");
//   // return m_s;l
//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));

// ! ========================================

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ! =====================================
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArray = firstArray.concat(secondArray);
//     if (newArray.length > maxLength) {
//         return newArray.slice(0, maxLength );
//   }
//   return newArray;

//   // Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// !==============================================

// function calculateTotal(number) {
//   // Change code below this line
//     let total = 0;
//     for (let i = 1; i <= number; i += 1){
//         total += i;
//     }
//     return total;
//     // Change code above this line
// }
// console.log(calculateTotal(7));

// ! ==============================================
// function findLongestWord(string) {
//   // Change code below this line
//     const newString = string.split(" ");
//     let longTitle = newString[0];
//     for (const title of newString) {

//         if (title.length > longTitle.length) longTitle = title;

//     }
//      return longTitle
//       // Change code above this line
// }
// console.log(findLongestWord("Google do a roll"));

// !==============================================
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i += 1){
//         numbers.push(i);
//     }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));

// !=============================================

// function filterArray(numbers, value) {
//   // Change code below this line
//     const newArr = [];
//     for (const number of numbers) {
//         if (number > value) {
//           newArr.push(number);
//         }

//     }
//     return newArr;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// !==========================================

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);// Change this line;
// }
// console.log(checkFruit("plum"));

// !===========================================

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArr = [];
//   for (const temp of array1) {
//     if (array2.includes(temp)) newArr.push(temp);
//   }
//   return newArr;
//   // Change code above this line
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// !========================================

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const newArr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) newArr.push(i);
//   }

//   return newArr;
//   // Change code above this line
// }
// console.log(getEvenNumbers(6, 12));

// !==============================================
// function includes(array, value) {
//   // Change code below this line
//   for (const str of array) {
//     if (str === value) return true;
//   }
//   return false;
//     // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 1));

// !==============================================
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     // Change code below this line
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// !==============================================
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2225;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// console.log(keys);
// console.log(values);
// !===============================================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);
// !===============================================
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// !==================================================
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (const key of Object.keys(salaries)) {
//     totalSalary += salaries[key];
//     }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// !===================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
// !===================================
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const product of products) {
//   if (product.name === productName) {
//     return product.price;
//   }
// }
// return null;

//   // Change code above this line
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// !==================19=====================
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const rez = [];
//   for (const product of products) {
//     if (product[propName]) {
//       rez.push(product[propName]);
//     }
//   }
//   return rez;

//   // Change code above this line
// }
// console.log(getAllPropValues("name"));
// !=================20========================
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let total = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       total = product.price * product.quantity;
//     }
//   }
//   return total;

//   // Change code above this line
// }
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("Blaster"));

// !==========================21================================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// !========================22=================================

// !========================23=================================

// !========================24=================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
// !======================25=========================
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);
// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(tomorrowIcon);
// !============================26===========================
// Change code below this line
function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;
  
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
);
console.log(calculateMeanTemperature({
  today: { low: 37, high: 40 },
  tomorrow: { low: 33, high: 38 },
})
);
