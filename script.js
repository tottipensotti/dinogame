var player = document.getElementById("player");
document.addEventListener("click", function(){
  player.classList.add("playerJump");;
});
player.addEventListener('animationend', () =>{
  player.classList.remove("playerJump");;
});

var background = document.getElementById("background");
var cactus = document.getElementById("cactus");
var counter = 0;
var gameOver = setInterval(function() {
    let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft<80 && cactusLeft>50 && playerBottom<=130){
        cactus.style.animation = "none";
        background.style.animation = "none";  
        alert("Game Over. Puntaje: "+Math.floor(counter/100));
        counter=0;
        cactus.style.animation = "cactusMove 3s linear infinite";
        background.style.animation = "backgMove 5s linear infinite";
        }
    else{
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/100);
    }
}, 10);
