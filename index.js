function sound(){
    const numOfDramButtons = document.querySelectorAll(".drum").length;

    for (let i = 0; i < numOfDramButtons; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            const buttonInnerHtml = this.innerHTML;
            makeSound(buttonInnerHtml);
            buttonAnimation(buttonInnerHtml);
        })
    }

    document.addEventListener("keypress",function (event){
        makeSound(event.key);
        buttonAnimation(event.key);
    })
}



function makeSound(key){
    let url = "";
    switch (key) {
        case("w"):
            url = "sounds/tom-1.mp3";
            break;
        case("a"):
            url = "sounds/tom-2.mp3";
            break;
        case("s"):
            url = "sounds/tom-3.mp3";
            break;
        case("d"):
            url = "sounds/tom-4.mp3";
            break;
        case("j"):
            url = "sounds/snare.mp3";
            break;
        case("k"):
            url = "sounds/kick-bass.mp3";
            break;
        case("l"):
            url = "sounds/crash.mp3";
            break;
        default:
            alert("hii");
    }
    const audio = new Audio(url);
    audio.play();
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100)
}