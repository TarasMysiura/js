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

function getEvenNumbers(start, end) {
  // Change code below this line
  const newArr = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) newArr.push(i);
  }

  return newArr;
  // Change code above this line
}
console.log(getEvenNumbers(6, 12));