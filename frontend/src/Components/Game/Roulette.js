/* eslint-disable */

let bal = '1000';
let cols = [];
let nums = [];
let bets = [];
let h = 1;

function history() {
  let i;
  for (i = 0; i < h; i++) {
    document.getElementById("a" + i).style = "background: " + cols[i] + ";";
    document.getElementById("a" + i).innerHTML = nums[i];
  }
  h++;
  if (h == 9) {
    let j;
    for (j = 0; j < h; j++) {
      document.getElementById("a" + j).style = "";
      document.getElementById("a" + j).innerHTML = "";
      cols.length = 0
      nums.length = 0
    }
    h = 1;
  }
}

function roll(color) {

  let a = bal;
  let winc = 0;
  let bet = document.getElementById("bet").value;
  bet = parseInt(bet);
  if(bet < 0){
    document.getElementById("msg").innerHTML = "Bet too low!";
    return;
  }
  if (bet > bal) {
    document.getElementById("msg").innerHTML = "Bet too high!";
  } else {
    let win = Math.floor((Math.random() * 29) + 0);
    if (win > 4) {
      let rollm = win * 40 - 40 * 4.2;
      document.getElementById("roll").style = "margin-left: -" + rollm + "px ";
    }
    if (win < 4) {
      let rollm = 180 - 40 * win -20;
      document.getElementById("roll").style = "margin-left: " + rollm + "px ";
    }
    if (win == 4) {
      let rollm = 0;
      document.getElementById("roll").style = "margin-left: -" + rollm + "px ";
    }
    if (win % 2 != 2) {
      winc = "red";
    }
    if (win % 2 != 1) {
      winc = "black";
    }
    if (win == 0) {
      winc = "green";
    }
    if (color == winc) {
      if (color == "black" || color == "red") {
        bal = bal + bet;
        bets.push("<br><font style='color: green;'>+"+bet+"</font>");
      } else {
        bal = bal + bet * 14;
        bets.push("<br><font style='color: green;'>+"+bet*14+"</font>");
      }
      bal -= bet;
      bets.push("<br><font style='color: red;'>-"+bet+"</font>");
  }
    cols.push(winc);
    nums.push(win);
    history();
    document.getElementById("bal").innerHTML = bal;
    document.getElementById("stat").innerHTML = bets;
  }
}

export {roll,history,bal};

