
// // 1
// setTimeout(function(){
//     document.write('<h2>setTimeout</h2>')
// }, 3000);

// // 2
// let timeoutID;

// function startTimeout(){
//     timeoutID = setTimeout(() => {
//         document.querySelector('.blockTimeout').innerHTML = '<h2>setTimeout</h2>';
//     }, 2000)
// }

// function stopTimeout() {
//     clearTimeout(timeoutID);
// }

// 3
// setInterval(function () {
//     document.write('<h2>setInterval</h2>')
// },2000)

// let intervalID;
// function creatElement() {
//     let h2 = document.createElement('h2');
//     h2.textContent = 'setInterval';
//     document.querySelector('.blockInterval').append(h2);
//     // if (document.querySelector('.blockInterval').children.length >= 5) {
//     //     clearInterval(intervalID);
//     // }
// }
// function startInterval() {
//     intervalID = setInterval(creatElement, 2000);
//     document.querySelector('.start').disabled = true;
//     document.querySelector('.stop').disabled = false;
    
// }
// function stopInterval() {
//     clearInterval(intervalID);
//     document.querySelector('.start').disabled = false;
//     document.querySelector('.stop').disabled = true;
// }

let d = new Date();
// console.log('Date',d);
// console.log('getDay', d.getDay());
// console.log('getDate', d.getDate());
// console.log('getMonth', d.getMonth());
// console.log('getFullYear', d.getFullYear());
// console.log('getHours , Minutes, Seconds', d.getHours(), d.getMinutes(), d.getSeconds());
// console.log('    ', d.getTimezoneOffset());
// console.log('UTCHours    ', d.getUTCHours());
// console.log('set    ', d.getUTCHours());
// console.log(new Date(2020, 6, 10, 12, 00, 00));
// let setD = new Date(2020, 6, 1, 12, 00, 00);
// console.log(d.getTime());

// let start = d.getTime()
// console.log('start', start);
// setTimeout(() => {
//     let end = new Date().getTime()
//     console.log('end', end);
//     console.log('Time', end - start);
// }, 1000);

let setD = new Date(2023, 4, 17, 23, 00, 00);
console.log(setD);
console.log(setD.getTime());

let currentD = new Date();
console.log(currentD);
console.log(currentD.getTime());

function checkTime() {
    setInterval(() => {
        let currentD = new Date();
        let rizn = setD.getTime() - currentD.getTime();
        // console.log(rizn);
        // let hours = parseInt(rizn / (3600 * 1000));
        // let minutes = parseInt(rizn / (60 * 1000));
        // let seconds = parseInt(rizn / (1000));

        // console.log(hours);
        // console.log(minutes);
        // console.log(seconds);
        let hours = Math.floor((rizn % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((rizn % (1000 * 60 * 60 )) / (1000 * 60));
        let seconds = Math.floor((rizn % (1000*60)) / (1000));

        
        
        console.log(hours);
        console.log(minutes);
        console.log(seconds);
        document.querySelector('.coutDown').innerHTML = `${hours}: ${minutes} : ${seconds}`

    }, 1000)
}
checkTime();


setInterval(() => {
    let dd = new Date();
    let hh = dd.getHours();
    let mm = dd.getMinutes();
    let ss = dd.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    document.querySelector('.digital-clock').innerHTML=`${hh}: ${mm} : ${ss}`
}
)
