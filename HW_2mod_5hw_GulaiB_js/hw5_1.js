// // Перша задача

// let numberOfManth = parseInt(prompt(" Введіть номер місяця", "Значення від 1 до 12"));
// // let numberOfManth = +prompt(" Введіть номер місяця" , "Значення від 1 до 12");

// switch (numberOfManth) {

//     case 1:
//     case 2:
//     case 12:
//         alert("Зима");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert("Весна");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert("Літо");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert("Осінь");
//         break;
//     default:
//         alert("Невже так важко виконати рекомендації і ввести число від 1 до 12 ??? Ану спробуйТе ще раз ввести, але цього разу без жартів!!!");
// }


// Друга задача

// let n = prompt(
//     "Введіть число для перевірки чи воно просте",
//     " Введіть число",
//   );
  
//   function primality(n) {
//     if (n === null) {
//       return alert(
//         "Відбулось скасування",
//       );
//     } else if (isNaN(n)) {
//       return alert(
//         "введіть коректне значення",
//       );
//     } else {
//       for (let i = 2; i < n; i++) {
//         if (n % i === 0)
//           return alert(
//             `число ${n} не є простим`,
//           );
//       }
//       return alert(
//         `число ${n} є простим`,
//       );
//     }
//   }



// Друга задача


let n = prompt('Введіть число для перевірки чи воно просте', ' Введіть число');

function isPrimeNumber(n) {
  if (n === null) {
    console.log('Відбулось скасування');
    alert('Відбулось скасування');
  } else if (isNaN(n) || !Number.isInteger(+n) || +n <= 1) {
    console.log('Введіть коректне натуральне число');
    alert('Введіть коректне натуральне число');
  } else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`Число ${n} є простим`);
      alert(`Число ${n} є простим`);
    } else {
      console.log(`Число ${n} не є простим`);
      alert(`Число ${n} не є простим`);
    }
  }
}

isPrimeNumber(n);


// Невдала спроба
// let n = prompt('Введіть число для перевірки чи воно просте', ' Введіть число')
// console.log(typeof(n))

// function namber(n) {

//     if (isNaN(n)) {
//         console.log(`введіть коректне значення `);
//         alert(`введіть коректне значення `);
//         // не розумію чому NOt a Namber  не працює коли перед promt стоїть плюс +
//     }
//     else if (n === null) {
//         console.log(`Відбулось скасування `);
//         return alert(`Відбулось скасування `);
//     }

//     else if (!isNaN(n)) {
//         for (let i = 2; i <= n; i++) {
//             let check = true;
//             if (n % 1 == 0) {
//                 check = false;
//             }
//         }
//         console.log(`число ${n} є простим`);
//         return alert(`число ${n} є простим`);
//     }

//     return n;
// }

// namber(n);


// Третя задача 
// зроблено але є уточнюючі питання


// function maxNamber(...arg) {
//     let max = arg[0];
//     for (let i = 0; i<arg.length; ++i) {
//         if (arg[i] <= max ) continue; 
//         // чому без верхнього рядка (if (arg[i] <= max ) continue; ) функція не працює, 
//         // і видає тільки останні значення масиву за максимум, 
//         // хоч те що я записав нижче ( if (arg[i] > max ); ), воно мало б перезаписувати завжди максимум
//         if (arg[i] > max );
//         max = arg[i];
//     }
//     console.log(max);
//     console.log(typeof(arg));
//     // console.log(`Математичний метод ${Math.max(...arg)}`)
    
    
// }
// maxNamber(5, -2, 30, 36, 0);
// maxNamber(5, -2, 10, -20, -5, 9);


