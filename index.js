var count=document.querySelectorAll(".drum").length;

for(let i=0;i<count;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var inle=this.innerHTML;
      makeSound(inle);
buttonAnimation(inle)
    }
    );
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
           
})


function makeSound(key){
    switch(key){
                   case "w":
                       var audio=new Audio("/DrumKit/sounds/tom-1.mp3");
                        audio.play()
                    break;
                    case "a":
                        var audio=new Audio("/DrumKit/sounds/tom-2.mp3");
                         audio.play()
                     break;
                     case "s":
                        var audio=new Audio("/DrumKit/sounds/tom-3.mp3");
                         audio.play()
                     break;
                     case "d":
                        var audio=new Audio("/DrumKit/sounds/tom-4.mp3");
                         audio.play()
                     break;
                     case "j":
                        var audio=new Audio("/DrumKit/sounds/snare.mp3");
                         audio.play()
                     break;
                     case "k":
                        var audio=new Audio("/DrumKit/sounds/crash.mp3");
                         audio.play()
                     break;
                     case "l":
                        var audio=new Audio("/DrumKit/sounds/kick-bass.mp3");
                         audio.play()
                     break;
               }

}

function buttonAnimation(keypressed){
    var a=document.querySelector("."+keypressed)
    a.classList.add("pressed");
    setTimeout(function(){
        a.classList.remove("pressed")
    },100);
}

