/* eslint-disable */
import table from '../../img/table.png';
import casinoCard from '../../img/newCarte.png';
import {hitACard, setBet, checkStay, playerDeck, playerScore, dealerDeck, whothewinner, amountChips} from '../Game/BlackJack';

const BlackJackPage = () => {
  const main = document.querySelector('main');
  main.innerHTML =`
  <div class="blackjack">
    <div class="backgroudImg" >
        <img class="imgTable_bj" src="${table}" alt="table"></img>
      </div>
      <div class="buttonList">
        <div id="bet">
          <div id="bet-script"> <h2>Choose your bet :</h2></div>
          <ul>
            <li><button id="bet1" type="button" disabled>10</button></li>
            <li><button id="bet5" type="button" disabled>50</button></li>
            <li><button id="bet10" type="button" disabled>100</button></li>
            <li><button id="bet50" type="button" disabled>500</button></li>
          </ul>
          </div>
        <div id="gameButton" hidden>  
          <ul>
            <li><button id="StandButton" type="button" >Stand</button></li>
            <li><button id="HitButton" type="button" >Hit</button></li>
            <li><button id="DoubleButton" type="button" disabled>Double</button></li>
          </ul>
        </div>
        <div id="NewGame" hidden>  
          <ul>
            <li><button id="NewGameButton" type="button" >New Game</button></li>
          </ul>
        </div>    
      </div>
      <div id="dealer-script" hidden> <h2>Dealer's cards :</h2></div>
      <div id="dealer-cards"></div> 
      <div id="player-script"hidden> <h2>Your cards :</h2></div>
      <div id="your-cards"></div>
      <p id="textEnd"></p> 
  </div> 
  `;

  var bet=0;

  // BET10 Button

  const bet1 = document.getElementById("bet1");
  if (amountChips >=10) {
    bet1.disabled=false;
  }
  bet1.addEventListener("click",function() {
    bet=10;
    setBet(10);
    const test = document.getElementById("bet");
    test.hidden=true;
    document.getElementById("gameButton").hidden=false;
    document.getElementById("dealer-script").hidden=false;
    document.getElementById("player-script").hidden=false;
    
    StartingGame();
  });

  // BET50 Button

  const bet5 = document.getElementById("bet5");
  if (amountChips >=50) {
    bet5.disabled=false;
  }
  bet5.addEventListener("click",function() {
    bet=50;
    setBet(50);
    const test = document.getElementById("bet");
    test.hidden=true;
    document.getElementById("gameButton").hidden=false;
    document.getElementById("dealer-script").hidden=false;
    document.getElementById("player-script").hidden=false;
    StartingGame();
  });

  // BET100 Button

  const bet10 = document.getElementById("bet10");
  if (amountChips >=100) {
    bet10.disabled=false;
  }
  bet10.addEventListener("click",function() {
    bet=100;
    setBet(100);
    const test = document.getElementById("bet");
    test.hidden=true;
    document.getElementById("gameButton").hidden=false;
    document.getElementById("dealer-script").hidden=false;
    document.getElementById("player-script").hidden=false;
    StartingGame();
  });

  // BET500 Button

  const bet50 = document.getElementById("bet50");
  if (amountChips >=500) {
    bet50.disabled=false;
  }
  bet50.addEventListener("click",function() {
    bet=500;
    setBet(500);
    const test = document.getElementById("bet");
    test.hidden=true;
    document.getElementById("gameButton").hidden=false;
    document.getElementById("dealer-script").hidden=false;
    document.getElementById("player-script").hidden=false;
    StartingGame();
  });

  // STARTING THE GAME
  
  function StartingGame() {

    // SHOW PLAYER CARDS

   for (let index = 0; index < playerDeck.length; index++) {
    const card=document.createElement("img");
    const linkn = playerDeck[index].getLink();
    import(
      /* webpackMode: "lazy-once" */
      `../../img/${linkn}`
    )
    .then(src => card.src = src.default)
    .catch(err => console.error(err));
    card.hspace=10;    
    document.getElementById("your-cards").appendChild(card);
   }

   // SHOW HIDDEN DEALER CARD

   const card=document.createElement("img");
   card.src=casinoCard;
   card.hspace=10;  
   document.getElementById("dealer-cards").appendChild(card);

   // SHOW DEALER CARD

   for (let index = 1; index < dealerDeck.length; index++) {
    
    const card=document.createElement("img");
    const linkn = dealerDeck[index].getLink();
    import(
      /* webpackMode: "lazy-once" */
      `../../img/${linkn}`
    )
    .then(src => card.src = src.default)
    .catch(err => console.error(err));
    card.hspace=10;    
    document.getElementById("dealer-cards").appendChild(card);  
   }
   var t = document.getElementById("textEnd");
   var y = document.createTextNode("Your score is : " +playerScore);
   t.appendChild(y);
  }

  // HIT A CARD BUTTON

  const hitButton = document.getElementById("HitButton");
  hitButton.addEventListener("click",function(){

    // CALL FUNCTION AND CREATE CARD

    const cardPlayer = hitACard();
    const card=document.createElement("img");
    const link=cardPlayer.getLink();
    import(
      /* webpackMode: "lazy-once" */
      `../../img/${link}`
    )
    .then(src => card.src = src.default)
    .catch(err => console.error(err));
    card.hspace=10;
    document.getElementById("your-cards").appendChild(card);
    
    var t = document.getElementById("textEnd");
    var y = document.createTextNode("Your score is : " +playerScore);
    t.replaceChild(y,t.childNodes[0]);

    if (whothewinner !=null) {
      winner();
    }

  });

  // STAND BUTTON

  const standButton = document.getElementById("StandButton");
  standButton.addEventListener("click",function(){

    // CALL STAND FUNCTION

    checkStay();
    for (let index = 2; index < dealerDeck.length; index++) {

      // SHOW DEALER CARD
    
      const card=document.createElement("img");
      const linkn = dealerDeck[index].getLink();
      import(
        /* webpackMode: "lazy-once" */
        `../../img/${linkn}`
      )
      .then(src => card.src = src.default)
      .catch(err => console.error(err));  
      card.hspace=10;     
      document.getElementById("dealer-cards").appendChild(card);
     }

      if (whothewinner !=null) {
        winner();
      }

  });

  // GET WINNER

  function winner() {
    // REVEAL HIDDEN DEALER CARD

    const hiddencard=document.createElement("img");
    const linkhiddencard = dealerDeck[0].getLink();
    import(
      /* webpackMode: "lazy-once" */
      `../../img/${linkhiddencard}`
    )
    .then(src => hiddencard.src = src.default)
    .catch(err => console.error(err));
    hiddencard.hspace=10;  
    const element = document.getElementById("dealer-cards");
    element.replaceChild(hiddencard, element.childNodes[0]);


    standButton.disabled=true;
    hitButton.disabled=true;
    document.getElementById("NewGame").hidden=false;

    var t = document.getElementById("textEnd");
    if (whothewinner==1) {
      var y = document.createTextNode("The dealer just Won, Sorry");
      t.replaceChild(y,t.childNodes[0]);
    }
    if (whothewinner==2) {
      var y = document.createTextNode("You just won, Congrats !");
      t.replaceChild(y,t.childNodes[0]);
    }
    if (whothewinner==3) {
      var y = document.createTextNode("It's a draw, nobody won");
      t.replaceChild(y,t.childNodes[0]);
    }
  }

  // NEW GAME BUTTON

  const newGame = document.getElementById("NewGameButton");
  newGame.addEventListener("click",function() {
    window.location.reload();
  });

  const doubleButton = document.getElementById("DoubleButton");
  doubleButton.addEventListener("click",function() {
    console.log("double!!!!");
  });


}

export default BlackJackPage;
