let block = document.getElementById('block');



block.addEventListener('mouseout', function () {
    this.textContent = 'У мене є секрет!';
    this.textAlign = 'center';
    this.style.color = 'black';
    this.style.backgroundColor = 'purple';
    this.style.borderWidth = '4px';
    this.style.borderColor = 'orange';
    this.style.borderStyle = 'double';
    // Змінити стиль блоку на базовий тут
});

block.addEventListener('mouseover', function() {
    this.textContent = 'Хочеш знати який?';
    this.style.color = 'black';
    // this.textAlign = 'center';
    // this.style.verticalAlign = 'middle';
    this.style.backgroundColor = 'yellow';
    this.style.borderWidth = '3px';
    this.style.borderStyle = 'solid';
    this.style.borderColor = 'black';
    // Змінити стиль блоку тут
});

block.addEventListener('mousedown', function() {
    this.textContent = 'А я тобі не скажу';
    // this.textAlign = 'center';
    this.style.color = 'white';
    // this.style.verticalAlign = 'middle';
    this.style.borderStyle = 'double';
    this.style.borderColor = 'yellow';
    this.style.borderWidth = '4px';
    this.style.backgroundColor = 'black';
    // Змінити стиль блоку тут
});

block.addEventListener('mouseup', function() {
    this.textContent = 'Хочеш знати який?';
    this.style.color = 'black';
    this.style.fontWeight = 'bold';
    // this.textAlign = 'center';
    // this.style.verticalAlign = 'middle';
    this.style.backgroundColor = 'yellow';
    this.style.borderWidth = '2px';
    this.style.borderStyle = 'solid';
    this.style.borderColor = 'black';

    // Змінити стиль блоку тут
});
block.addEventListener('mouseout', function () {
    this.textContent = 'У мене є секрет!';
    this.style.backgroundColor = 'purple';
    this.textAlign = 'center';
    this.style.color = 'blue';
    this.style.borderWidth = '4px';
    this.style.borderColor = 'orange';
    this.style.borderStyle = 'double';
    // Змінити стиль блоку на базовий але з синім текстом
});
