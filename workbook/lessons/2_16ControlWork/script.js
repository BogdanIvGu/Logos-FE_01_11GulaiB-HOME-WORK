const getS = selector => document.querySelector(selector);

getS('.btn-edit').onclick = function () {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    // const content = getS('.top-block').innerHTML;
    // getS('.edit-area').value = content;
    getS('.edit-area').value = getS('.top-block').innerHTML;
}
getS('.btn-save').onclick = function () {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}

getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');

})

function fontSize() {
    // console.log(event.target.value);
    getS('.top-block').style.fontSize = event.target.value;
}

let fF = document.getElementById('fontFamily');
fF.onchange = function (e) {
    console.log(e.target.value);
    console.log(this.value);
    getS('.top-block').style.fontFamily = this.value;
}


// style.color
getS('.btn-text-color').onclick = function () {
  let colors = ['red', 'green', 'blue', 'yellowgreen', 'hotpink', 'purple', 'pink', 'gray', 'black'];
  for (let i = 0; i < getS('.colors').children.length; i++) {
    getS('.colors').children[i].style.backgroundColor = colors[i];
    getS('.colors').children[i].onclick = function () {
      getS('.top-block').style.color = this.style.backgroundColor;
      getS('.colors').classList.add('hide');
    }
  }
  getS('.colors').classList.remove('hide');
}
// backgroundColor
getS('.btn-bg-color').onclick = function () {
  let colorsBg = ['red', 'green', 'blue', 'yellowgreen', 'hotpink', 'purple', 'gray', 'black', 'pink'];
  for (let i = 0; i < getS('.colors').children.length; i++) {
    getS('.colors').children[i].style.backgroundColor = colorsBg[i];
    getS('.colors').children[i].onclick = function () {
      getS('.top-block').style.backgroundColor = this.style.backgroundColor;
      getS('.colors').classList.add('hide');
    }
  }
  getS('.colors').classList.remove('hide');
}


// // style btn
// const btnTC = document.querySelector('.btn-text-color')
// btnTC.style.color = 'white';
// btnTC.style.backgroundColor = 'dimgray';
// btnTC.style.width = '80px';
// btnTC.style.height = '20px';
// btnTC.style.borderRadius = '3px';
// btnTC.style.border = 'none';
// btnTC.style.margine = '2px';
// btnTC.style.fontSize = '10px';

// // one-two line
// const btnBgC = document.querySelector('.btn-bg-color')
// btnBgC.style = 'color: white; background-color: dimgray; width: 100px; height: 20px; border-radius: 3px; border: none; margin: 2px; font-size: 10px; ';


// start function bold style
function fontWeight() {
    if (event.target.checked) {
        getS('.top-block').classList.add('bold');
    }
    else {
        getS('.top-block').classList.remove('bold');
    }
}

// end function bold style


// start function fonStyle

const cursiveText = document.getElementById('cursiveText');
function cursiveTextClick(event) {
  if (event.target.checked) {
    getS('.top-block').classList.add('cursive');
  } else {
    getS('.top-block').classList.remove('cursive');
  }
}
cursiveText.addEventListener('click', cursiveTextClick);


// end function fonStyle




// <!-- другий блок -->

getS('.btn-add').onclick = function () {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}

// Choose what u want

// Add style to u table
const table = document.forms['form-table'];
getS('.btn-creat-table').onclick = function () {
  const CountTR = table.countTR.value;
  const CountTD = table.countTD.value;
  const mesureW = table.mesureW.value;
  const mesureH = table.mesureH.value;
  const borderW = table.borderW.value;
  const typeB = table.typeB.value;
  const typeC = table.typeC.value;


  getS('.edit-area').value += `<table style='width:50%'>`
  for (let i = 0; i < CountTR; i++){
    getS('.edit-area').value += `<tr>`
    for (let j = 0; j < CountTD; j++){
    getS('.edit-area').value += `<td style='width:${mesureW}px; height:${mesureH}px;
  border: ${borderW}px ${typeB} ${typeC}; text-align: center;'> TD </td>`
  }
    getS('.edit-area').value += `</tr>`
  }
  getS('.edit-area').value+=`</table>`
getS('.first').classList.add('show');
getS('.second').classList.remove('show');
}



const list = document.forms['form-list'];

getS('.btn-creat-list').onclick = function () {
    const countLi = list.count.value;
    const typetLi = list.type.value;
    getS('.edit-area').value += `<ul style='list-style-type:${typetLi}'>`;
    for (let i = 0; i < countLi; i++){
        getS('.edit-area').value += `<li> item ${i+1} </li>`;
    }
    getS('.edit-area').value += '</ul>';
     getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    
    
}

// creat-list

function toggleForm() {
    if (getS('input.checkeL').checked) {
        getS('.creat-list').classList.remove('hide');
        getS('.creat-Table').classList.add('hide');

    }
    else if (getS('input.checkeT').checked) {
        getS('.creat-Table').classList.remove('hide');
        getS('.creat-list').classList.add('hide');
    }
}
