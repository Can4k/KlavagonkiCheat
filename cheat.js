const ERROR_PROBABILITY = 0.1; // вероятность, с которой вылетит "ошибка" [0, 1]
const ERROR_SYMBOL = "э"; // символ, который вставляется в строку в случае "ошибки" 
const MAX_SPEED = 500; // максимальное количество символов в минуту. 
const LANG = "RU"; // RU - русский, EN - английский

let field = document.getElementById("inputtext");
let text = document.getElementById("typetext").innerText;
text = text.split('');

for (let i = 0; i < text.length; i++) {
    if (text[i] === 'o') {
        text[i] = 'о';
    } else if (text[i] === 'c') {
        text[i] = 'с';
    } else if (text[i] === 'a') {
        text[i] = 'а';
    } else if (text[i] === 'e') {
        text[i] = 'е';
    } else if (text[i] === 'p') {
        text[i] = 'р';
    } else if (text[i] === 'x') {
        text[i] = 'х';
    } else if (text[i] === 'y') {
        text[i] = 'у';
    } else if (text[i] === '\n') {
        text[i] = ' ';
    }
}

text = text.join('').split(' ');
let index = 0, clickes = 0, symbols = 0;

const startTime = new Date();

function speed() {
    let curTime = new Date();
    let duration = (curTime.getTime() - startTime.getTime()) / 1000;
    return Math.floor((symbols / duration) * 60);
}

document.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") {
        return;
    }

    if (speed() > MAX_SPEED) {
        e.preventDefault();
        return;
    }

    clickes++;
    if (Math.random() < ERROR_PROBABILITY) {
        field.value = text[index] + ERROR_SYMBOL;
    } else {
        field.value = text[index];
        symbols += text[index].length + 1;
        index++;
    }
});

setInterval(() => {
    console.log("Текущая средняя скорость", speed());
}, 100);