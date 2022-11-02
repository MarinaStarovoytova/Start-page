const trafficLightElGreen = document.querySelector('#trafficLightGreen');
const trafficLightElYellow = document.querySelector('#trafficLightYellow');
const trafficLightElRed = document.querySelector('#trafficLightRed');

function makeGreen() {
    // покраска
    trafficLightElRed.style.background = ('black');
    trafficLightElGreen.style.background = ('green');
    //замена обработчик событий
    trafficLightElGreen.removeEventListener('click',makeGreen);
    trafficLightElGreen.addEventListener('click',makeYellow);
    trafficLightElYellow.removeEventListener('click',makeGreen);
    trafficLightElYellow.addEventListener('click',makeYellow);
    trafficLightElRed.removeEventListener('click',makeGreen);
    trafficLightElRed.addEventListener('click',makeYellow);
    }

function makeYellow() {
    // покраска
    trafficLightElGreen.style.background = ('black');
    trafficLightElYellow.style.background = ('yellow');
    //замена обработчик событий
    trafficLightElGreen.removeEventListener('click',makeYellow);
    trafficLightElGreen.addEventListener('click',makeRed);
    trafficLightElYellow.removeEventListener('click',makeYellow);
    trafficLightElYellow.addEventListener('click',makeRed);
    trafficLightElRed.removeEventListener('click',makeYellow);
    trafficLightElRed.addEventListener('click',makeRed);
}

function makeRed() {
    // покраска
    trafficLightElYellow.style.background = ('black');
    trafficLightElRed.style.background = ('red');
    //замена обработчик событий
    trafficLightElGreen.removeEventListener('click',makeRed);
    trafficLightElGreen.addEventListener('click',makeGreen);
    trafficLightElYellow.removeEventListener('click',makeRed);
    trafficLightElYellow.addEventListener('click',makeGreen);
    trafficLightElRed.removeEventListener('click',makeRed);
    trafficLightElRed.addEventListener('click',makeGreen);
}

trafficLightElGreen.addEventListener('click', makeGreen);
trafficLightElYellow.addEventListener('click', makeGreen);
trafficLightElRed.addEventListener('click', makeGreen);