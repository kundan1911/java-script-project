
        var level=1; 
        var pattern=""
        var userPressed=""
        var a=0
$(document).keypress(function(){
        if(userPressed.length===0 && pattern.length===0){
        $('.heading').text("level "+level) ;
        pattern_addition();
        }
})

$("button").click(function(event){
    var selectButton=event.currentTarget.attributes.id.value
press(selectButton)
  
})
function displayButton(val){
    switch (val) {
        case 1:
        return "a";
        case 2:
        return "b";
        case 3:
        return "c";
        case 4:
        return "d";
        
    }
}
function press(sb){
    shadowSound(sb);
    userPressed+=sb;
    if(userPressed.length <= pattern.length){
        if(userPressed[a]===pattern[a]){
            if(a<pattern.length-1){
                
                a++
            }
            else{
                level++;
                nextlevel(level);
                userPressed=""
                a=0;
                pattern_addition();
            }
        }
        else{
            abort()
        }
    }
    else{
        abort();
    }
    }

function nextlevel(lev){
    $('.heading').text("Level"+lev);
}
function soundDisplay(sb){
    $("#"+sb).fadeOut().fadeIn();
    var sound=new Audio("/sounds/tom-"+sb+".mp3")
    sound.play();
    
}
function shadowSound(sb){
    $("#"+sb).addClass("pressed")
    setTimeout(function(){
        $("#"+sb).removeClass("pressed")
    },100)
    var sound=new Audio("/sounds/tom-"+sb+".mp3")
    sound.play();
}
function pattern_addition(){
    var buttonValue=Math.floor((Math.random()*4))+1;
    var b=displayButton(buttonValue)
    pattern+=b;
    soundDisplay(b);
}
function abort(){
    $('.heading').text("Game Over, Press Any Key to Restart")
    $('body').addClass("endgame");
    setTimeout(function(){
        $('body').removeClass("endgame")
    },100)
    var sound=new Audio("/sounds/crash.mp3")
    sound.play()
    a=0;
    userPressed=""
    pattern=""
    level=1}