
// const inputLabel = document.querySelector('.inputLabel');
// const firstName= document.querySelector('#firstName');

// firstName.addEventListener('mouseover', function() {
//   inputLabel.classList.add('inputLabelFocus');
// });

// firstName.addEventListener('mouseout', function() {
//   if (!firstName.value.trim()) {
//     inputLabel.classList.remove('inputLabelFocus');
//   }
// });

// firstName.addEventListener('input', function() {
//   if (this.value.trim()) {
//     inputLabel.classList.add('inputLabelFocus');
//   } else {
//     inputLabel.classList.remove('inputLabelFocus');
//   }
// });



// firstNameInput.addEventListener('input', function() {
//   const firstName = this.value.trim();
  
//   if (isValidFirstName(firstName)) {
//     validationInfo.classList.add('invisible');
//     validInfo.textContent = '';
//   } else {
//     validationInfo.classList.remove('invisible');
//     validInfo.textContent = 'First name must contain only English letters, up to 20 characters, and no numbers or special characters.';
//   }
// });

// function isValidFirstName(firstName) {
//   const regex = /^[a-zA-Z]{1,20}$/;
//   return regex.test(firstName);
// }