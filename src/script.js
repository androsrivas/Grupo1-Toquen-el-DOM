const bassDrum = document.querySelector('#bass-drum');
const bassDrumAudio = new Audio('./src/sounds/boom.wav');

function playbassDrum () {
    bassDrumAudio.currentTime = 0;
    bassDrumAudio.play();
};

bassDrum.addEventListener("click", playbassDrum);
document.addEventListener("keydown", function (event) {
    if (event.key === "d" || event.key === "d") {
        playbassDrum();
    }
});

const tom1 = document.querySelector('#tom1');
const tom1Audio = new Audio('./src/sounds/tom.wav');

function playtom1 () {
    tom1Audio.currentTime = 0;
    tom1Audio.play();
};

tom1.addEventListener("click", tom1);
document.addEventListener("keydown", function (event) {
    if (event.key === "e" || event.key === "e") {
        tom1();
    }
});

const tom2 = document.querySelector('#tom2');
const tom2audio = new Audio('./src/sounds/tom.wav');

function playtom2 () {
    tom2Audio.currentTime = 0;
    tom2audio.play();
};

tom2.addEventListener("click", tom2);
document.addEventListener("keydown", function (event) {
    if (event.key === "t" || event.key === "t") {
        tom2();
    }
});
