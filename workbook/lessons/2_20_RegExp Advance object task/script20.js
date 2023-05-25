/* 
Flags
    - g - глобальний пошук
    - i - не чутливість до регістру
    - m - багаторядковий режим (^ $)
    - s - враховувати новий рядок стрічки
    - u - включення підтримки юнікоду
    - y - липкий пошук
*/

// let regexp = /expression/flags;

// let regexp = new RegExp(expression, flags);

// g - глобальний пошук
// const regExp = /ivan/g;
// const str = 'One ivan and one more ivan';

// i - не чутливість до регістру
// const regExp = /ivan/gi;
// const str = 'One ivan and one more iVaN';

// m - багаторядковий режим (^ $)
// const regExp = /^\d/gi;
// const str = `1.One ivan and 
// 2.one more iVaN`;

// s - враховувати новий рядок стрічки
// const regExp = /e.*r/s;
// const str = `one
// two
// three`;

// u - включення підтримки юнікоду
// const regExp = /\u{1F525}/u;
// const str = 'Воген = 🔥';
// console.log(regExp.test(str));

// const regExp = /ivan/giy;
// console.log(regExp);
// console.log('flags', regExp.flags);
// console.log('global', regExp.global);
// console.log('ignoreCase', regExp.ignoreCase);
// console.log('multiline', regExp.multiline);
// console.log('unicode', regExp.unicode);
// console.log('sticky', regExp.sticky);
// console.log('lastIndex', regExp.lastIndex);

// () - групи

// console.log(/^(\d{3})\s(\w+)$/.test('345 s'));




// let regExp = /^(\d{2})-(\d{2})-(\d{4})$/;
// let str = '10-07-2020';
// console.log(regExp.test(str));

// /sdsa/.exec()
// ''.match

// console.log(regExp.exec(str));
// let test = regExp.exec(str);
// console.log(test[1], test[2], test[3]);

// let regExp = /(?<date>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;
// let str = 'Привіт, сьогодні 10-07-2020 відбудеться.....';
// console.log(regExp.exec(str));

// let { date, month, year } = regExp.exec(str).groups;
// console.log(date, month, year );

// let regExp = /(?<date>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;
// let str = 'Привіт, сьогодні 10-07-2020 відбудеться.....';
// // console.log(regExp.exec(str));
// console.log(str.match(regExp));

// let { date, month, year } = str.match(regExp).groups;
// console.log(date, month, year );

// const regExp = /a(?:bc)*/;
// const regExp = /d(?=r)/;
// const regExp = /(?<=r)d/;

// \b - границя окремого слова
// \B
// const regExp = /\babc\b/;
// const regExp = /\Babc\B/;

// ''.replace
// ''.split
// ''.search

// let str = 'I love Chelsea and Chelsea the best and chelsea .. ';
// let regExp = /Chelsea/gi;
// console.log(str);
// let newStr = str.replace(regExp, 'Arsenal');
// console.log(newStr);

// let str = '1.Ivan. 2.Petro. 3.Pavlo.';
// let regExp = /\d{1}\./g;
// console.log(str.split(' '))
// console.log(str.split(regExp));

// let str = 'Lorem ipsum dolor sit bassumenda amet consectetur adipisicing elit. Assumenda ipsam maxime facilis';
// let regExp = /\bassumenda\b/i;
// console.log(str.search(regExp));

// let str = 'some my text';

// let regExp = /\w+/y;
// console.log(regExp.lastIndex)
// regExp.lastIndex = 4;
// console.log(regExp.lastIndex)

// let word1 = regExp.exec(str);
// // let word1 = str.match(regExp);
// console.log(word1, regExp.lastIndex);

// let word2 = regExp.exec(str);
// // let word2 = str.match(regExp);
// console.log(word2, regExp.lastIndex)

// let word3 = regExp.exec(str);
// console.log(word3, regExp.lastIndex)

// let word4 = regExp.exec(str);
// console.log(word4, regExp.lastIndex)

