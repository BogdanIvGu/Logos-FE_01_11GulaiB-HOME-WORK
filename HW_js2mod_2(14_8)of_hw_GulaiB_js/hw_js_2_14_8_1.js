
let leftInput = document.getElementById("leftInput");
let rightInput = document.getElementById("rightInput");
let moveButton = document.getElementById("moveButton");
let bottomInput = document.getElementById("bottomInput");

moveButton.addEventListener("click", function() {
    if (leftInput.value) {
        rightInput.value = leftInput.value;
        leftInput.value = "";
    }
});

bottomInput.addEventListener("blur", function() {
    if (bottomInput.value) {
        bottomInput.placeholder = bottomInput.value;
        bottomInput.value = "";
    }
});