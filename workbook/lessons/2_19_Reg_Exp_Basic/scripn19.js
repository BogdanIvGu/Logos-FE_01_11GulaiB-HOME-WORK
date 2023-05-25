// RegExp - test(), exec()
// String - match(), replace(), split(), search()

// let regExp = new RegExp(pattern, flags);
// let regExp = /pattern/flags;

// let regExp = /hello/;
// console.log(regExp.test('hello'));
// console.log(regExp.test('bla bla hello'));
// console.log(regExp.test('hello bla bla '));
// console.log(regExp.test('bla hello bla '));
// console.log(regExp.test('bla hell bla '));

// ^ - починаєть стрічка з даного виразу
// let regExp = /^hello/;
// console.log(regExp.test('hello'));
// console.log(regExp.test('bla bla hello'));
// console.log(regExp.test('hello bla bla '));
// console.log(regExp.test('bla hello bla '));
// console.log(regExp.test('bla hell bla '));

// $ - стрічка закінчуєть на даний вираз
// let regExp = /hello$/;
// console.log(regExp.test('hello'));
// console.log(regExp.test('bla bla hello'));
// console.log(regExp.test('hello bla bla '));
// console.log(regExp.test('bla hello bla '));
// console.log(regExp.test('bla hell bla '));

// ^...$ - регулярний вираз співпадає з цілою стрічкою
// let regExp = /^hello$/;
// console.log(regExp.test('hello'));
// console.log(regExp.test('bla bla hello'));
// console.log(regExp.test('hello bla bla '));
// console.log(regExp.test('bla hello bla '));
// console.log(regExp.test('bla hell bla '));

// [] - діапазон, або набір символів
// [a-z] - a,b,c,...z
// [A-Z] - A,B,C...Z
// [A-C] - A,B,C
// [0-9] - 0,1,2,...9
// [Kl9] - K, l, 9

// console.log(/[a-z]/.test('a'));
// console.log(/[a-z]/.test('1'));
// console.log(/[a-z]/.test('A'));
// console.log(/[a-z]/.test('@'));

// console.log(/[a-zA-Z0-9]/.test('a'));
// console.log(/[a-zA-Z0-9]/.test('1'));
// console.log(/[a-zA-Z0-9]/.test('A'));
// console.log(/[a-zA-Z0-9]/.test('@'));

// [^] - інверсія шаблону(заперечення шаблону)
// console.log(/[^a-zA-Z0-9]/.test('a'));
// console.log(/[^a-zA-Z0-9]/.test('1'));
// console.log(/[^a-zA-Z0-9]/.test('A'));
// console.log(/[^a-zA-Z0-9]/.test('@'));

// Метасимволи
// \d - збігається з будь-яким числом, то саме що і [0-9]
// \D - збігається з будь-яким не числом, то саме що і [^0-9]
// \w - збігається з будь-яким буквенно-числом значенням, то саме що і [a-zA-Z0-9]
// \W - збігається з будь-яким не буквенно-числом значенням, то саме що і [^a-zA-Z0-9]
// \s - збігається з будь-яким пробільним символом: пробіл, табуляція та символ нового рядка
// \S - збігається з будь-яким не пробільним символом
// \n - збігається з символом нового рядка
// \t - збігається з символом табуляції
// \uXXXX - збігається з символом Unicode, працює тільки з прапорцем "u"
// . - збігається з будь-яким символом крім символу нового рядка

// console.log(/\w/.test('a'));
// console.log(/\w/.test('1'));
// console.log(/\w/.test('A'));
// console.log(/\w/.test('@'));

// console.log(/\W/.test('a'));
// console.log(/\W/.test('1'));
// console.log(/\W/.test('A'));
// console.log(/\W/.test('@'));

// console.log(/\d/.test('a'));
// console.log(/\d/.test('1'));
// console.log(/\d/.test('A'));
// console.log(/\d/.test('@'));

// console.log(/\D/.test('a'));
// console.log(/\D/.test('1'));
// console.log(/\D/.test('A'));
// console.log(/\D/.test('@'));

// | - оператор або
// console.log(/Arsenal|Barcelona/.test('Arsenal'));
// console.log(/Arsenal|Barcelona/.test('Barcelona'));

// Кватифікатор
// + - повтор попереднього символу 1 чи більше разів

// console.log(/^\d$/.test('1'));
// console.log(/^\d$/.test('1222'));

