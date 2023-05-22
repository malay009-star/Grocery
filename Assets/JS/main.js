var error_msg = document.getElementById('error_msg');

var input = document.getElementById('input');

var btn = document.getElementById('btn');
console.log(btn);

var itemBox = document.getElementById('item-box');

var item = document.getElementById('item');

var Dell = document.getElementById('Dell');

function showItem() {
    if (input.value === "") {
        error_msg.textContent = 'please enter item';
        error_msg.style.display = 'block';
    } else {
        error_msg.style.display = 'block';
        error_msg.innerHTML = 'message has been recievd';
        error_msg.style.background = '#49BE25';
        error_msg.style.color = 'white';
        item.innerHTML = input.value;
        itemBox.style.display = 'block';
        itemBox.style.display = 'flex';
    }
}
Dell.addEventListener('click', () => {
    itemBox.style.display = 'none';
    error_msg.style.display = 'none';
    input.value = "";
})