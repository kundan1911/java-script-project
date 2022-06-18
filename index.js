
var a=Math.random();
var b=Math.random();
a*=6;
b*=6;
a=Math.floor(a);
b=Math.floor(b);
a++;
b++;

if(a===b){
document.querySelector(".heading").textContent="Draw!"
}
else if(a>b){
    document.querySelector(".heading").innerHTML="<img src='/dicegame/images/flag.png' class='flag'> Player 1 Wins! "
}
else{
    document.querySelector(".heading").innerHTML="Player 2 Wins! <img src='/dicegame/images/flag.png' class='flag'> "
}  

document.querySelector(".p1").setAttribute("src","/dicegame/images/"+a.toString()+".png ")
document.querySelector(".p2").setAttribute("src","/dicegame/images/"+b.toString()+".png ")