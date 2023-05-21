// alert("how are you");

// document.querySelector(".w").addEventListener("click" , function(){
//     alert("Button got clicked");
// })

for (let index = 0; index < 7; index++) {
    document.querySelectorAll("button")[index].addEventListener("click" , function(){
        
        //this.innerhtml gives the letter associated to the button
        playSound(this.innerHTML);
        playAnimation(this.innerHTML);

        // console.log(this.innerHTML);
    })
    
}

// checks for the keyboard press
document.addEventListener("keydown", function (event) {

    // passes the key to playSound  
    playSound(event.key);
    playAnimation(event.key);
})

function playAnimation(value){
    document.querySelector("."+ value).classList.add("pressed");

    setTimeout(() => {
        document.querySelector("."+ value).classList.remove("pressed");
    }, 100);
}

function playSound(key){
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3')
            audio.play();
            break;
        
        case "s":
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play();
            break;


        case "a":
            var audio = new Audio('./sounds/tom-3.mp3')
            audio.play();
            break;

        case "d":
            var audio = new Audio('./sounds/tom-4.mp3')
            audio.play();
            break;

        case "j":
            var audio = new Audio('./sounds/crash.mp3')
            audio.play();
            break;

        case "k":
            var audio = new Audio('./sounds/kick-bass.mp3')
            audio.play();
            break;

        case "l":
            var audio = new Audio('./sounds/snare.mp3')
            audio.play();
            break;

        default:
            break;
    }
}

// var audio = new Audio('./sounds/tom-1.mp3')
//         audio.play();