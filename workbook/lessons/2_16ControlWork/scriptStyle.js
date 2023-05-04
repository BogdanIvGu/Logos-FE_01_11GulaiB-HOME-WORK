// style btn
const btnTC = document.querySelector('.btn-text-color')
btnTC.style.color = 'white';
btnTC.style.backgroundColor = 'dimgray';
btnTC.style.width = '80px';
btnTC.style.height = '25px';
btnTC.style.borderRadius = '3px';
btnTC.style.border = 'none';
btnTC.style.margine = '2px';
btnTC.style.fontSize = '12px';

// one-two line
const btnBgC = document.querySelector('.btn-bg-color')
btnBgC.style = 'color: white; background-color: dimgray; width: 120px; height: 25px; border-radius: 3px; border: none; margin: 2px; font-size: 12px; ';

const headers = document.querySelectorAll('h2');
headers.forEach(header => {
    header.style.fontSize = '14px';
    header.style.fontFamily = 'sans-serif';
    header.style.margin = '5px 0px';
    
});

document.querySelector('.bottom-block').style.caretColor = 'transparent';

const spanStyle = document.querySelector('span')
for (const span of document.querySelectorAll('span')) {
    span.style.fontFamily = 'sans-serif';
    span.style.fontSize = '14px';
    span.style.margin = '0px 5px';

}

document.querySelector('#fontFamily').style.width = '300px'
document.querySelector('#fontFamily').style.height = '25px'

// додаю ефекти hover і active через додавання класів із css в html
// .btn-text-color
document.querySelector('.btn-text-color').addEventListener('mouseover', function()
{
    this.classList.add('btn-hover')
})
document.querySelector('.btn-text-color').addEventListener('mouseout', function()
{
    this.classList.remove('btn-hover')
})
document.querySelector('.btn-text-color').addEventListener('mousedown', function()
{
    this.classList.add('btn-active')
})
document.querySelector('.btn-text-color').addEventListener('mouseup', function()
{
    this.classList.remove('btn-active')
})

// .btn-bg-color
document.querySelector('.btn-bg-color').addEventListener('mouseover', function()
{
    this.classList.add('btn-hover')
})
document.querySelector('.btn-bg-color').addEventListener('mouseout', function()
{
    this.classList.remove('btn-hover')
})
document.querySelector('.btn-bg-color').addEventListener('mousedown', function()
{
    this.classList.add('btn-active')
})
document.querySelector('.btn-bg-color').addEventListener('mouseup', function()
{
    this.classList.remove('btn-active')
})


// creat-list
document.querySelector('.creat-list').style = 'background-color: rgb(237, 233, 233);border-radius: 3px;';
