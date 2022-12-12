/* eslint-disable */


var figure1 = document.getElementById("figure1");
var figure2 = document.getElementById("figure2");
var figure3 = document.getElementById("figure3");
var result =  document.getElementById("result");
var spinWon =  document.getElementById("spinWon");
var spinLost =  document.getElementById("spinLost");
var oddsText =  document.getElementById("odds");
var textCredits =  document.getElementById("textCredits");
var totWon = 0,totLost = 0; totCredits = 1000;
colors = ["royalblue","red","green"];


function generateRandom(){
  var  rnd = Math.floor(Math.random()*colors.length);
  return rnd;
}

function checkResult(n1,n2,n3){
  return (n1 == n2 && n2 == n3) ? true : false;
}

function spin(){
  var credits =  document.getElementById("credits").value;
  if(credits > 0 && credits <= totCredits){
    var n1 = generateRandom();
    var n2 = generateRandom();
    var n3 = generateRandom();

    figure1.classList.add("animated","bounceIn");
    figure2.classList.add("animated","bounceIn");
    figure3.classList.add("animated","bounceIn");

    figure1.innerHTML= n1;
    figure2.innerHTML = n2;
    figure3.innerHTML = n3;

    figure1.style.background = colors[n1];
    figure2.style.background = colors[n2];
    figure3.style.background = colors[n3];

    var success = checkResult(n1,n2,n3);
    if(success){
      result.innerHTML = "YOU <green>WON</green>";
      totWon++;
      spinWon.innerHTML = totWon;
      manageCredits(true);
    }else{
      result.innerHTML = "YOU <red>LOST<red>";
      totLost++;
      spinLost.innerHTML = totLost;
      manageCredits(false);
    }

    odds = Math.floor((totWon/(totWon+totLost))*100);
    oddsText.innerHTML = odds+"%";

    setTimeout(()=>{
      figure1.classList.remove("animated","bounceIn");
      figure2.classList.remove("animated","bounceIn");
      figure3.classList.remove("animated","bounceIn");
    },500);
  }else{
    result.innerHTML = "<red>🢠🢠🢠</red> INSERT CREDITS"
  }
}

function manageCredits(x){
  var credits =  document.getElementById("credits").value;
  if(x){
    totCredits += credits*8;
    textCredits.innerHTML = totCredits;
  }
  else{
    totCredits -= credits;
    textCredits.innerHTML = totCredits;
  }
}
