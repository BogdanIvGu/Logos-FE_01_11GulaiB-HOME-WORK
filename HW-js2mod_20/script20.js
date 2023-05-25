// Завдання 1. forEach
// Заданий масив з числами. Знайдіть суму цих чисел.
// let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.

let arr1 = [5, 6, 7, 8, 9];
let sum = 0;
arr1.forEach(element => {
    sum += element;
});
console.log(sum);


// ------------------------------------------------------------------------------------------
// Завдання 2. Map
// Заданий масив з числами. Створіть новий масив, що складається з квадратів цих чисел.
// let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.

let arr2 = [5, 6, 7, 8, 9];
let square = arr2.map(number => number * number);
console.log(square);

// ------------------------------------------------------------------------------------------
// Завдання 3. Every
// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
// {name: 'Petro', country: 'Ukraine'},
// {name: 'Miguel', country: 'Cuba'}
// ]
// Результат вивести в консоль.

let arr3 = [
{ name: 'Ivan', country: 'Ukraine' },
{name: 'Petro', country: 'Ukraine'},
{name: 'Miguel', country: 'Cuba'}
]

let checkUkraine = arr3.every(item => item.country.toLowerCase() == 'Ukraine');
console.log(checkUkraine);


// let allInUkraine = arr3.every(function(obj) {
//   return obj.country === 'Ukraine';
// });

// console.log(allInUkraine);

// ------------------------------------------------------------------------------------------

// Завдання 4. Some
// Заданий масив об’єктів. Перевірте, чи всі хоч один ключ country має значення 'Cuba'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
// {name: 'Petro', country: 'Ukraine'},
// {name: 'Miguel', country: 'Cuba'}
// ]
// Результат вивести в консоль.

let arr4 = [{name: 'Ivan', country: 'Ukraine'},
    {
        name: 'Petro',
        country: 'Ukraine'
    },
    {
        name: 'Miguel',
        country: 'Cuba'
    }
]

let isSomeCuba = arr4.some(item => item.country.toLowerCase() == 'cuba');
console.log(isSomeCuba);



// ------------------------------------------------------------------------------------------

// Завдання 5. Filter
// Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви. Залиште в ньому тільки підмасиви.
// let arr = [1, 'string', [3, 4], 5, [6, 7]];
// Результат вивести в консоль.

let arr5 = [1, 'string', [3, 4], 5, [6, 7]];
let subArrays = arr5.filter(function (element) {
    return Array.isArray(element);
});
console.log(subArrays);



// ------------------------------------------------------------------------------------------

// Завдання 6. Reduce
// Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля.
// Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як далі стоїть елемент з числом 0.
// let arr = [1, 2, 5, 0, 4, 5, 6];
// Результат вивести в консоль.
let arr6a = [1, 2, 5, 0, 4, 5, 6];

let sumToZero = arr6a.reduce(function(acc, curr) {
  if (curr === 0) {
    acc.finished = true;
  }
  if (!acc.finished) {
    acc.total += curr;
  }
  return acc;
}, { total: 0, finished: false });

console.log(sumToZero.total);

// Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.
// let arr = [1, 2, 3, 0, 4, 5, 6];
// Результат вивести в консоль.

let arr6b = [1, 2, 3, 0, 4, 5, 6];
let count = arr6b.reduce(function(acc, curr, index) {
  if (acc.sum < 10) {
    acc.sum += curr;
    acc.count++;
  }
  return acc;
}, { sum: 0, count: 0 });

console.log(count.count);



// ------------------------------------------------------------------------------------------

// Завдання 7. Любим методом
//Заданий масив з числами. Залиште в ньому тільки позитивні числа. Потім вийміть квадратний корінь і цих чисел.
// let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// Результат вивести в консоль.

let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];

let result = arr7.filter(num => num > 0).map(num => Math.sqrt(num)); 
console.log(result); 