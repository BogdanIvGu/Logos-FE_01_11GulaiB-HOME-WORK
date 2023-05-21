
// first_block
const getS = selector => document.querySelector(selector);

setInterval(() => {
let dd = new Date();
    let day = dd.getDate();
    let mn = dd.getMonth()+1;
    let fy = dd.getFullYear();
    if (day < 10) day = '0' + day;
    if (mn < 10) mn = '0' + mn;
    document.querySelector('.data').innerHTML = `${day}.${mn}.${fy}`;
}, 1000);

setInterval(() => {
    let dd = new Date();
    let hh = dd.getHours();
    let mm = dd.getMinutes();
    let ss = dd.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    document.querySelector('.clock').innerHTML=`${hh} :${mm}:${ss}`
},1000
)










// stopwatch



const timeDisplay = document.querySelector('.stopwatch_DG');
const btnStart = document.querySelector('.btnStart');
const btnLoop = document.querySelector('.btnLoop');
const btnStop = document.querySelector(' .btnStop');
const btnReset = document.querySelector('.btnReset');

let startTime;
let timerInterval;

function start() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 100);
  console.log('timerInterval', timerInterval);
  console.log('startTime', timerInterval);
}



function stop() {
  clearInterval(timerInterval);
}



function updateTimer() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;

  let hh = Math.floor(elapsedTime / 3600000);
  let mm = Math.floor((elapsedTime % 3600000) / 60000);
  let ss = Math.floor((elapsedTime % 60000) / 1000);
  let ms = Math.floor((elapsedTime % 1000));

  let formattedTime = `${formatDigits(hh)}:${formatDigits(mm)}:${formatDigits(ss)}:${formatDigitsMS(ms)}`;
  timeDisplay.textContent = formattedTime;

}

function formatDigits(value) {
  return value.toString().padStart(2, '0');
}
function formatDigitsMS(value) {
  return value.toString().padStart(3, '0');
}



function stop() {
  clearInterval(timerInterval);
}

function loop() {
  const currentTime = timeDisplay.textContent;
  const newElement = document.createElement('div');
  newElement.textContent = currentTime;
  newElement.classList.add('saved-time'); //  клас "saved-time" до нового елементу
  document.querySelector('.stopwatch_save').appendChild(newElement);

  const savedTimes = document.querySelectorAll('.saved-time');
  const stopwatchSave = document.querySelector('.stopwatch_save');
  stopwatchSave.style.overflowX = 'auto';
  stopwatchSave.style.whiteSpace = 'nowrap';
}

function reset() {
  clearInterval(timerInterval);
  timeDisplay.textContent = '00:00:00';
  getS('.stopwatch_save').innerHTML = '';
}




// таймер зворотнього відліку
// countdown_timer


let minutes = 0;
let seconds = 0;
let countdownInterval;

function startTimeT() {
  countdownInterval = setInterval(updateTime, 1000);
}

function stopTimeT() {
  clearInterval(countdownInterval);
}


function resetTimeT() {
  minutes = 0;
  seconds = 0;
  getS('.timerCounter').innerHTML = `${formatDigitsT(minutes)}:${formatDigitsT(seconds)}`;
  getS('.setTime').innerHTML = `${formatDigitsT(minutes)}`;
updateTimerDisplay();
}

function updateTime() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(countdownInterval);
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  updateTimerDisplay();
}

function updateTimerDisplay() {
  getS('.timerCounter').innerHTML = `${formatDigitsT(minutes)}:${formatDigitsT(seconds)}`;
}

function increaseMinutes() {
  minutes++;
  getS('.setTime').innerHTML = `${formatDigitsT(minutes)}`;
}

function decreaseMinutes() {
  minutes--;
  if (minutes < 0) {
    minutes = 0;
  }
  getS('.setTime').innerHTML = `${minutes}`;
}

function formatDigitsT(value) {
  return value.toString().padStart(2, '0');
}


getS('.btnPlus').addEventListener('click', increaseMinutes);
getS('.btnMinus').addEventListener('click', decreaseMinutes);




