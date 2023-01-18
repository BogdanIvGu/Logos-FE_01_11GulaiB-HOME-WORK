
let penPrise = 5.25;
let pensilPrise = 3.50;
let numberOfPen;
let numberOfPensil;


numberOfPen = prompt("Введіть кількість куплених ручок. Ціна ручки 5,25 грн", 'Введіть кількість куплених ручок');
numberOfPensil = prompt("Введіть кількість куплених олівців. Вартість одного олівця 3.50 грн", 'Введіть кількість куплених олівців');
let sumOfPrise = ((penPrise*numberOfPen)+(pensilPrise*numberOfPensil));
// console.log(sumOfPrise)
document.write("Загальна вартість купівлі становить - ", sumOfPrise , " грн. ");
let confirming = confirm(" Ви впевнені ?")
// чому confirm виводиться перед Друком Загальної вартості ? Хоч і стоїть в кінці коду ....
