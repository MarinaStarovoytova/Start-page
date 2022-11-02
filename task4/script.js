const text = document.querySelector('#text');
text.addEventListener ('click',
(event) => {
    event.preventDefault();
    text.textContent = prompt ('Введите текст');
})