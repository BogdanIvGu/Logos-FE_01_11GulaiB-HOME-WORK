
let getId = id => document.getElementById(id);
const inputLabel = document.querySelector('.inputLabel');
const inputLabelSN = document.querySelector('.inputLabelSN');
const inputLabelEM = document.querySelector('.inputLabelEM');
const inputLabelPS = document.querySelector('.inputLabelPS');
const firstName = document.querySelector('#firstName');
const secondName = document.querySelector('#secondName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
let testFirstName = /^[a-zA-Z]{1,20}$/;
let testSecondName = /^[a-zA-Z]{1,20}$/;
let testEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let testPassword = /^[a-zA-Z0-9]{8,15}$/;

// firstName
firstName.addEventListener('mouseover', function() {
  inputLabel.classList.add('inputLabelFocus');
});

firstName.addEventListener('mouseout', function() {
  if (!firstName.value.trim()) {
    inputLabel.classList.remove('inputLabelFocus');
  }

});

firstName.addEventListener('input', function() {
  if (this.value.trim()) {
    inputLabel.classList.add('inputLabelFocus');
  } else {
    inputLabel.classList.remove('inputLabelFocus');
  }
});



firstName.addEventListener('input', function() {
  const firstName = this.value.trim();
  const validInfo = document.querySelector('.validInfo')
  const validationInfo = document.querySelector('.validationInfo');
  if (isValidFirstName(firstName)) {
   validationInfo.classList.add('invisible');
    document.querySelector('.firstNameContainer').classList.remove('inputContainerValidNo');
    document.querySelector('.firstNameContainer').classList.add('inputContainerValidYes');
    document.querySelector('.inputLabelFocus').classList.add('Yes');
    firstName.classList.add('greenBorder');
    
  
  } else {
    validationInfo.classList.remove('invisible');
    validInfo.textContent = getId('labelFn').textContent;
    document.querySelector('.firstNameContainer').classList.add('inputContainerValidNo');
    document.querySelector('.inputLabelFocus').classList.remove('Yes');
  }
});

function isValidFirstName(firstName) {
  return testFirstName.test(firstName);
}


// secondName

secondName.addEventListener('mouseover', function() {
  inputLabelSN.classList.add('inputLabelFocusSN');
});

secondName.addEventListener('mouseout', function() {
  if (!secondName.value.trim()) {
    inputLabelSN.classList.remove('inputLabelFocusSN');
  }

});

secondName.addEventListener('input', function() {
  if (this.value.trim()) {
    inputLabelSN.classList.add('inputLabelFocusSN');
  } else {
    inputLabelSN.classList.remove('inputLabelFocusSN');
  }
});



secondName.addEventListener('input', function() {
  const secondName = this.value.trim();
  const validInfoSN = document.querySelector('.validInfoSN')
  const validationInfoSN = document.querySelector('.validationInfoSN');
  if (isValidSecondName(secondName)) {
   validationInfo.classList.add('invisible');
    document.querySelector('.secondNameContainer').classList.remove('inputContainerValidNo');
    document.querySelector('.secondNameContainer').classList.add('inputContainerValidYes');
    document.querySelector('.inputLabelFocusSN').classList.add('Yes');
    firstName.classList.add('greenBorder');
    
  
  } else {
    validationInfoSN.classList.remove('invisible');
    validInfoSN.textContent = getId('labelSn').textContent;
    document.querySelector('.secondNameContainer').classList.add('inputContainerValidNo');
    document.querySelector('.inputLabelFocusSN').classList.remove('Yes');
  }
});

function isValidSecondName(secondName) {
  return testSecondName.test(secondName);
}

// Email
email.addEventListener('mouseover', function() {
  inputLabelEM.classList.add('inputLabelFocusEM');
});

email.addEventListener('mouseout', function() {
  if (!email.value.trim()) {
    inputLabelEM.classList.remove('inputLabelFocusEM');
  }

});

email.addEventListener('input', function() {
  if (this.value.trim()) {
    inputLabelEM.classList.add('inputLabelFocusEM');
  } else {
    inputLabelEM.classList.remove('inputLabelFocusEM');
  }
});



email.addEventListener('input', function() {
  const email = this.value.trim();
  const validInfoEM = document.querySelector('.validInfoEM')
  const validationInfoEM = document.querySelector('.validationInfoEM');
  if (isValidEmail(email)) {
   validationInfoEM.classList.add('invisible');
    document.querySelector('.emailContainer').classList.remove('inputContainerValidNo');
    document.querySelector('.emailContainer').classList.add('inputContainerValidYes');
    document.querySelector('.inputLabelFocusEM').classList.add('Yes');
    email.classList.add('greenBorder');
    
  
  } else {
    validationInfoEM.classList.remove('invisible');
    validInfoEM.textContent = getId('labelEM').textContent;
    document.querySelector('.emailContainer').classList.add('inputContainerValidNo');
    document.querySelector('.inputLabelFocusEM').classList.remove('Yes');
  }
});

function isValidEmail(email) {
  return testEmail.test(email);
}

// password

password.addEventListener('mouseover', function() {
  inputLabelEM.classList.add('inputLabelFocusPS');
});

password.addEventListener('mouseout', function() {
  if (!password.value.trim()) {
    inputLabelPS.classList.remove('inputLabelFocusPS');
  }

});

password.addEventListener('input', function() {
  if (this.value.trim()) {
    inputLabelPS.classList.add('inputLabelFocusPS');
  } else {
    inputLabelPS.classList.remove('inputLabelFocusPS');
  }
});



password.addEventListener('input', function() {
  const password = this.value.trim();
  const validInfoPS = document.querySelector('.validInfo')
  const validationInfoPS = document.querySelector('.validationInfoPS');
  if (isValidPassword(password)) {
   validationInfoPS.classList.add('invisible');
    document.querySelector('.passwordContainer').classList.remove('inputContainerValidNo');
    document.querySelector('.passwordContainer').classList.add('inputContainerValidYes');
    document.querySelector('.inputLabelFocusPS').classList.add('Yes');
    password.classList.add('greenBorder');
    
  
  } else {
    validationInfoPS.classList.remove('invisible');
    validInfoPS.textContent = getId('labelPS').textContent;
    document.querySelector('.passwordContainer').classList.add('inputContainerValidNo');
    document.querySelector('.inputLabelFocusPS').classList.remove('Yes');
  }
});

function isValidPassword(password) {
  return testPassword.test(password);
}


// розюлокування кнопки Sign Up при клікнутому чекбоксу
const checkbox = getId('agree');
const signUpBtn = getId('signUpBtn');

  checkbox.addEventListener('change', function() {
    signUpBtn.disabled = !this.checked;
  });

// signUpButton active

signUpBtn.addEventListener('mousedown', function() {
  document.querySelector('.success').classList.remove('invisible');
  console.log('remove invisible')
});

// btnStart

let startBtn = getId('startBtn');
startBtn.addEventListener('click' , function() {
document.querySelector('.success').classList.add('invisible');
location.reload();  
})




