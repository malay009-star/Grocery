var error_msg = document.getElementById('error_msg');
var groceryList = document.getElementById('groceryList');
var all_item = document.getElementById('all_item');
var Dell = document.getElementById('Dell');
let cleare_item = document.getElementById('cleare_item');
console.log(cleare_item);
counter = 0;

var userInput = document.getElementById('userInput');
// console.log(userInput);

// btn info
document.getElementById('btn').addEventListener('click', () => {
    if (userInput.value === "") {
        error_msg.innerHTML = "please enter an items";
        error_msg.classList.add('bg-red-100');
    } else {
        error_msg.innerHTML = "items successfully added";
        error_msg.classList.add('bg-green-100');

        // cleare item
        cleare_item.innerHTML = 'cleare items';
        cleare_item.classList.add('mt-10');
        groceryList.classList.add('mt-10');

        // create element and add classes
        let div = document.createElement('div');
        let del = div.classList.add('item_div' + counter);

        let x = document.createElement('p');
        div.classList.add('bg-blue-100');
        div.classList.add('mt-6');
        div.classList.add('px-4');
        div.classList.add('py-1');
        div.classList.add('rounded');
        div.classList.add('flex');
        div.classList.add('justify-between');

        x.classList.add('item' + counter);
        value = userInput.value;
        x.innerHTML = value;
        div.appendChild(x);
        groceryList.appendChild(div);

        // for image
        var img = new Image();
        // Set the source of the image
        img.src = "Assets/img/trash.png"
        img.classList.add('item' + counter);
        div.appendChild(img);
        groceryList.appendChild(div);

        // remove item oncling image
        img.addEventListener('click', () => {
                if (img.className === x.className) {
                    // div.style.display = 'none';
                    div.remove(del);
                }
            })
            // counter
        console.log(div);
        counter++;

        // clear item info
        cleare_item.addEventListener('click', () => {
            groceryList.innerHTML = '';
            if (groceryList.innerHTML === '') {
                error_msg.innerHTML = 'item has been deleted';
                error_msg.classList.add('bg-red-200');
                cleare_item.innerHTML = '';
                cleare_item.classList.add('mt-0')
            } else {
                error_msg.innerHTML = 'item has been added';
                error_msg.classList.add('bg-green-200');
            }
        })
    }
})