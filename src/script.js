const snareDrum = document.querySelector("#snare-drum");
const snareAudio = new Audio("./src/sounds/snare.wav");
function playSnareDrum () {
    snareAudio.currentTime = 0;
    snareAudio.play()
};
snareDrum.addEventListener("click",playSnareDrum);
document.addEventListener("keydown", function(event){
    if(event.key === "s" || event.key === "s"){
        playSnareDrum();
    }
});