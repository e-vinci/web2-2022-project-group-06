/* eslint-disable */
let totWon = 0;
let totLost = 0;
let totWonWith2 = 0;
let totCredits = 1000;
const colors = ["royalblue","red","green", "gold", "purple"];

let credits =  0;
let figure1 = null;
let figure2 = null;
let figure3 = null;
let result = null;
let spinWon = false;
let spinLost = false;
let textCredits = null;
let chipsWon = null;
let bet = [];

function generateRandom(){
  const  rnd = Math.floor(Math.random()*colors.length);
  return rnd;
}

function checkResult(n1,n2,n3){
  if(n1 === n2 && n2 === n3){
    return true;
  }
  return false;
}

function checkResultOnlyFirstTwo(n1, n2, n3){
  if((n1 === n2 && n1 !== n3) || (n1 === n3 && n1 !== n2) || (n2 === n3 && n2 !== n1)) {
    return true;
  }
  return false;
}

function spin(chips, figureN1 , figureN2, figureN3, results , spinWons, spinLosts, textCredit, chipsWons){
  credits =  chips;
  figure1 = figureN1;
  figure2 = figureN2;
  figure3 = figureN3;
  result = results;
  spinWon = spinWons;
  spinLost = spinLosts;
  textCredits = textCredit;
  chipsWon = chipsWons;

  if(credits > 0 && credits <= totCredits){
    const n1 = generateRandom();
    const n2 = generateRandom();
    const n3 = generateRandom();

    figure1.classList.add("animated","bounceIn");
    figure2.classList.add("animated","bounceIn");
    figure3.classList.add("animated","bounceIn");

    figure1.innerHTML= n1;
    figure2.innerHTML = n2;
    figure3.innerHTML = n3;

    figure1.style.background = colors[n1];
    figure2.style.background = colors[n2];
    figure3.style.background = colors[n3];

    const success = checkResult(n1,n2,n3);
    const success2 = checkResultOnlyFirstTwo(n1,n2,n3);
    if(success){
      result.innerHTML = "YOU <green>WON</green>";
      totWon +=1;
      bet.push("<br><font style='color: green;'>+"+credits*4+"</font>");
      chipsWon.innerHTML = bet;
      spinWon.innerHTML = totWon;
      manageCredits(true);
      bet.pop();
    }
    if(success2){
      
      result.innerHTML = "YOU <green>WON with only two color</green>";
      totWonWith2 += 1;
      bet.push("<br><font style='color: green;'>+"+credits*(1/2)+"</font>");
      chipsWon.innerHTML = bet;
      spinWon.innerHTML = totWonWith2;
      manageCreditsWin2(true);
      bet.pop();
    }
    if(!success && !success2){
      result.innerHTML = "YOU <red>LOST<red>";
      totLost +=1;
      spinLost.innerHTML = totLost;
      bet.push("<br><font style='color: red;'>-"+credits+"</font>");
      chipsWon.innerHTML = bet;
      manageCredits(false);
      bet.pop();
    }


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
  if(x){
    totCredits += credits*4;
    textCredits.innerHTML = totCredits;
  }
  else{
    totCredits -= credits;
    textCredits.innerHTML = totCredits;
  }
}

function manageCreditsWin2(x){
  if(x){
    totCredits += credits*(1);
    textCredits.innerHTML = totCredits;
  }
  else{
    totCredits -= credits;
    textCredits.innerHTML = totCredits;
  }
}

export default spin;