// console.log(/^\d+$/.test('1'));
// console.log(/^\d+$/.test('123456'));
// console.log(/^Q\d+Z$/.test('Q1Z'));
// console.log(/^Q\d+Z$/.test('Q11111231Z'));
// console.log(/^Q[0-9]+Z$/.test('Q11111231Z'));
// console.log(/^Q[0-9]Z$/.test('Q1Z'));
// console.log(/^Q[0-9]Z$/.test('Q12Z'));
// console.log(/^Q\d+Z$/.test('QZ'));

// * - повтор попереднього символу 0 чи більше разів
// console.log(/^Q\d*Z$/.test('Q1Z'));
// console.log(/^Q\d*Z$/.test('Q123456Z'));
// console.log(/^Q\d*Z$/.test('QZ'));

// ? - повтор попереднього символу 0 чи 1 раз
// console.log(/^Q\d?Z$/.test('Q1Z'));
// console.log(/^Q\d?Z$/.test('Q123456Z'));
// console.log(/^Q\d?Z$/.test('QZ'));

// {n} - повтор попереднього символу n раз
// console.log(/^Q\d{3}Z$/.test('Q1Z'));
// console.log(/^Q\d{3}Z$/.test('Q111Z'));
// console.log(/^Q\d{3}Z$/.test('Q12355Z'));
// console.log(/^Q\d{3}Z$/.test('QZ'));

// {n, m} - повтор попереднього символу від n до m раз
// console.log(/^Q\d{3,5}Z$/.test('Q1Z'));
// console.log(/^Q\d{3,5}Z$/.test('Q111Z'));
// console.log(/^Q\d{3,5}Z$/.test('Q12355Z'));
// console.log(/^Q\d{3,5}Z$/.test('QZ'));

// {n, } - повтор попереднього символу від n раз
// console.log(/^Q\d{3,}Z$/.test('Q1Z'));
// console.log(/^Q\d{3,}Z$/.test('Q111Z'));
// console.log(/^Q\d{3,}Z$/.test('Q12355Z'));
// console.log(/^Q\d{3,}Z$/.test('Q12355111111Z'));
// console.log(/^Q\d{3,}Z$/.test('QZ'));

// Екранування - \
/* 
    \
    /
    []
    {}
    ()
    ?
    +
    *
    .
    |
    ^
    $
*/

// 2020/06/01

// let regExp = /^\d{4}\/\d{2}\/\d{2}$/;
// console.log(regExp.test('2020/06/01'));
// console.log(regExp.test('20200/06/01'));

// let regExp = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
// console.log(regExp.test('2020/06/01'));
// console.log(regExp.test('2020/6/01'));
// console.log(regExp.test('2020/6/1'));

// 093-xxxx-xx-xx

// let regExp = /^093-\d{4}-\d{2}-\d{2}$/;
// console.log(regExp.test('093-3333-33-33'));
// console.log(regExp.test('097-3333-33-33'));

// 093-xxxx-xx-xx
// 073
// 063 

// let regExp = /^0[967]3-\d{4}-\d{2}-\d{2}$/;
// console.log(regExp.test('093-3333-33-33'));
// console.log(regExp.test('063-4444-21-45'));
// console.log(regExp.test('073-3333-33-33'));
// console.log(regExp.test('077-3333-33-33'));

//  +38(0xx)-xxxx-xx-xx
// let regExp = /^\+38\(0\d{2}\)-\d{4}-\d{2}-\d{2}$/;
// console.log(regExp.test('+38(093)-3333-33-33'));
// console.log(regExp.test('+38(066)-3311-22-53'));

let loginRegExp = /^\w{4,10}$/;
let passRegExp = /^[a-zA-Z0-9_@#&]{6,16}$/;

let getID = id => document.getElementById(id);
// getID('signIn').onclick = function(){
//     let testLogin = loginRegExp.test(getID('login').value);
//     let testPass = passRegExp.test(getID('password').value);
//     // console.log(testLogin, testPass)
//     if(testLogin && testPass){
//         console.log('welcome');
//     }
//     else{
//         console.log('wrong login or password');
//     }
// }

// getID('login').onchange = function(){
//     let testLogin = loginRegExp.test(getID('login').value)
//     if(testLogin){
//         this.style.border = '1px solid green'
//     }
//     else{
//         this.style.border = '1px solid red'
//     }
// }

// getID('password').oninput = function(){
//     let testPass = passRegExp.test(this.value)
//     if(testPass){
//         this.style.border = '1px solid green'
//     }
//     else{
//         this.style.border = '1px solid red'
//     }
//     console.log(this.validity.valid)
// }