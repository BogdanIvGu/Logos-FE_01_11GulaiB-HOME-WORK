// Друга задача

// Працює не коректно. Допоможіть розібратись. не працює на скасування

let userName = "name";
let userPasword = "Логос";

let nameIn = prompt("Введіть імя Латиницею", " Use name");
if (nameIn == userName) {
    let paswordIn = prompt(" Введіть пароль Кирилицею", " Use your pasword");
     if (paswordIn == userPasword) {
        alert("Ласкаво просимо!");
    }
    else if (paswordIn != userPasword ) {
        alert("Пароль невірний!");
    }
    // на скасування не працюєю
    else {
        alert("Вхід скасований");
    }
}

else if (nameIn != userName) {
    alert("Я Вас не знаю!");
}
// на скасування не працюєю
else {
    alert("Вхід скасований");
}

