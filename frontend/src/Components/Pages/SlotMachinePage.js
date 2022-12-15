
import  spin  from "../Game/SlotMachine";

const SlotMachinePage = () => {
  const main = document.querySelector('main');
  main.innerHTML =`<div class="SlotMachine"> 
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>

  <div id="scores" class="animated bounceIn">
    <h1 >Credits: <value id="textCredits">1000<value></h1>
    <input type="text" id="credits" placeholder="Enter your credits to bet"/>  
  </div>
  <div id="container" class="animated bounceIn">
    <h1 id="result" class="animated bounceInDown"><b>Slot Machine</b></h1>
    <div id="itemContainer">
      <div id="figure1" class="itemSM">1</div>
      <div id="figure2" class="itemSM">2</div>
      <div id="figure3" class="itemSM">3</div>
    </div>
  
    <button id="spin" class="animated bounceInUp">SPIN</button>
  </div>
  
  <div id="scores" class="animated bounceIn">
    <h1 >Won: <value id="spinWon">0<value></h1>
    <h1 >Lost: <value id="spinLost">0<value></h1>
    <h1 > Chips Won: <value id="chipsWon">0<value></h1>
  </div>
  
   </div>`;
   
  const spin1 = document.getElementById("spin");
  const figure1 = document.getElementById("figure1");
  const figure2 = document.getElementById("figure2");
  const figure3 = document.getElementById("figure3");
  const result = document.getElementById("result");
  const spinWon = document.getElementById("spinWon");
  const spinLost = document.getElementById("spinLost");
  const textCredits = document.getElementById("textCredits");
  const chipsWon = document.getElementById("chipsWon");

  spin1.addEventListener("click", () => {
    const chips = document.getElementById("credits").value;
    spin(chips, figure1,figure2, figure3, result, spinWon, spinLost, textCredits, chipsWon);
  });



};




export default SlotMachinePage;