function randColor() {
    return `hsl(${Math.floor(Math.random() * 360)},100%,50%)`;
}

let bulbs = document.getElementsByClassName('bulb');
let mode = document.querySelector('.mode-btn');
let interval, time = 1000, speed = 50;

function randomMode() {
    for (let i = 0; i < bulbs.length; i++) {
        let color = randColor();
        bulbs[i].style.color = color;
        bulbs[i].style.backgroundColor = color;
        bulbs[i].classList.add('glow');
    }
}

let index = 0;
function waveMode() {

    for (let i = 0; i < bulbs.length; i++) {
        bulbs[i].style.backgroundColor = '#333';
        bulbs[i].style.color = '#333';
        bulbs[i].classList.remove('glow');
    }
    let color = randColor();
    bulbs[index].style.backgroundColor = color;
    bulbs[index].style.color = color;
    bulbs[index].classList.add("glow");
    index = (index + 1) % bulbs.length;

}

function discoLight() {
    if (mode.innerHTML === 'Random Mode') {
        randomMode();
    }
    else if (mode.innerHTML === 'Wave Mode') {
        waveMode();
    }
}

//speed slider
let speedSlider = document.getElementById('speed-slider');
speedSlider.addEventListener('input', () => {
    clearInterval(interval)
    speed = speedSlider.value;

    if (speed === '50') {
        time = 1100;
        document.querySelector('.slider-label').innerHTML = 'Speed : Avg'
    }
    else if (speed === '100') {
        time = 200;
        document.querySelector('.slider-label').innerHTML = 'Speed : Max'
    }
    else if (speed === '0') {
        time = 2000;
        document.querySelector('.slider-label').innerHTML = 'Speed : Min'
    }

    if (ssBtn.getAttribute('data-state') === 'running') {
        interval = setInterval(discoLight, time);
    }
})

//start-stop-btn process
let ssBtn = document.querySelector('.start-stop-btn');
ssBtn.setAttribute('data-state', 'stop');
ssBtn.addEventListener('click', startStop)

function startStop() {
    if (ssBtn.getAttribute('data-state') === 'stop') {
        interval = setInterval(discoLight, time);
        ssBtn.setAttribute('data-state', 'running');
        ssBtn.innerHTML = 'Stop';
    }
    else if (ssBtn.getAttribute('data-state') === 'running') {
        clearInterval(interval);
        ssBtn.setAttribute('data-state', 'stop');
        ssBtn.innerHTML = 'Start';
    }
}

//random-wave mode-btn process
mode.addEventListener('click', () => {
    if (mode.innerHTML === 'Random Mode') {
        mode.innerHTML = 'Wave Mode';
    }
    else if (mode.innerHTML === 'Wave Mode') {
        mode.innerHTML = 'Random Mode';
    }
})



