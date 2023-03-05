
// // Завдання 1

// // Напишіть функцию arrCopy(arr), яка копією масив не змінюючи оригінал arr.
// // •	const arr1 = arrCopy([1,2,3]) – запише в змінну масив [1,2,3].
// // •	const arr2 = arrCopy([1,2,3,[10,20]]) – запише в змінну масив [1,2,3,[10,20]].
// // ------------------------------------------------------------------------------------------

// function arrCopy(arr) {
//   return [...arr];
// }
// const arr1 = arrCopy([1, 2, 3]);
// const arr2 = arrCopy([1, 2, 3, [10, 20]]);


// // Завдання 2

// // Напишіть функцію arrToString(arr), яка приймає масив arr з чисел і повертає вже масив з стрічками:
// // •	const arr1 = arrToString([1,2,3]) – запише в змінну масив [‘1’,‘2’,‘3’].
// // •	const arr2 = arrToString([10,200,3333]) – запише в змінну масив [‘10’,‘200’,‘3333’].
// // ------------------------------------------------------------------------------------------

// function arrToString(arr) {
//   console.log(arr.map(String));
//   return arr.map(String);
// }
// arrToString([1, 2, 3]);
// arrToString([10, 200, 3333]);


// Завдання 3

// Напишіть функцію getLength(arr), яка приймає масив arr з стрічок і повертає новий масив з довжиною елементів тих стрічок:
// •	const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]) – запише в змінну масив [4,5,3].
// •	const arr2 = getLength([‘Oleksiy’,‘Andriana’]) – запише в змінну масив [7,8].
// ------------------------------------------------------------------------------------------


// const arr1 = getLength(['Ivan', 'Pavlo', 'Ira']);
// const arr2 = getLength(['Oleksiy', 'Andriana']);
// // function getLength(arr) {
// //   return arr.map(function (str) {
// //     console.log(str.length);
// //     return str.length;
// //   });
// // }

// const getLength = arr => arr.map( str => str.length);
// getLength(arr1);
// getLength(arr2);



// Завдання 4

// Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок і повертає новий
// масив де виключені елементи, що повторюються з масиву arr(ігнорувати чутливість до регістру):
// •	const arr1 = removeDuplicates([‘html’,‘css’,‘html’,‘js’])
// – запише в змінну масив[‘html’,‘css’,‘js’].
// •	const arr2 = removeDuplicates([‘html’,‘css’,‘js’,‘html’,‘js’,‘python’,‘js’,‘scss’])
//  – запише в змінну масив[‘html’,‘css’,‘js’,‘python’,‘scss’]).


const removeDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) === index);

const arr1 = removeDuplicates([`html`, `css`, `html`, `js`]);
const arr2 = removeDuplicates([`html`, `css`, `js`, `html`, `js`, `python`, `js`, `scss`]);

console.log(arr1);
console.log(arr2);
