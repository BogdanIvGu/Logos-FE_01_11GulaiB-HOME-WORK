// MouseEvent
// -click
// function someClick() {
    // console.log('Click works');
    // console.log(event.target);
    // console.log(event);
//     if (event.altKey) {
//         console.log('click + alt')
//     }
//     else {
//         console.log('click');
//         }
// }
    
// document.getElementById('push').onclick = function () {
//     console.log('click from JS');
// }

//                                                                              1 СПОСІБ  через HTML      onclick="someClick()"
    // function someClick(){
    //     console.log('click html attr');
    //     console.log(event);
    // }

    // document.getElementById('click1').onclick = function (){
    //     console.log('click js');
    // }
// function someClick1() {
//     console.log('click js')
//     console.log(this)
// }
//                                                                              2 СПОСІБ  через JS       .onclick 
// document.getElementById('click1').onclick = someClick1;
//                                                                              3 СПОСІБ                 addEventListener
// document.getElementById('push').addEventListener()
// document.getElementById('push').removeEventListener()


// addEventListener(event, handler[, option])

// document.getElementById('push').addEventListener('click', function () {
//     console.log('click1');

// })
//                                                                              3 СПОСІБ
// document.getElementById('push').addEventListener('click', function () {
//     console.log('click2');

// })
// function showMessage() {
//     console.log('Hello world');
//  }
//                                                                              3 СПОСІБ
// document.getElementById('push').addEventListener('click', showMessage)


// document.getElementById('push').addEventListener('click', function () {
    
//  console.log('Hello');

// })
 
// function divFunc() {
//     console.log('divFunc');
//     console.log(event.target);
// }
// function pFunc() {
//     console.log('pFunc');
//     console.log(event.target);
//     event.stopPropagation();
// }
// function bFunc() {
//     console.log('bFunc');
//     console.log(event.target);
//     event.stopPropagation();
// }

// function showMessage() {
//     console.log(event.target);
// }
//                                                                              3 СПОСІБ
// document.querySelector('.top-block').addEventListener('click', showMessage, true)
// document.querySelector('.main-block').addEventListener('click', showMessage)
// document.querySelector('.bottom-block').addEventListener('click', showMessage)

// const randomizer = (min, max) => Math.round(Math.random()*(max - min));

// function addColor() {
//     const r = randomizer(0, 255);
//     const g = randomizer(0, 255);
//     const b = randomizer(0, 255);
//     event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// }

// function addColor() {
//     if(event.target.className == 'block'){
//     const r = randomizer(0, 255);
//     const g = randomizer(0, 255);
//     const b = randomizer(0, 255);
//     event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// }
//     }


//                                                                              3 СПОСІБ
// document.querySelector('h1').addEventListener('mouseup', function ())



let countOver = 0;
let countOut = 0;
let countMove = 0;

document.querySelector('.box').addEventListener('mouseover', function(){
    event.target.style.backgroundColor = 'red'
    countOver++;
    console.log('countOver', countOver);
})

// document.querySelector('.box').addEventListener('mouseout', function(){
//     event.target.style.backgroundColor = 'white'
//     countOut++;
//     console.log('countOut', countOut);
// })
// document.querySelector('.box').addEventListener('mousemove', function(){
//     event.target.style.backgroundColor = 'blue'
//    countOut++;
//     console.log('countmove', countMove);
// })


// document.querySelector('h1').addEventListener('mousedown', function () {
//     event.target.style.height = '200px'
//     console.log('mousedown');
// })

// document.querySelector('h1').addEventListener('mouseup', function () {
//     event.target.style.height = '30px'
//     console.log('mouseup');
// })



document.querySelector('h1').addEventListener('dblclick', function () {
    event.target.style.height = '200px'
    console.log('dblclick');
})

document.querySelector('h1').addEventListener('mouseup', function () {
    event.target.style.height = '50px'
    console.log('mouseup');
})