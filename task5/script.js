const button = document.querySelector('button');
const input = document.querySelector('input');
const duplicatField = document.querySelector('#duplicatField');

input.addEventListener('keyup',
() => {
    duplicatField.textContent = input.value;
})

button.addEventListener('click', 
(event) => {
    event.preventDefault();
    console.log(input.value);
    input.value = '';
    duplicatField.textContent = '';
})