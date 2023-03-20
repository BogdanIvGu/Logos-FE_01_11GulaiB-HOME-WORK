
function applyStyles() {
  // Отримання значень з форми
  let bgColor = document.querySelector("#bg-color").value;
  let fontType = document.querySelector("#font-type").value;
  let headerAlign = document.querySelector("#header-align").value;
  let linkBgColor = document.querySelector("#link-bg-color").value;
  let linkTextColor = document.querySelector("#link-text-color").value;
    let listStyleType = document.querySelector("#list-style-type").value;

    

  // Застосування стил≥в до стор≥нки
  document.body.style.backgroundColor = bgColor;
  document.body.style.fontFamily = fontType;
  document.querySelector("h1").style.textAlign = headerAlign;
  document.querySelector("ul").style.backgroundColor = linkBgColor;

    // Застосування кольору тексту до елемент≥в ul, li, a, h1 та p
    [document.querySelectorAll("ul"), 
     document.querySelectorAll("li"), 
     document.querySelectorAll("a"), 
     document.querySelectorAll("h1"),
     document.querySelectorAll("p")].forEach((elements) => {
        elements.forEach((element) => {
            element.style.color=linkTextColor; 
        });
    });

    // Застосування кольору тексту до елементів ul li a
    [document.querySelectorAll("ul li a")].forEach((elements) => {
        elements.forEach((element) => {
            element.style.color=linkTextColor; 
        });
    });

    // Застосування типу маркера списку до елемента ul
    [document.querySelectorAll("ul")].forEach((elements) => {
        elements.forEach((element) => {
            element.style.listStyleType=listStyleType; 
        });
    });
}

// Функція для додавання сайту до списку
function addLink() {
    let site=document.querySelector("#sites-list").value; 
    if(site){
        let li=document.createElement('li');
        li.textContent=site; 
        document.querySelector('ul').appendChild(li);
        document.querySelector('#sites-list').value='';
    }
}

// Додавання обробника подій до поля вводу для активування кнопки "Додати"
document.querySelector('#sites-list').addEventListener('input', function(){
   let site=this.value; 
   if(site){
       if(!document.getElementById('add-button')){
           var button=document.createElement('button');
           button.innerHTML='Додати';
           button.id='add-button';
           button.onclick=addLink; 
           this.insertAdjacentElement('afterend',button);
       }
   }else{
       if(document.getElementById('add-button')){
           var button=document.getElementById('add-button');
           button.parentNode.removeChild(button);
       }
   }
});