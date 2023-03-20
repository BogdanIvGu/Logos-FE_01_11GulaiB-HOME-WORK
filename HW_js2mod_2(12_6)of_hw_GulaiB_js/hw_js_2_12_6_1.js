
let colors = ['red', 'yellow', 'green'];
let index = 0;

function changeColor() {
    let block = document.getElementById('block');
    block.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}

let block = document.getElementById('block');
block.addEventListener('mouseover', changeColor);
block.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'purple';
});