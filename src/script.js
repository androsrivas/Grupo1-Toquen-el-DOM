const dropdownContent = document.querySelector(".dprdwn-inst");

function dropdownInstrumentsSoftTransition () {
    dropdownContent.classList.toggle("show");
}

function dropdownMenuNoOverlap () {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}


