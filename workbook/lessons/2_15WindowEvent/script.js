// - width
// - height
// - left
// - top
// - titlebar
// - menubar
// - toolbar
// - location
// - scrollbars
// - status
// - resizable


// alert('js')
// window.alert('Hello js')

// var alert = function(message){
//     document.write(`Повідомлення : ${message}`);
// }
// window.alert('Hello js');

// window.open('https://www.google.com', 'Football24', 'width=600,height=400,resizable=yes');
// document.querySelector('#open').addEventListener('click', ()=> {
// window.open('https://www.football24.ua', 'Football24', 'width=400,height=400,resizable=yes');

// })

// let popup;

// document.querySelector('#open').addEventListener('click', () => {
//    popup = window.open('https://www.football24.ua', 'Football24', 'width=400,height=400,left=400,top=1000');
// })

// function closeWindow() {
//     popup.close();
// }

// setTimeout(closeWindow, 2000);


// let popup;

// document.querySelector('#open').addEventListener('click', () => {
//    popup = window.open('https://www.football24.ua', 'Football24', 'width=400,height=400,left=400,top=1000');
// })


// document.querySelector('#close').addEventListener('click', () => {
//     popup.close();
// })





// let popup;
// document.querySelector('#open').addEventListener('click', () => {
//    popup = window.open('https://www.football24.ua', 'Football24', 'width=400,height=400,left=400,top=1000');
//     popup.resizeTo(1000, 300);
// })


document.write(`Кількість сторінок історії = ${window.history.length}`);
// history.back()
// history.forward()
// history.go(-3)


// document.write(`<h2> Рядок запиту = ${location.href} </h2>`);
// document.write(`<h2> Шлях до ресурсу = ${location.pathname} </h2>`);
// document.write(`<h2>Загальна схема запиту = ${location.origin} </h2>`);
// document.write(`<h2> Протокол передачі = ${location.protocol} </h2>`);
// document.write(`<h2> Порт = ${location.port} </h2>`);
// document.write(`<h2> Хост =  ${location.host} </h2>`);
// document.write(`<h2> Імя хоста =  ${location.hostname} </h2>`);
// document.write(`<h2> Хеш =  ${location.hash} </h2>`);
// document.write(`<h2> Пошук =  ${location.search} </h2>`);


// location = 'https://www.google.com'
// location.assign('https://www.google.com')
// location.reload(forceReload)
// location.replace(url)



// navigator

// document.write(navigator.userAgent)
// let = browser;
// let uAgent = navigator.userAgent;
// if (uAgent.indexOf('Chrome' > -1)) {
//     browser = 'Google Chrome'
// }
// document.write(browser);


// function success(position) {
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     let altitude = position.coords.altitude;
//     let speed = position.coords.speed;
//     document.write(`<h2>Широта ${latitude}</h2>`)
//     document.write(`<h2>Довгота ${longitude}</h2>`)
//     document.write(`<h2>Висота ${altitude}</h2>`)
//     document.write(`<h2>Швидкість ${speed}</h2>`)
    
// }

// function error() {
//     document.write(`<h2>Помилка при визначенні локації</h2>`)
// }
// navigator.geolocation.getCurrentPosition(success, error)

// window.addEventListener('scroll', function (event){ 

//     console.log(event);
//     // console.log(window.scrollY);
//     this.document.body.style.background=`rgb(0, ${window.scrollY}, ${window.scrollY})`

// })

document.getElementById('open').addEventListener('click', () => {
    // window.scroll(0, 1000);
    window.scroll({
        top: 1000,
        behavior: "smooth"
        // скрол плавиний
    })
})



document.getElementById('up').addEventListener('click', () => {
    window.scrollBy({
        top: -500,
        behavior: "smooth"
    })
})

document.getElementById('down').addEventListener('click', () => {
//    window.scrollBy({
//        top: 500,
//        behavior: "auto"
//    })
//     window.scroll({
//         top: 0,
//         behavior:'smooth'

//     })
})

// document.getElementById('goUp').addEventListener('click', () => {
//     window.scroll({
//         top: 0,
//         behavior:'smooth'
//     })
// })


// document.getElementById('down').addEventListener('click', () => {
// document.getElementById("goUp").scrollIntoView({behavior:'smooth'})
// })

const leftModal = document.querySelector('.modal-left');
const rightModal = document.querySelector('.modal-right');
    
    
window.addEventListener('scroll', function (event){
    if (this.window.scrollY <= 400) {
        leftModal.style.left = `${window.scrollY /4}px`
        rightModal.style.right = `${window.scrollY/4}px`
    }
})

function myScF() {
    if (this.window.scrollY <= 400) {
        leftModal.style.left = `${window.scrollY/4}px`
        rightModal.style.right = `${window.scrollY/4}px`
    }
    else {
        window.removeEventListener('scroll', myScF)
    }
}

window.addEventListener('scroll', myScF)

window.addEventListener('resize', function(){
    console.log(window.innerWidth, window.innerHeight)
    if (this.window.innerWidth <= 960)
        window.removeEventListener('scroll', myScF)
})