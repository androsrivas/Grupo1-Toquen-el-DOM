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



const tom2 = document.querySelector('#tom2');
const tom2audio = new Audio('./src/sounds/tom.wav');

function playtom2 () {
    tom2audio.currentTime = 0;
    tom2audio.play();
};

tom2.addEventListener("click", playtom2);
document.addEventListener("keydown", function (event) {
    if (event.key === "t" || event.key === "t") {
        playtom2();
    }
});
