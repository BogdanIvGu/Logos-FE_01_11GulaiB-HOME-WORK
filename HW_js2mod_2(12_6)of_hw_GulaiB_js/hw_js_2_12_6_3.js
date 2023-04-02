// let blocks = document.querySelectorAll('div');

// // blocks.forEach(function(block) {
// //     block.addEventListener('click', function() {
// //         let imageUrl = prompt('Введіть URL-адресу зображення');
// //         this.style.backgroundImage = `url(${imageUrl})`;
// //     });
// // });

// let saveButton = document.getElementById('save-button');
// let imageUrl;

// blocks.forEach(function(block) {
//     block.addEventListener('click', function() {
//         imageUrl = prompt('Введіть URL-адресу зображення');
//         this.style.backgroundImage = `url(${imageUrl})`;
//         this.style.backgroundSize = 'cover';
//         this.style.backgroundPosition = 'center';
//         this.style.backgroundRepeat = 'no-repeat';
//     });
// });

// saveButton.addEventListener('click', function() {
//     if (imageUrl) {
//         window.open(imageUrl);
//     }
// });


let blocks = document.querySelectorAll('.block');
let saveButtons = document.querySelectorAll('.save-button');

blocks.forEach(function(block, index) {
    let imageUrl;

    block.addEventListener('click', function() {
        imageUrl = prompt('Введіть URL-адресу зображення');
        this.style.backgroundImage = `url(${imageUrl})`;
        this.style.backgroundSize = 'cover';
        this.style.backgroundPosition = 'center';
        this.style.backgroundRepeat = 'no-repeat';
        
        //  saveButtons[index].addEventListener('click', function() {
        //      if (imageUrl) {
        //          let link = document.createElement('a');
        //          link.href = imageUrl;
        //          link.download = true;
        //          link.click();
        //      }
        //  });
     });
});
