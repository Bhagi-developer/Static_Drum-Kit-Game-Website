let n = 0;

while (n < document.querySelectorAll(".drum").length) {

    document.querySelectorAll(".drum")[n].addEventListener("click", function () {


        let buttonLetter = this.innerHTML;
        makeSound(buttonLetter);
        makeAnimation(buttonLetter);

    });

    n++;
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    makeAnimation(event.key);
})

function makeSound(key) {

    switch (key) {
        case "w":
            let tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;

           
        case "j":
            let crash = new Audio("crash.mp3");
            crash.play();
            break;

        case "k":
            let kickbass = new Audio("kick-bass.mp3");
            kickbass.play();
            break;

            case "l":
                let snare = new Audio("snare.mp3");
                snare.play();
                break;
    

        

        default:
            console.log("erro occured");
            break;
    }
}

function makeAnimation(keypressed){
    document.querySelector("."+keypressed).style.color="white";
    setTimeout(function(){
        document.querySelector("."+keypressed).style.color="rgb(196,78,130)";
    },100)
}



