

Завдання 1
// Напишіть функцію getArea(number), яка обчислює площу круга. Для визначення площі
// використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:
// •	Якщо передане число повертати - Площа дорівнює стільки то квадратних одиниць.
// •	Якщо передали не число - Повинно бути числове значення.
// •	Якщо в функцію нічого не передали - Будь ласка, введіть радіус!


let number = prompt("Введіть значення радіус", "Значення в метрах")
function getArea(number) {
  if (number === null) {
    console.log('Будь ласка, введіть радіус! Відбулось скасування');
    return alert('Будь ласка, введіть радіус! Відбулось скасування');
  }
  else if (number === "") {
    console.log('Пустий рядок');
    return alert('Пустий рядок');
  }
  else if (isNaN(number)) {
    console.log('Повинно бути числове значення.');
    return alert('Повинно бути числове значення.');
  }
  else {
    const area = Math.PI * Math.pow(number, 2);
    console.log(`Площа дорівнює ${area.toFixed(2)} квадратних одиниць.`);
    return alert(`Площа дорівнює ${area.toFixed(2)} квадратних одиниць.`);
  }
}
getArea(number);

// // // Друга  задача
// // Напишіть функцію getSqrt(number), яка вираховує корінь квадратний. Для визначення кореня використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:

// // Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.
// // Якщо передали не число - Повинно бути числове значення.
// // Якщо число менше 0 - Введіть додатнє число.
// // Якщо в функцію нічого не передали - Будь ласка, введіть число!


// let number = prompt("Введіть значення для обчислення кореня");
// function getSqrt(number) {

//   if (isNaN(number)) {
//     console.log(typeof number);
//     console.log('Повинно бути числове значення.');
//     return alert('Повинно бути числове значення.');
//   }
//   else if (number < 0) {
//     console.log('Введіть додатнє число.');
//     console.log(typeof number);
//     return alert('Введіть додатнє число.');
//   }
//   else if (number === "") {
//     console.log('Пустий рядок');
//     return alert('Пустий рядок');

//   }
//   else if (number === null) {
//     console.log(typeof number);
//     console.log('Будь ласка, введіть число! Ви скасували введення');
//     return alert('Будь ласка, введіть число! Ви скасували введення');
//   }
//   else {
//     const result = Math.sqrt(number);
//     console.log(typeof number);
//     console.log(`Квадратний корінь з ${number} дорівнює ${result.toFixed(2)}.`);
//     return alert(`Квадратний корінь з ${number} дорівнює ${result.toFixed(2)}.`);
//   }
// }
// getSqrt(number);


// Завдання 3.

// Створіть об’єкт MyMath який буде реалізовувати наступний функціонал:

// MyMath.PI – це властивість яка має повертати число Pi.
// MyMath.pow(number, degree) – це метод який має повертати число в певній степені.
// MyMath.abs(number) – це метод який має повертати модулю числа.
// MyMath.max(number1, number2…) – це метод який має повернути максимальне число з переданих. Кількість чисел необмежена.
// MyMath.min(number1, number2…) – це метод який має поаернути мінімальне число з переданих. Кількість чисел необмежена.
// Також ви маєте повернути наступні повідомлення при використанні методів, якщо:
// Якщо передали не число - Повинно бути числове значення.
// Якщо в функцію нічого не передали - Будь ласка, введіть число або числа(в залежності від методу)!
// При створенні цих методів використання об’єкту Math заборонене!


// const MyMath = {
//   PI: 3.14,
//   pow: function(number, degree) {
//     if (isNaN(number) || isNaN(degree)) {
//       console.log("Повинно бути числове значення.");
//       return "Повинно бути числове значення.";
//     }
//     return number ** degree;
//   },
//   abs: function(number) {
//     if (isNaN(number)) {
//       console.log("Повинно бути числове значення.");
//       return "Повинно бути числове значення.";
//     }
//     return number >= 0 ? number : -number;
//   },
//   max: function() {
//     let maxNumber = -Infinity;
//     if (arguments.length === 0) {
//       console.log("Будь ласка, введіть число або числа!");
//       return "Будь ласка, введіть число або числа!";
//     }
//     for (let i = 0; i < arguments.length; i++) {
//       if (typeof arguments[i] !== "number") {
//         console.log("Повинно бути числове значення.");
//         return "Повинно бути числове значення.";
//       }
//       if (arguments[i] > maxNumber) {
//         maxNumber = arguments[i];
//       }
//     }
//     return maxNumber;
//   },
//   min: function() {
//     let minNumber = Infinity;
//     if (arguments.length === 0) {
//       console.log("Будь ласка, введіть число або числа!");
//       return "Будь ласка, введіть число або числа!";
//     }
//     for (let i = 0; i < arguments.length; i++) {
//       if (typeof arguments[i] !== "number") {
//         console.log("Повинно бути числове значення.");
//         return "Повинно бути числове значення.";
//       }
//       if (arguments[i] < minNumber) {
//         minNumber = arguments[i];
//       }
//     }
//     return minNumber;
//   },
// };