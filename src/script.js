const floorTom = document.querySelector('#floor-tom');
const floorTomAudio = new Audio('./src/sounds/floor-tom.wav');
const tom1 = document.querySelector('#tom1');
const tom1Audio = new Audio ('./src/sounds/tom1.wav');
const chinaCymbal = document.querySelector("#china-cymbal");
const chinaCymbalAudio = new Audio ('./src/sounds/china-cymbal.wav');

// FLOOR TOM
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

// TOM 1
function playTom1 () {
    tom1Audio.currentTime = 0;
    tom1Audio.play();
}

function activateTom1 () {
    tom1.classList.add("active");
    playTom1();
}

function deactivateTom1 () {
    tom1.classList.remove("active");
}

tom1.addEventListener("click", function () {
    activateTom1();
    setTimeout(deactivateTom1, 200);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "t" || event.key === "T") {
        activateTom1();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "t" || event.key === "T") {
        deactivateTom1();
    }
});

// CHINA CYMBAL
function playChinaCymbal () {
    chinaCymbalAudio.currentTime = 0;
    chinaCymbalAudio.play();
}

function activateChinaCymbal () {
    chinaCymbal.classList.add("active");
    playChinaCymbal();
}

function deactivateChinaCymbal () {
    chinaCymbal.classList.remove("active");
}

chinaCymbal.addEventListener("click", function () {
    activateChinaCymbal();
    setTimeout(deactivateChinaCymbal, 200);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "c" || event.key === "C") {
        activateChinaCymbal();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "c" || event.key === "C") {
        deactivateChinaCymbal();
    }
});
