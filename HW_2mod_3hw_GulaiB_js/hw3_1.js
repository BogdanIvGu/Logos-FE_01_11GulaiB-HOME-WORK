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

// let resalt = -1;
// for (let c = 1;  c <=55; c ++) {
//     resalt += 2;
//     document.write (` <h1> Число  ${resalt} </h1> `);
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

// інший варіант де більше дій в дужках циклу for/  Воно працює. Якщо так робити не можна, то поясніть чому.

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
let a = +prompt('Введіть число для обчислення степеня' , 'Число');
let b = +prompt('Введіть значення степеня');
let result =1;

for (let i = 1; i <= Math.abs(b); i++) { 
    if (b > 0){
        result*=a;
        console.log(a);
    }
    else if (b < 0) {
        result /=a;
        console.log(result);
    }
    else if (b == 0) {result = 1;
        console.log(result);
    }
    else {
        document.write ('Значення введені не вірно');
    }
    console.log(result);
}
document.write (` <h1> Значення приведення степеня  ${result} </h1> `);

 

                                // інший варіант 8

// let number = prompt("Input number");
// let power = prompt("Input pow");
// let result = Math.pow(number, power);
// console.log(result);
// document.write (` <h1> Значення приведення степеня  ${result} </h1> `);



// №3 та №8 неправильно виводить результат

// також цикл for має в дужках три дії ітерації  -  НЕ ФАКТ.

// виправіть всюди де у вас є хзайві дії в дужках   - Можна в дужках вказувати і більше дій. Я це бачив на інших навчальних курсах в Ютубі. 
// Я це зробив для досвіду, для експерименту, перевірити чи так працює. Працює. Якщо так не можна то поясніть чому ))