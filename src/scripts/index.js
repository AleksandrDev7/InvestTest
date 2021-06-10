import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

const subscription = document.getElementById('subscription');
const div = document.querySelector(".calculator_material_checkbox");
const input = document.getElementById("material");
const suspended = document.getElementById("suspended");
const governmentPur = document.getElementById("government");
const divSuspended = document.querySelector(".suspended-focus");
const divGovernment =document.querySelector(".government-focus");

subscription.addEventListener('click', colorChange);
suspended.addEventListener('click', colorForSuspended);
governmentPur.addEventListener('click',colorForGovernment);

function colorChange() {
    div.classList.toggle("background");
    input.classList.toggle("active");
}

function colorForSuspended() {
    divSuspended.classList.toggle("background");
}

function colorForGovernment() {
    divGovernment.classList.toggle("background");
}
