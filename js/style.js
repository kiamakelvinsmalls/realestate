
var countDownDate = new Date("Dec 20, 2017 11:30:00").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

function login(){
  document.getElementById('login').style.display="block";
}

function shut(){
  document.getElementById('login').style.display="none";
  document.getElementById('register').style.display="none";
 
}
function register(){
  document.getElementById('register').style.display="block";
}
function search(){
  document.getElementById('search').style.display="block";
}

function see(){
  document.getElementById('kev2').style.display="block";
  }
function cancle(){
  document.getElementById('kev2').style.display="none";
  document.getElementById('kev3').style.display="none";
}
function see1(){
  document.getElementById('kev3').style.display="block";
  }



function show(){
  document.getElementById("gallery1").style.display="block";
}
function show2(){
  document.getElementById("gallery2").style.display="block";
}
function show3(){
  document.getElementById("gallery3").style.display="block";
}
function show4(){
  document.getElementById("gallery4").style.display="block";
}
function show5(){
  document.getElementById("gallery5").style.display="block";
}
function show6(){
  document.getElementById("gallery6").style.display="block";
}
function show7(){
  document.getElementById("gallery7").style.display="block";
}
function show8(){
  document.getElementById("gallery8").style.display="block";
}
function show9(){
  document.getElementById("gallery9").style.display="block";
}
function show10(){
  document.getElementById("gallery10").style.display="block";
}
function show11(){
  document.getElementById("gallery11").style.display="block";
}
function show12(){
  document.getElementById("gallery12").style.display="block";
}
function show13(){
  document.getElementById("gallery13").style.display="block";
}
function show14(){
  document.getElementById("gallery14").style.display="block";
}
function show15(){
  document.getElementById("gallery15").style.display="block";
}
function show16(){
  document.getElementById("gallery16").style.display="block";
}
function show17(){
  document.getElementById("gallery17").style.display="block";
}
function show18(){
  document.getElementById("gallery18").style.display="block";
}
function show19(){
  document.getElementById("gallery19").style.display="block";
}
function show20(){
  document.getElementById("gallery20").style.display="block";
}
function show21(){
  document.getElementById("gallery21").style.display="block";
}
function sho22(){
  document.getElementById("gallery22").style.display="block";
}
function show23(){
  document.getElementById("gallery23").style.display="block";
}
function show24(){
  document.getElementById("gallery24").style.display="block";
}

function me(){
  document.getElementById("gallery1").style.display="none";
  document.getElementById("gallery2").style.display="none";
  document.getElementById("gallery3").style.display="none";
  document.getElementById("gallery4").style.display="none";
  document.getElementById("gallery5").style.display="none";
  document.getElementById("gallery6").style.display="none";
  document.getElementById("gallery7").style.display="none";
  document.getElementById("gallery8").style.display="none";
  document.getElementById("gallery9").style.display="none";
  document.getElementById("gallery10").style.display="none";
  document.getElementById("gallery11").style.display="none";
  document.getElementById("gallery12").style.display="none";
  document.getElementById("gallery13").style.display="none";
  document.getElementById("gallery14").style.display="none";
  document.getElementById("gallery15").style.display="none";
  document.getElementById("gallery16").style.display="none";
  document.getElementById("gallery17").style.display="none";
  document.getElementById("gallery18").style.display="none";
  document.getElementById("gallery19").style.display="none";
  document.getElementById("gallery20").style.display="none";
  document.getElementById("gallery21").style.display="none";
  document.getElementById("gallery22").style.display="none";
  document.getElementById("gallery23").style.display="none";
  document.getElementById("gallery24").style.display="none";

}
function feedback(){
  document.getElementById("feedback").style.display="block";
}
function search(){
  document.getElementById("searchme").style.display="block"
}
function feedback(){
  document.getElementById("feedback").style.display="block";
  document.getElementById("green").style.display="none";
}
function feedbackx(){
  document.getElementById("feedback").style.display="none"
  document.getElementById("green").style.display="block"
}