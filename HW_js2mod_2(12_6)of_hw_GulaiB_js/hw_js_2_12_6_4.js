// let colorList = document.getElementById('color-list');

// colorList.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         let color = event.target.textContent;
//         event.target.style.backgroundColor = color;
//     }
// });


// let colorList = document.getElementById('color-list');

// colorList.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         let color = event.target.textContent;
//         event.target.style.color = color;
//     }
// });

let colorList = document.getElementById('color-list');
let previousColor = 'black'; // зберігаємо попередній колір

colorList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        let color = event.target.textContent;
        event.target.style.color = color === previousColor ? 'black' : color; // перевіряємо, чи колір співпадає з попереднім
        previousColor = event.target.style.color; // зберігаємо поточний колір для наступного натискання
    }
});