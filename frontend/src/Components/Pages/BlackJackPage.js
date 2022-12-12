/* eslint-disable */
import table from '../../img/table.png';
import casinoCard from '../../img/newCarte.png';
import {hitACard, setBet, checkStay} from '../Game/BlackJack';
import methods from '../Game/BlackJack';
import test from '../../img/Cards/cardHearts2.png';

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
            <li><button id="bet1" type="button" >1</button></li>
            <li><button id="bet5" type="button" >5</button></li>
            <li><button id="bet10" type="button" disabled>10</button></li>
            <li><button id="bet50" type="button" >50</button></li>
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
      <div id="your-cards"></div> 
  </div> 
  `;
  const bet1 = document.getElementById("bet1");
  bet1.addEventListener("click",function() {
    setBet(1);
    const test = document.getElementById("bet");
    test.hidden=true;
    document.getElementById("gameButton").hidden=false;
  });

  const bet5 = document.getElementById("bet5");
  bet5.addEventListener("click",function() {
    setBet(5);
    const test = document.getElementById("bet");
    test.hidden=true;
    document.getElementById("gameButton").hidden=false;
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
  });

  const hitButton = document.getElementById("HitButton");
  hitButton.addEventListener("click",function(){
    const cardPlayer = hitACard();
    const card=document.createElement("img");
    card.src=cardPlayer.getLink();
    document.getElementById("your-cards").appendChild(card);
  });

  const standButton = document.getElementById("StandButton");
  standButton.addEventListener("click",function(){
    checkStay();
  });

  const card=document.createElement("img");
  card.src=test;
  document.getElementById("your-cards").appendChild(card);

};

export default BlackJackPage;
