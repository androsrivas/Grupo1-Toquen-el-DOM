const floorTom = document.querySelector('#floor-tom');
const bassDrum = document.querySelector('#bass-drum');
const tom1 = document.querySelector('#tom1');
const tom2 = document.querySelector('#tom2');
const chinaCymbal = document.querySelector("#china-cymbal");
const rideCymbal = document.querySelector("#ride-cymbal");

const floorTomAudio = new Audio('./src/sounds/floor-tom.wav');
const bassDrumAudio = new Audio('./src/sounds/boom.wav');
const tom1Audio = new Audio ('./src/sounds/tom1.wav');
const tom2audio = new Audio('./src/sounds/tom.wav');
const chinaCymbalAudio = new Audio ('./src/sounds/china-cymbal.wav');
const rideCymbalAudio = new Audio ('./src/sounds/ride-cymbal.wav');

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

// BASS DRUM
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

// TOM 2
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

// RIDE CYMBAL
function playRideCymbal () {
    rideCymbalAudio.currentTime = 0;
    rideCymbalAudio.play();
}

function activateRideCymbal () {
    rideCymbal.classList.add("active");
    playRideCymbal();
}

function deactivateRideCymbal () {
    rideCymbal.classList.remove("active");
}

rideCymbal.addEventListener("click", function () {
    activateRideCymbal();
    setTimeout(deactivateChinaCymbal, 200);
})

document.addEventListener("keydown", function (event) {
    if (event.key === "r" || event.key === "R") {
        activateRideCymbal();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "r" || event.key === "R") {
        deactivateRideCymbal();
    }
});
