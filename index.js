
for (var i =0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var a = this.innerHTML;
    playthis(a);
    Anim(a);
});
}   

document.addEventListener("keypress",function(d){
    playthis(d.key);
    Anim(d.key);

});

function playthis(any){
    if (any === "w"){
        var audio = new Audio("./sounds/crash.mp3");
          audio.play();
    }
    if (any === "a"){
        var audio = new Audio("./sounds/kick-bass.mp3");
          audio.play();
    }
    if (any === "s"){
        var audio = new Audio("sounds/snare.mp3");
          audio.play();
    }
    if (any === "d"){
        var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
    }
    if (any === "j"){
        var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
    }
    if (any === "k"){
        var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
    }
    if (any === "l"){
        var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
    }
    


}

function Anim(button){
  var b = document.querySelector("."+ button);
  b.classList.add("pressed");
  setTimeout(function(){
    b.classList.remove("pressed");
  },100);


}
