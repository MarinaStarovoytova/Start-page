const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener ('click', 
    () => {
    alert('Для вывода информации в веб-консоль');
})

const alertt = document.querySelector('#alertt');
alertt.addEventListener ('click', 
    () => {
    alert('Для вывода информации в веб-консоль');
})

const promptt = document.querySelector('#promptt');
promptt.addEventListener ('click', 
    () => {
    alert('Для вывода информации в веб-консоль');
})

const textConsoleLog = document.querySelector('#textConsoleLog');
const newConsoleLog = 'Пример использования команды console.log';
textConsoleLog.textContent = newConsoleLog; 

const textAlert = document.querySelector('#textAlert');
const newAlert = 'Пример использования команды Alert';
textAlert.textContent = newAlert; 

const textPrompt = document.querySelector('#textPrompt');
const newPrompt = 'Пример использования команды Prompt';
textPrompt.textContent = newPrompt; 