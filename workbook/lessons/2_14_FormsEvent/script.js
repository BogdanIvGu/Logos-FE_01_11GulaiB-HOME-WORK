// document.forms

// let ff = document.forms;
// console.log(ff);


// let f1 = document.forms.f1;
// console.log(f1);

// let f1 = document.forms["f1"];
// console.log(f1);

// form.nameElement
// let f1 = document.forms[0];
// console.log(f1);
// console.log(f1.name);
// console.log(f1.elements);
// console.log(f1.elements[2]);
// console.log(f1.elements.get);
// console.log(f1.elements['get']);
// console.log(f1[2]);
// console.log(f1.get);
// console.log(f1.login);


// console.log(f1.elements);
// console.log(f1.children);

// login
// console.log(f1.login);
// console.log(f1.login.name);

f1.get.addEventListener('click', function(){
    // console.log('click works');
    let userLogin = f1.login.value;
    let userPassword = f1.password.value;
    console.log(userLogin, userPassword);
    // Спочатку витягуємо дані, а далі наступний крок - переприсвоюємо пусту
    //  стрічку для вводу наступних даних
    
    // f1.login.value = '';
    // f1.password.value = '';

// Метод reset повертає значення по замовчуванню  це те саме що написати в html <input type="reset">
    f1.reset();


})

let f2 = document.forms.f2;
// console.log(f2);
// перший спосіб
for (let i = 0; i < f2.elements.length; i++){
    f2.elements[i].onclick = function () {
        // document.body.style.backgroundColor = f2.elements[i].value
        document.body.style.backgroundColor=this.value
    }
}

// // другий спосіб
// function radioColor() {
//     if (event.target === 'radio'){
//         document.body.style.backgroundColor = event.target.value;
//     }
// }

let f4 = document.forms.f4;
f4.show.addEventListener('click', function () {
    // console.log(this);
//     console.log(f4);
//     console.log(event.target);
//     console.log(event.target.checked);
//     f4.hide.checked = true;
//     if (f4.show.checked) {
//         f4.area.style.display = 'block';
//     }
//     else {
//         f4.area.style.display = 'none';
//     }
// 

    f4.area.style.display = f4.show.checked ? 'block' : 'none';
    document.forms.f2.elements[3].checked = true;
    // console.log(document.forms.f2.elements[3]);
    console.log(this.value);

})

let f5 = document.forms.f5;
// console.log(f5.colors);
// console.log(f5.colors.options);
// console.log(f5.colors.selectedIndex);
// console.log(f5.colors.value);

// for (let i = 0; i < f5.colors.options.length; i++){
//     f5.colors.addEventListener('change', function () {
//      if (f5.colors.options[i].selected){
//          console.log(f5.colors.options[i]);
//          document.body.style.backgroundColor = f5.colors.options[i].value;
//     }
//     })
// }

f5.colors.addEventListener('change', function (){ 
    document.body.style.backgroundColor = event.target.value;
})
f5.get.addEventListener('click', () => {
    console.log(f5.colors.value);
    let opt = new Option('gray color', 'gray', true, true)
    console.log(opt);
})


let f6 = document.forms.f6;
f6.test.addEventListener('focus', () => {
    console.log('focus works');
})

f6.test.addEventListener('blur', () => {
    console.log('blur works');
})
f6.test.addEventListener('change', () => {
    console.log('change works');
})

f6.test.addEventListener('input', function() {
    console.log('input works');
    document.querySelector('.text').textContent = this.value
})

function showMessage() {
    event.preventDefault();
    // alert('Submit done')
    console.log('Submit done');
    
}