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

// let n = prompt('Введіть число для обчислення факторіала всіх натуральних чисел' , ' Введіть число')
// let result = 1;
// if (n % 1 == 0) {
// for ( let i = 1; i <= n; i++){
// console.log(`Лічильник  ${i}`);
// result *= i;
// }
// console.log(`Факторіал ${result}`);
// alert( `Результат визначення факторіала , ${result}`);
// }
// else {
// alert( `Фатал Ерор Маза Факар`); 
// }

                                // Завдання 2

// for (let c = 1000; c <=9999; c += 3) {
// document.write (` <h1> Число  ${c} </h1> `);
// console.log(c);
// }

                                // Завдання 3

// for (let c = 1; c <=55; c += 2) {
//     document.write (` <h1> Число  ${c} </h1> `);
//     console.log(c);
//     }

                                // Завдання 4

// for (let c = 90; c >=0; c -= 5) {
//     document.write (` <h1> Число  ${c} </h1> `);
//     console.log(c);
//     }

                                // Завдання 5

// let result = 1;
// for (let c = 1; c <=20; c++ ) {
//     result *= 2;
//     document.write (` <h1> Число  ${result} </h1> `);
//     console.log(result);
//     }

// інший варіант

// for (let a = 1, result = 2; a <=20; a++, result *= 2) {
//     document.write (` <h1> Число  ${result} </h1> `);
//     console.log(result);
//     }

                                // Завдання 6

// for (let a = 2; a <=10000; a = 2*a-1) {
//     console.log(a);
//     document.write (` <h1> Число  ${a} </h1> `);
//     }


                                // Завдання 7

// for (let a = -166; a <100; a = 2*a+200) {
//     if (a > -100 && a < 100){
//     console.log(a);
//     document.write (` <h1> Число  ${a} </h1> `);
//     }

//     // && a < 100 - зайве бо умова вже прописана в циклі 


                                // Завдання 8
let a = prompt('Введіть число для обчислення степеня' , 'Число');
let b = prompt('Введіть значення степеня');
let resalt =1;

for (let i = 1; i <= Math.abs(b); i++) { 
    if (b > 0){
        resalt*=a;
        console.log(a);
    }
    else if (b < 0) {
        resalt = (1/(resalt*a));
        console.log(a);
    }
    else if (b == 0) {resalt = 1;
        console.log(resalt);
    }
    else {
        document.write ('Значення введені не вірно');
    }
    console.log(resalt);
}
document.write (` <h1> Значення приведення степеня  ${resalt} </h1> `);