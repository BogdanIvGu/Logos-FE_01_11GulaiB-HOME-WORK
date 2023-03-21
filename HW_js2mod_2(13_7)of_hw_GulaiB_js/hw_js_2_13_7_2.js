const inputField = document.getElementById('input-field');
const keys = document.querySelectorAll('.key');
let shiftPressed = false;
let backspaceTimer = null;

function handleClick(event) {
  const keyElement = event.target;
  const key = keyElement.dataset.key;
  const symbols = {
    8: 'Backspace',
    9: 'Tab',
    13: 'Enter',
    16: 'Shift',
    20: 'Caps Lock',
    32: ' ',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: "'",
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z'
   };
  
 const symbol = symbols[key];
  
 if (symbol === "Backspace") {
   if (!backspaceTimer) {
     inputField.value = inputField.value.slice(0, -1);
     backspaceTimer = setInterval(() => {
       inputField.value = inputField.value.slice(0, -1);
     },200);
   }
 } else if (symbol === "Tab") {
   inputField.value += '\t';
 } else if (symbol === "Caps Lock") {
   const capsLockKey = document.querySelector('.capslock');
   if (capsLockKey.classList.contains('active')) {
     capsLockKey.classList.remove('active');
   } else {
     capsLockKey.classList.add('active');
   }
 } else if (symbol === "Enter") {
   inputField.value += '\n';
 } else if (symbol === "Shift") {
   
 } else {
     let textToAdd;
     if(document.querySelector('.capslock').classList.contains('active')){
       textToAdd=symbol.toUpperCase();
     }
     else{
            textToAdd = symbol.toLowerCase();
         // Add text to input field
inputField.value += textToAdd;

// Reset backspaceTimer if it exists
if (backspaceTimer) {
clearInterval(backspaceTimer);
backspaceTimer = null;
}

// Reset shiftKeyTimer if it exists
if (shiftKeyTimer) {
clearInterval(shiftKeyTimer);
shiftKeyTimer = null;
}

// If shift key is currently active, deactivate it
if (shiftKeyActive) {
shiftKeyActive = false;
shiftKey.classList.remove('active');
}

// Scroll input field to the end
inputField.scrollLeft = inputField.scrollWidth;
}

// Add event listeners to keyboard keys
keys.forEach(key => {
key.addEventListener('mousedown', e => {
e.preventDefault();
key.classList.add('active');
handleKeyPress(key.dataset.key);
});

key.addEventListener('mouseup', () => {
key.classList.remove('active');
});

key.addEventListener('mouseleave', () => {
key.classList.remove('active');
});
});

// Add event listener to shift key for toggle
shiftKey.addEventListener('click', () => {
if (!shiftKeyTimer) {
shiftKeyActive = true;
shiftKey.classList.add('active');
keys.forEach(key => {
const symbol = key.dataset.key;
if (symbol.length === 1 && /[a-z]/.test(symbol)) {
key.textContent = shiftKeyActive ? symbol.toUpperCase() : symbol.toLowerCase();
}
});
shiftKeyTimer = setInterval(() => {
shiftKeyActive = !shiftKeyActive;
keys.forEach(key => {
const symbol = key.dataset.key;
if (symbol.length === 1 && /[a-z]/.test(symbol)) {
key.textContent = shiftKeyActive ? symbol.toUpperCase() : symbol.toLowerCase();
}
});
}, 500);
} else {
clearInterval(shiftKeyTimer);
shiftKeyTimer = null;
shiftKeyActive = false;
keys.forEach(key => {
const symbol = key.dataset.key;
if (symbol.length === 1 && /[a-z]/.test(symbol)) {
key.textContent = symbol.toLowerCase();
}
});
shiftKey.classList.remove('active');
}
});