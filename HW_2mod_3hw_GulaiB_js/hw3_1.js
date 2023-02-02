                                // Завдання 1  Не вийшла


// let n = prompt('Введіть число для обчислення факторіала всіх натуральних чисел' , ' Введіть число')
// let result = 1;
//     while(n){
//         result *= n--;
//         alert( "Результат визначення факторіала   " , result);
//     }
    

// function factorial(let n){
//     n = prompt('Введіть число для обчислення факторіала всіх натуральних чисел' , ' Введіть число')
//     var result = 1;
//     while(n){
//         result *= n--;
//     }
//     return result;
//     alert( "Результат визначення факторіала   " , result);
// }

                                    // ПРАВИЛЬНА ВІДПОВІДЬ  РОЗВЯЗОК

let n = prompt('Введіть число для обчислення факторіала всіх натуральних чисел' , ' Введіть число')
let result = 1;
if (n % 1 == 0) {
for ( let i = 1; i <= n; i++){
console.log(`Лічильник  ${i}`);
result *= i;
}
console.log(`Факторіал ${result}`);
alert( `Результат визначення факторіала , ${result}`);
}
else {
alert( `Фатал Ерор Маза Факар`); 
}

                                // Завдання 2

// for (let c = 1000; c <=9999; c += 3) {
// document.write ('Число    ', c ,"       ");
// console.log(c);
// }

                                // Завдання 3

// for (let c = 1; c <=55; c += 2) {
//     document.write ('Число    ', c ,"       ");
//     console.log(c);
//     }

                                // Завдання 4

// for (let c = 90; c >=0; c -= 1) {
//     document.write ('Число    ', c ,"       ");
//     console.log(c);
//     }

                                // Завдання 5  не виконано

// for (let c = 2; c <=20; c *= 2) {
//     // document.write ('Число    ', c ,"       ");
//     console.log(c);
//     }

                                // Завдання 6

// for (let a = 2; a <=10000; a = 2*a-1) {
//     console.log(a);
//     // document.write ('Число    ', d ,"       ");
//     }

