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
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );
// console.log(calculateMeanTemperature({
//   today: { low: 37, high: 40 },
//   tomorrow: { low: 33, high: 38 },
// })
// );
// !=======================27=============================
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// !=======================28=============================

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [... firstGroupScores, ... secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(... allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// !======================29=================================
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// console.log(finalSettings);
// !=========================30==============================
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return {completed, category, priority, ...data}
//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));

// !==========================31================================
// // Change code below this line
// function add(...args) {
//     let total = 0
//     for (const arg of args) {
//       total += arg
//     }
//     return total
//     // Change code above this line
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

// !============================32===============================

// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (let i = 1; i < args.length; i += 1) {
//     if (args[i] > args[0]) {
//       total += args[i];
//     }
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// !=========================33===================================
// // Change code below this line
// function findMatches(lists, ...args) {
//   const matches = []; // Don't change this line
//   for (const agr of args) {
//     for (const list of lists) {
//       if (list === agr) {
//         matches.push(list);
//       }
//     }
//   }

//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
// !==================34================================
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },

//   // Change code above this line
// };
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
// !===============================35===============================
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     books = this.books.splice(this.books.indexOf(oldName), 1, newName);
//     return this.books;
//     // Change code below this line
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// // console.log(bookShelf.removeBook("Red sunset"));
// // console.log(bookShelf.updateBook("Sands of dune", "Dune"));
// !===============================36====================================
// const atTheOldToad = {
//   // Change code below this line
//     potions: [],
//   // Change code above this line
// };
// console.log(atTheOldToad.potions);
// !============================37==================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//     getPotions() {
//     return this.potions
// }
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
// !===========================38====================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//       this.potions.push(potionName);
//       return this.potions;
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));
// !==============================39==================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//       potions = this.potions.splice(this.potions.indexOf(potionName), 1);
//       return this.potions;
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// !===============================40===================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     potions = this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//          return this.potions;

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// !================================41===================================
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      const potionIndex = this.potions.indexOf(potion);
      if (potionName === potion.name) {
        this.potions.splice(potionIndex, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (oldName === potion.name) {
        potion.name = newName;
      }
    }

    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
);
