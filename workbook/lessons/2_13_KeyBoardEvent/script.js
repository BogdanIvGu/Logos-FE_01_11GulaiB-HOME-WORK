
// const ball=document.querySelector('.ball')

// window.addEventListener('keydown', function (event) {
//     console.log('Key code', event.keyCode)
//     if (event.keyCode === 37) {
//         // console.log('left')
//         let goLeft = ball.offsetLeft;
//         // console.log(goLeft)
//         if (goLeft > 0) {
//          ball.style.left = goLeft - 20 + 'px';
//         }
        

//     }
//      if (event.keyCode === 38) {
//          let goTop = ball.offsetTop;
//          if (goTop > 0) {
//         ball.style.top = goTop - 20 + 'px';
//           }
         
//     }

//     if (event.keyCode === 39) {
//         let goRight = ball.offsetLeft;
//         if (goRight < window.innerWidth-200) {
//         ball.style.left = goRight + 20 + 'px';
//         }
        
//     }
//     if (event.keyCode === 40) {
//         let goDown = ball.offsetTop;
//         if (goDown < window.innerHeight-200) {
//         ball.style.top = goDown + 20 + 'px';
//         }
        
//     }
// })


const sel = selector => document.querySelector(selector);
sel('.add').addEventListener('click', function () {
    document.querySelector('.box').classList.add('bg-red', 'bs-dark');
    // sel('.box').classList.add('bg-red', 'bs-dark');
})


sel('.remove').addEventListener('click', function(){
   document.querySelector('.box').classList.remove('bg-red')
})


sel('.toggle').addEventListener('click', function(){
   document.querySelector('.box').classList.toggle('bg-red')
})

let className = document.querySelector('.box').className;
if (className.includes('bg-red')) {
     document.querySelector('.box').classList.add('bg-red');
}
else {
    document.querySelector('.box').classList.add('bg-red');
}



// function change() {
//     const myLink = document.getElementById('link');
//     // console.log(myLink);
//     // console.dir(myLink);
//     // console.log(myLink.hasAttribute('target'));
//     // console.dir(event.target.dataset.name);
//     // console.log(myLink.getAttribute('href'));
//     // myLink.setAttribute('href', 'https://www.google.com');
//     // myLink.setAttribute('target', '_blank');
//     // myLink.setAttribute('class', 'new');
//     // myLink.removeAttribute('href');

// }

document.querySelector('.check').addEventListener('click', function(){
    const box = document.querySelector('.box');
    console.log(box);
    let st = getComputedStyle(box);
    console.log(st);
    console.log(st.width);



})

document.querySelector('.box').onclick = function () {
    let st = getComputedStyle(this);
    console.log(st.backgroundColor);
}