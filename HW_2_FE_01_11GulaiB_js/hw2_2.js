// Друга задача

// Працює не коректно. Допоможіть розібратись. не працює на скасування

// let userName = "name";
// let userPasword = "Логос";

// let nameIn = prompt("Введіть імя Латиницею", " Use name");
// if (nameIn == userName) {
//     let paswordIn = prompt(" Введіть пароль Кирилицею", " Use your pasword");
//      if (paswordIn == userPasword) {
//         alert("Ласкаво просимо!");
//     }
//     else if (paswordIn != userPasword ) {
//         alert("Пароль невірний!");
//     }
//     // на скасування не працюєю
//     else {
//         alert("Вхід скасований");
//     }
// }

// else if (nameIn != userName) {
//     alert("Я Вас не знаю!");
// }
// // на скасування не працюєю
// else {
//     alert("Вхід скасований");
// }

const userName = "Name";
const paswordIn = "Логос";
let namedIn = prompt(
  " Введіть імя Латиницею",
  "Use your name",
);

if (namedIn === null) {
  alert("Вхід скасований");
} else if (namedIn !== userName) {
  alert("Я вас не знаю!");
} else if (namedIn === userName) {
  let passIn = prompt(
    " Введіть пароль Кирилицею",
    " Use your pasword",
  );
  if (passIn === null) {
    alert("Вхід скасований");
  } else if (passIn !== paswordIn) {
    alert("Пароль невірний!");
  } else if (passIn === paswordIn) {
    alert("Ласкаво просимо!");
  }
}