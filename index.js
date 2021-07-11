function mksound(keyValue) {



    switch (keyValue) {
        case 'w':
            var audio = new Audio("/sounds/tom-4.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("/sounds/tom-3.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("/sounds/tom-2.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("/sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("/sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("/sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("/sounds/crash.mp3");
            audio.play();
            break;
        default:
            var audio = new Audio("/sounds/error.mp3");
            audio.play();
    }




}

document.addEventListener("keypress",function(event){
mksound(event.key);
    makeAnimation(event.key);
})


function makeAnimation(keypressed){
    document.querySelector("."+keypressed).style.color="white";
    setTimeout(function(){
        document.querySelector("."+keypressed).style.color="rgb(196,78,130)";
    },100)
}



