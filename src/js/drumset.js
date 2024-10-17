const floorTom = document.querySelector('#floor-tom');
const bassDrum = document.querySelector('#bass-drum');
const snareDrum = document.querySelector("#snare-drum");
const tom1 = document.querySelector('#tom1');
const tom2 = document.querySelector('#tom2');
const chinaCymbal = document.querySelector("#china-cymbal");
const rideCymbal = document.querySelector("#ride-cymbal");
const hiHat = document.querySelector("#hi-hat");

const floorTomAudio = new Audio('./src/sounds/floor-tom.wav');
const snareAudio = new Audio("./src/sounds/snare-drum.wav");
const bassDrumAudio = new Audio('./src/sounds/bass-drum.wav');
const tom1Audio = new Audio ('./src/sounds/tom1.wav');
const tom2Audio = new Audio('./src/sounds/tom2.wav');
const chinaCymbalAudio = new Audio ('./src/sounds/china-cymbal.wav');
const rideCymbalAudio = new Audio ('./src/sounds/ride-cymbal.wav');
const hiHatAudio = new Audio ('./src/sounds/hi-hat.wav');

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
    if (event.key === "j" || event.key === "J") {
        activateFloorTom();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "j" || event.key === "J") {
        deactivateFloorTom();
    }
});

// BASS DRUM
function playBassDrum () {
    bassDrumAudio.currentTime = 0;
    bassDrumAudio.play();
};
function activateBassDrum () {
    playBassDrum();
    bassDrum.classList.add("active");
}

function deactivateBassDrum () {
    bassDrum.classList.remove("active");
}

bassDrum.addEventListener("click", function () {
    activateBassDrum();
    setTimeout(deactivateBassDrum, 200);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "x" || event.key === "X") {
        activateBassDrum();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "x" || event.key === "X") {
        deactivateBassDrum();
    }
});

// SNARE DRUM
function playSnareDrum () {
    snareAudio.currentTime = 0;
    snareAudio.play();
}

function activateSnareDrum () {
    snareDrum.classList.add("active");
    playSnareDrum();
}

function deactivateSnareDrum () {
    snareDrum.classList.remove("active");
}

snareDrum.addEventListener("click", function () {
    activateSnareDrum();
    setTimeout(deactivateSnareDrum, 200);
})

document.addEventListener("keydown", function (event) {
    if (event.key === "s" || event.key === "S") {
        activateSnareDrum();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "s" || event.key === "S") {
        deactivateSnareDrum();
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
    if (event.key === "g" || event.key === "G") {
        activateTom1();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "g" || event.key === "G") {
        deactivateTom1();
    }
});

// TOM 2
function playtom2 () {
    tom2Audio.currentTime = 0;
    tom2Audio.play();
};

function activateTom2 () {
    tom2.classList.add("active");
    playTom1();
}

function deactivateTom2 () {
    tom2.classList.remove("active");
}

tom2.addEventListener("click", function () {
    activateTom2();
    setTimeout(deactivateTom2, 200);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "h" || event.key === "H") {
        activateTom2();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "h" || event.key === "H") {
        deactivateTom2();
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
    if (event.key === "y" || event.key === "Y") {
        activateChinaCymbal();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "y" || event.key === "Y") {
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
    if (event.key === "u" || event.key === "U") {
        activateRideCymbal();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "u" || event.key === "U ") {
        deactivateRideCymbal();
    }
});

// HI HAT
function playHiHat() {
    hiHatAudio.currentTime = 0;
    hiHatAudio.play();
}

function activateHiHat () {
    hiHat.classList.add("active");
    playHiHat();
}

function deactivateHiHat () {
    hiHat.classList.remove("active");
}

hiHat.addEventListener("click", function () {
    activateHiHat();
    setTimeout(deactivateHiHat, 200);
})

document.addEventListener("keydown", function (event) {
    if (event.key === "e" || event.key === "E") {
        activateHiHat();
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "e" || event.key === "E") {
        deactivateHiHat();
    }
});