// Перша задача

let numberOfManth = parseInt(prompt(" Введіть номер місяця", "Значення від 1 до 12"));
// let numberOfManth = +prompt(" Введіть номер місяця" , "Значення від 1 до 12");

switch (numberOfManth) {

    case 1:
    case 2:
    case 12:
        alert("Зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("Весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("Літо");
        break;
    case 9:
    case 10:
    case 11:
        alert("Осінь");
        break;
    default:
        alert("Невже так важко виконати рекомендації і ввести число від 1 до 12 ??? Ану спробуйТе ще раз ввести, але цього разу без жартів!!!");
}

// if (numberOfManth == 1) {
//     alert ("Зима");
// }
// else if (numberOfManth == 2) {
//     alert("Зима");

// }
// else if (numberOfManth == 3) {
//     alert("Весна");
// }
// else if (numberOfManth == 4) {
//     alert("Веснаь");
// }
// else if (numberOfManth == 5) {
//     alert("Весна");
// }
// else if (numberOfManth == 6) {
//     alert("Літо");
// }
// else if (numberOfManth == 7) {
//     alert("Літо");
// }
// else if (numberOfManth == 8) {
//     alert("Літо");
// }
// else if (numberOfManth == 9) {
//     alert("Осінь");
// }
// else if (numberOfManth == 10) {
//     alert("Осінь");
// }
// else if (numberOfManth == 11) {
//     alert("Осінь");
// }
// else if (numberOfManth == 12) {
//     alert("Зима");
// }
// else if (numberOfManth == null) {
//     alert("Чому ви нічого не ввели ? Спробуйте ввести номер місяця згідно рекомендацій");
// }
// else  {
//     alert("Невже так важко виконати рекомендації і ввести число від 1 до 12 ??? Ану спробуйТе ще раз ввести, але цього разу без жартів!!!");
// }