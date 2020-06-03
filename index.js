function answers() {
  var x = document.getElementsByClassName("num0");
  var i;
  for (i = 0; i < x.length; i++) {
x[i].style.color = "#ee91bc";
}

}
function myPlayFunction() {
    document.getElementById("move1").style.animationPlayState = "running";
}

function myPauseFunction() {
  document.getElementById("move1").style.animationPlayState = "paused";
}
function SSTF(){
  var a = document.getElementsByClassName("num1");
  var i;
  for (i=0; i < a.length; i++) {
    a[i].style.color = "#ee91bc";
  }
}
function myPlaySSTF() {
    document.getElementById("move2").style.animationPlayState = "running";
}

function myPauseSSTF() {
  document.getElementById("move2").style.animationPlayState = "paused";
}
function LOOK(){
  var b = document.getElementsByClassName("num2");
  var i;
  for (i=0; i < b.length; i++) {
    b[i].style.color = "#ee91bc";
  }
}
function myPlayLOOKDown() {
    document.getElementById("move3").style.animationPlayState = "running";
}

function myPauseLOOKDown() {
  document.getElementById("move3").style.animationPlayState = "paused";
}
function myPlayLOOKUp() {
    document.getElementById("move4").style.animationPlayState = "running";
}

function myPauseLOOKUp() {
  document.getElementById("move4").style.animationPlayState = "paused";
}
function CLOOK(){
  var c = document.getElementsByClassName("num3");
  var i;
  for (i=0; i < c.length; i++) {
    c[i].style.color = "#ee91bc";
  }
}
function myPlayCLOOKDown() {
    document.getElementById("move5").style.animationPlayState = "running";
}

function myPauseCLOOKDown() {
  document.getElementById("move5").style.animationPlayState = "paused";
}
function myPlayCLOOKUp() {
    document.getElementById("move6").style.animationPlayState = "running";
}

function myPauseCLOOKUp() {
  document.getElementById("move6").style.animationPlayState = "paused";
}
