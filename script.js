function makeBubble(){
    var clutter = ""

for(var i = 1; i<=160; i++){
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}

document.querySelector("#ppart2").innerHTML = clutter
}

function runTimer(){
    var timer = 30;
    setInterval(function(){
        timer--
        if(timer>0){
            document.querySelector("#timer").textContent = timer
            
        }
        else{
            timer = 0
            document.querySelector("#timer").textContent = timer
            document.querySelector("#ppart2").innerHTML = "" 


            
        }
       
    },1000)
}
var rn = 0
function getHit(){
    
     rn = Math.floor(Math.random()*10)

    document.querySelector("#hitter").textContent = rn
}
var score = 0;
function getScore(){
    score +=10;
    document.querySelector("#score").textContent = score
}
document.querySelector("#ppart2")
.addEventListener("click",function(dets){
    var number = Number(dets.target.textContent)
    if(rn == number){
        getScore()
        makeBubble()
         getHit()
    }
})
runTimer()
makeBubble()
getHit()
