const floorTom = document.querySelector('#floor-tom');
const floorTomAudio = new Audio('./src/sounds/tom.wav');

function playFloorTom () {
    floorTomAudio.currentTime = 0;
    floorTomAudio.play();
};

floorTom.addEventListener("click", playFloorTom);
document.addEventListener("keydown", function (event) {
    if (event.key === "f" || event.key === "F") {
        playFloorTom();
    }
});
