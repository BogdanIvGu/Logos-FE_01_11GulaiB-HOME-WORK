// Перша задача
let statistic = 0;
let quaestion1 = parseInt(prompt("2+2=" , "Запиши сюди відповідь на 1 питання, і не смій позоритись"));
let answer1 = 4;
if (quaestion1 == answer1) {
    statistic++ ;
    alert ("Відповідь вірна");
    alert ("Кількість набраних балів " + statistic);
}
else {
    alert("Відповідь хибна, ай яй яй ...");
}

let quaestion2 = parseInt(prompt("2+3=" , "Запиши сюди відповідь на 2 питання"));
let answer2 = 5;
if (quaestion2 == answer2) {
    statistic++ ;
    alert ("Відповідь вірна");
    alert ("Кількість набраних балів " + statistic);
}
else {
    alert("Відповідь хибна, ай яй яй ... ");
}

let quaestion3 = parseInt(prompt("3+3=" , "Запиши сюди відповідь на 3 питання"));
let answer3 = 6;
if (quaestion3 == answer3) {
    statistic++ ;
    alert ("Відповідь вірна");
    alert ("Кількість набраних балів " + statistic + ". Так тримати!!!");
}
else {
    alert("Це нікуди не годиться!!! ...");
}

let quaestion4 = parseInt(prompt("3+3*3=" , "Запиши сюди відповідь на 4 питання"));
let answer4 = 12;
if (quaestion4 == answer4) {
    statistic++ ;
    alert ("Відповідь вірна");
    alert ("Кількість набраних балів " + statistic + ". Так тримати!!!");
}
else {
    alert("Невже ти забув, що спершу виконується множення і ділення, а після того вже додавання і віднімання?!!!! ... Будь уважніший!");
}

let quaestion5 = parseInt(prompt("2+3*3=" , "Запиши сюди відповідь на 5 питання"));
let answer5 = 11;
if (quaestion5 == answer5) {
    statistic++ ;
    alert ("Відповідь вірна");
    alert ("Кількість набраних балів " + statistic + ". Так тримати!!!");
}
else {
    alert("Невже ти забув, що спершу виконується множення і ділення, а після того вже додавання і віднімання?!!!! ... Будь уважніший!");
}

let quaestion6 = parseInt(prompt("3*3=" , "Запиши сюди відповідь на 6 питання"));
let answer6 = 9;
if (quaestion6 == answer6) {
    statistic++ ;
    alert ("Відповідь вірна");
    alert ("Кількість набраних балів " + statistic + ". Молодець!!!");
}
else {
    alert("Тобі має бути соромно!!! ...");
}

let quaestion7 = parseInt(prompt("3*10=" , "Запиши сюди відповідь на 7 питання"));
let answer7 = 30;
if (quaestion7 == answer7) {
    statistic++ ;
    alert ("Відповідь вірна " + statistic + ". Молодець!!!");
}
else {
    alert("Тобі має бути соромно!!! ...");
}

let quaestion8 = parseInt(prompt("1-3*10=" , "Запиши сюди відповідь на 8 питання"));
let answer8 = -29;
if (quaestion8 == answer8) {
    statistic++ ;
    alert ("Відповідь вірна. Кількість Балів " + statistic + ". Молодець!!!");
}
else {
    alert("Тобі має бути соромно!!! ...");
}

let quaestion9 = parseInt(prompt("1-1*2+2=" , "Запиши сюди відповідь на 9 питання"));
let answer9 = 1;
if (quaestion9 == answer9) {
    statistic++ ;
    alert ("Відповідь вірна. Кількість Балів " + statistic + ". Молодець!!!");
}
else {
    alert("Тобі має бути соромно!!!! ...");
}

let quaestion10 = parseInt(prompt("Останнє питання: 25+30+5-50=" , "Останнє питання на мільйон"));
let answer10 = 0;
if (quaestion10 == answer10) {
    statistic++ ;
    alert ("Відповідь вірна. Кількість Балів " + statistic + ". Молодець!!!");
}
else {
    alert("Правильна відповідь '0'. Прям як ти. Це дуже не втішний результат!");
}
alert ( "Загальна кількість балів становить  " + statistic);

let sumStstistic = statistic / 10 * 100;
alert ( "Статистика правильних відповідей  " + sumStstistic + " відсотків ");