const keys = document.querySelectorAll('.key');
const inputField = document.getElementById('textarea');
const capsLock = document.querySelector('.capslock');

let backspaceIntervalId;

const insertTab = () => {
  const start = inputField.selectionStart;
  const end = inputField.selectionEnd;
  inputField.value = inputField.value.substring(0, start) + '\t' + inputField.value.substring(end);
  inputField.selectionStart = inputField.selectionEnd = start + 1;
};



const insertNewline = () => {
  const prev = inputField.value
  inputField.value = prev + '\n' ;
  // const start = inputField.selectionStart;
  // const end = inputField.selectionEnd;
  // const currentValue = inputField.value;
  // inputField.value = currentValue.substring(0, start) + '\n' + currentValue.substring(end);
  // inputField.selectionStart = inputField.selectionEnd = start + 1;
  
};


const handleBackspace = () => {
  const value = inputField.value;
  const cursorPos = inputField.selectionStart;
  if (cursorPos > 0) {
    const newValue = value.substring(0, cursorPos - 1) + value.substring(cursorPos);
    inputField.value = newValue;
    inputField.selectionStart = inputField.selectionEnd = cursorPos - 1;
  }
};

const startBackspaceInterval = () => {
  if (!backspaceIntervalId) {
    backspaceIntervalId = setInterval(() => {
      handleBackspace();
    }, 333);
  }
};

const stopBackspaceInterval = () => {
  clearInterval(backspaceIntervalId);
  backspaceIntervalId = null;
};


const handleKeyClick = (key) => {
  const value = key.textContent;
  const capsLockOn = capsLock.classList.contains('active');
  inputField.focus();
  switch (value) {
    case 'Tab':
      insertTab();
      break;
    case 'Caps Lock':
      capsLock.classList.toggle('active');
      break;
    case 'Enter':
      insertNewline();
      break;
    case 'Backspace':
      handleBackspace();
      break;
    default:
      inputField.value += capsLockOn ? value.toUpperCase() : value.toLowerCase();
  }
  key.style.backgroundColor = 'darkgrey';
  setTimeout(() => {
    key.style.backgroundColor = '';
  }, 500);
};

const handleKeyPress = (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
    insertTab();
  } else if (event.key === 'Enter') {
    event.preventDefault();
    insertNewline();
  } else if (event.key === 'Backspace') {
    event.preventDefault();
    handleBackspace();
    startBackspaceInterval();
  }
};

const handleKeyUp = (event) => {
  if (event.key === 'Backspace') {
    stopBackspaceInterval();
  }
};

keys.forEach((key) => {
  key.addEventListener('click', () => {
    handleKeyClick(key);
  });
});

inputField.addEventListener('keydown', handleKeyPress);
inputField.addEventListener('keyup', handleKeyUp);







// за допомогою js та події клавіатури(keyboard event) необхідно добавляти текст який ми вводимо а також підсвічути клавіші які натискаємо
// мова клавіатури тільки одна – англійська
// клавіша tab – має робити табуляцію
// клавіша caps lock – має робити для друку текст в верхньому регістрі, коли вона активна, і в маленькому регістрі, коли вона не активна.
// клавіша enter – має переносити наступний текст, який буде друкуватись на новий рядок
// клавіша backspace – має видаляти текст по одній букві, при кліканні на клавішу, і при постійному утриманні клавіші, текст повинен видалятись із швидкістю 3 букви на секунду.
// клавіші shift – мають робити текст у верхньому регістрі при утриманні даної клавіші
