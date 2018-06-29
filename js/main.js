//variable
var total;

//cached elements
var displayEl = document.querySelector('h1');
var inputEl = document.querySelector('input');

//event listener
document.getElementById('add').addEventListener('click', add);
document.getElementById('subtract').addEventListener('click', subtract);

//function
function initialize() {
    total = 0;
    inputEl.value = 1;
    render();
}

function render() {
    displayEl.textContent = total;
    inputEl.textContent = 1;
    displayEl.style.color = total >= 0 ? 'green' : 'red';
}

function add() {
    total += parseFloat(inputEl.value);
    render();
}

function subtract() {
    total -= parseFloat(inputEl.value);
    render();
}

initialize();

