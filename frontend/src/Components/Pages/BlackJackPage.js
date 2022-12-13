/* eslint-disable */
import table from '../../img/table.png';
import casinoCard from '../../img/newCarte.png';
import {hitACard, setBet, checkStay, hitAvailable, playerDeck, check,splitAvailable, dealerDeck} from '../Game/BlackJack';
import test from '../../img/Cards/cardHearts2.png';
import clubsone from '../../img/Cards/cardClubsA.png';

const BlackJackPage = () => {
  const main = document.querySelector('main');
  main.innerHTML =`
  <div class="balckjack">
      <div class="backgroudImg" >
        <img class="imgTable_bj" src="${table}" alt="table"></img>
      </div>
      <div class="cardImg">
          <img class="imgCard_bj" src="${casinoCard}" alt="card"></img>
      </div>
      <div class="buttonList">
        <div id="bet">
          <ul>
            <li><button id="bet1" type="button" >10</button></li>
            <li><button id="bet5" type="button" >50</button></li>
            <li><button id="bet10" type="button" disabled>100</button></li>
            <li><button id="bet50" type="button" disabled>500</button></li>
          </ul>
          </div>
        <div id="gameButton" hidden>  
          <ul>
            <li><button id="StandButton" type="button" >Stand</button></li>
            <li><button id="HitButton" type="button" >Hit</button></li>
            <li><button id="DoubleButton" type="button" disabled>Button</button></li>
            <li><button id="Split" type="button" disabled>Split</button></li>
          </ul>
        </div>  
      </div>
      <div style="position: absolute; left:20px; top:15px; color:#9F9; font-size:large">Dealer's cards:</div>
      <div id="dealer-cards"></div> 
      <div id="your-cards"></div> 
  </div> 
  `;
  const bet1 = document.getElementById("bet1");
  bet1.addEventListener("click",function() {
    setBet(1);
    const test = document.getElementById("bet");
    test.hidden=true;
    document.getElementById("gameButton").hidden=false;
    console.log(hitAvailable);
  });

  const bet5 = document.getElementById("bet5");
  bet5.addEventListener("click",function() {
    setBet(5);
    const test = document.getElementById("bet");
    test.hidden=true;
    document.getElementById("gameButton").hidden=false;
    testttt();
    console.log(hitAvailable);
    if (splitAvailable==true) {}
  });

  const bet10 = document.getElementById("bet10");
  bet10.addEventListener("click",function() {
    setBet(10);
    const test = document.getElementById("bet");
    test.hidden=true;
    document.getElementById("gameButton").hidden=false;
  });

  const bet50 = document.getElementById("bet50");
  bet50.addEventListener("click",function() {
    setBet(50);
    const test = document.getElementById("bet");
    test.hidden=true;
    document.getElementById("gameButton").hidden=false;
    testttt();
    console.log(hitAvailable);
  });
  
  function testttt() {
   for (let index = 0; index < playerDeck.length; index++) {
    
    const card=document.createElement("img");
    const linkn = playerDeck[index].getLink();
    import(
      /* webpackMode: "lazy-once" */
      `../../img/${linkn}`
    )
    .then(src => card.src = src.default)
    .catch(err => console.error(err));    
    document.getElementById("your-cards").appendChild(card);
    
   }
   const card=document.createElement("img");
   card.src=casinoCard;
   document.getElementById("dealer-cards").appendChild(card);

   for (let index = 1; index < dealerDeck.length; index++) {
    
    const card=document.createElement("img");
    const linkn = dealerDeck[index].getLink();
    import(
      /* webpackMode: "lazy-once" */
      `../../img/${linkn}`
    )
    .then(src => card.src = src.default)
    .catch(err => console.error(err));    
    document.getElementById("dealer-cards").appendChild(card);
    
   }
  }

  const hitButton = document.getElementById("HitButton");
  hitButton.addEventListener("click",function(){
    const cardPlayer = hitACard();
    const card=document.createElement("img");
    const link=cardPlayer.getLink();
    import(
      /* webpackMode: "lazy-once" */
      `../../img/${link}`
    )
    .then(src => card.src = src.default)
    .catch(err => console.error(err));
    // card.src=test;
    console.log(hitAvailable);
    document.getElementById("your-cards").appendChild(card);
    if (hitAvailable==false) {hitButton.disabled=true;}

  });

  const standButton = document.getElementById("StandButton");
  standButton.addEventListener("click",function(){
    const cardDealer = checkStay();
    for (let index = 0; index < cardDealer.length; index++) {
    
      const card=document.createElement("img");
      const linkn = cardDealer[index].getLink();
      import(
        /* webpackMode: "lazy-once" */
        `../../img/${linkn}`
      )
      .then(src => card.src = src.default)
      .catch(err => console.error(err));    
      document.getElementById("dealer-cards").appendChild(card);
      
     }
  });

  
};

export default BlackJackPage;
