// let colorList = document.getElementById('color-list');

// colorList.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         let color = event.target.textContent;
//         event.target.style.backgroundColor = color;
//     }
// });


let colorList = document.getElementById('color-list');

colorList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        let color = event.target.textContent;
        event.target.style.color = color;
    }
});

