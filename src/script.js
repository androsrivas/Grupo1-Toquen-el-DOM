const floorTom = document.querySelector('#floor-tom');
const floorTomAudio = new Audio('./src/sounds/tom.wav');

function playFloorTom () {
    floorTomAudio.currentTime = 0;
    floorTomAudio.play();
};

function activateFloorTom () {
    floorTom.classList.add("active");
    playFloorTom();
}

function deactivateFloorTom () {
    floorTom.classList.remove("active");
}

floorTom.addEventListener("click", function () {
    activateFloorTom();
    setTimeout(deactivateFloorTom, 200);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "f" || event.key === "F") {
        activateFloorTom();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "f" || event.key === "F") {
        deactivateFloorTom();
    }
});
