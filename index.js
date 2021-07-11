$(document).ready(function(){

    
 function mksound(keyValue) {

    switch (keyValue) {
        case 'w':
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        default:
            var audio = new Audio("error.mp3");
            audio.play();
    }




}
    
    $(document).keypress(function(event){
    mksound(event.key);
    makeAnimation(event.key);
    })

// document.addEventListener("keypress",function(event){
// mksound(event.key);
//     makeAnimation(event.key);
// })

    
function makeAnimation(keypressed){
    $("."+keypressed).css("color","white");
//     document.querySelector("."+keypressed).style.color="white";
    
    setTimeout(function(){
        $("."+keypressed).css("color","rgb(196,78,130)");
    },100)
//         document.querySelector("."+keypressed).style.color="rgb(196,78,130)";
//     },100)
}

    });


