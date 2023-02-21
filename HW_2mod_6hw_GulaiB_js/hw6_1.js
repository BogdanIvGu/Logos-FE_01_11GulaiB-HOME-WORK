                            // // Перша задача

// const fibenachi = (num) => {
//     let first = 1;
//     let second = 1;
//     let result = "";

//     for (let i = 0; i < num; i++) {
//       result += first + " ";
//       const temp = first;
//       first = second;
//       second += temp;
//     }

//     console.log(result);
//   };

//   // Приклади використання:
//   fibenachi(5); // 1 1 2 3 5
//   fibenachi(10); // 1 1 2 3 5 8 13 21 34 55

                                 // // Друга задача 1варіант

// const sumOfGP = function(n, q) {
//     let result = 1;
//     let b = 1;

//     for (let i = 1; i < n; i++) {
//       b *= q;
//       result += b;
//     }

//     return result;
//   }

//   console.log(sumOfGP(5, 2)); // 31
//   console.log(sumOfGP(4, 3)); // 40

                                //   // Друга задача 2варііант
//   const sumOfGP = function(n, q) {
//     return 1 * (1 - q ** n) / (1 - q);
//   }

//   console.log(sumOfGP(5, 2)); // 31
//   console.log(sumOfGP(4, 3)); // 40

                                     // Третя задача 1варіант

// let start = prompt (`Enter first number`);
// let end = prompt (`Enter last number`);
// const simpleNumber = function(start, end) {
//     for(let i = start; i <= end; i++) {
//       let isPrime = true;
//       if (i === 1) {
//         continue;
//       }
//       for(let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime) {
//         console.log(i);
//         alert (i);
//       }
//     }
//   };

//   simpleNumber(start, end);

                                // Третя задача 2 варіант

let start = prompt(`Enter first number`);
let end = prompt(`Enter last number`);

const simpleNumber = (start, end) => {
  for (let i = start; i <= end; i++) {
    let isPrime = true;
    if (i === 1) {
      continue;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
      alert(i);
    }
  }
};

simpleNumber(start, end);
