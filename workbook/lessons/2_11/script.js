// console.log(document);
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);


// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1].firstChild);

// for (let i = 0; i < document.body.childNodes.length; i++){
//     console.log(document.body.childNodes[i])
// }

// for (let elem of document.body.childNodes){
//     console.log(elem)
// }




// console.log(document.body.firstChild);
// console.log(document.body.firstChild.nextSibling);
// console.log(document.body.lastChild.previousSibling.parentNode.parentNode.parentNode.parentNode);

// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.lastElementChild.previousElementSibling);


// Пряма навігація
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByName()
// document.getElementsByClassName()
// document.querySelector()
// document.querySelectorAll()

// let box = document.getElementById('box');
// console.log(box);
// console.log(box.innerHTML);
// console.log(box.outerHTML);
// console.log(box.textContent);
// console.log(box.innerText);
// box.innerHTML = '<h2>Lorem Box</h2>';
// box.innerHTML += '<h2>Lorem Box</h2>';
// box.textContent = '<h2>Lorem Box</h2>';
// box.firstElementChild.textContent='Some new box'

// let ll = document.getElementById('link');
// console.log(ll);
// console.dir(ll);
// ll.textContent = 'google';
// ll.href = 'https://www.google.com';
// ll.target = '_blank';
// ll.style.color = 'red';
// ll.style.fontSize = '40px';
// ll.style.backgroundColor = 'yellow';
// console.log(ll.style.color);
// ll.style.cssText = 'color: red; font-size: 40px';

// let tt = document.getElementsByClassName('text');
// // console.log(tt[0]);
// // console.log(tt[1]);
// for (let i = 0; i < tt.length; i++){
//     console.log(tt[i]);
//     tt[i].style.color = 'red';
//     tt[i].textContent = `new text ${i+1}`;
// }

// let li = document.getElementsByTagName('li');
// console.log(li);
// li[0].style.color = 'green';

// let tt = document.getElementsByName('tt');
// console.log(tt);

// console.log(tt[0]);

// let sel = document.querySelector('ol');
// console.log(sel);

// let sel = document.querySelector('ol>li');
// console.log(sel);

// let sel = document.querySelector('ol>li:nth-of-type(3)';
// console.log(sel);

// let selAll = document.querySelectorAll('#box, .text, ol>li, [name ="tt"]');
// console.log(selAll);

// for (const elem of selAll) {
//     elem.style.color = 'red';
// }

// for (const elem of document.body.children) {
//     if (elem.matches('.text')) {
//         elem.style.color = "red";
//     }
// }

// let li = document.querySelector('li:first-child');
// console.log(li);
// console.log(li.closest('body'));

// let div = document.createElement('div');
// console.log(div);
// let text = document.createTextNode('Hello JS');
// console.log(text);

// // .append(), .prepend(), .before(), .after(), .replaceWitch()


// let append = document.createElement('h2');
// append.textContent = 'TEXTappend';
// document.querySelector('#box').append(append);
// console.log(append);


// let prepend = document.createElement('h2');
// prepend.textContent = 'TEXTprepend';
// document.querySelector('#box').prepend(prepend);
// console.log(prepend);

// let before = document.createElement('h1');
// before.textContent = 'TEXTbefore';
// document.querySelector('#box').before(before);
// console.log(before);


// let after = document.createElement('h1');
// after.textContent = 'TEXTafter';
// document.querySelector('#box').after(after);
// console.log(after);

// let text= document.createTextNode('Some text');
// document.querySelector('#box').after(text);
// console.log(text);

// let text= document.createTextNode('Some text');
// document.querySelector('#box').after('<h1> after text</h1>');
// console.log(text);

// document.body.insertAdjacentHTML // .append(), .prepend(), .before(), .after(), .replaceWitch()

// document.querySelector('#box').insertAdjacentHTML( 'afterbegin' , '<p style="color:red">afterbegin = prepend</p>');
// document.querySelector('#box').insertAdjacentHTML( 'afterend', '<p>afterend= after</p>');
// document.querySelector('#box').insertAdjacentHTML( 'beforebegin' , '<p>beforebegin = before</p>');
// document.querySelector('#box').insertAdjacentHTML( 'beforeend' , ' <p> beforeend = append</p> ');
// document.querySelector('#box').insertAdjacentHTML( 'beoreend' , '<p>beforeend</p>');f

// document.querySelector('#box').remove();



// let text3 = document.querySelector('.text').cloneNode(true);
// console.log(text3);
// text3.textContent = 'clone element';
// document.querySelector('.text').after(text3);

// document.body.appendChild()
// document.body.insertBefore()
// document.body.removeChild()
// document.body.replaceChild()

// eleme.appendChild()
// eleme.body.insertBefore()
// eleme.body.removeChild()
// eleme.body.replaceChild()