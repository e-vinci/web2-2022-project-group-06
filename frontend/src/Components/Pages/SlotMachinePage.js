// import Phaser from 'phaser';





const SlotMachinePage = () => {
  const main = document.querySelector('main');
  main.innerHTML =`  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>

  <div id="scores" class="animated bounceIn">
    <h1 >Credits: <value id="textCredits">1000<value></h1>
    <input type="text" id="credits"placeholder="Enter your credits to bet"/>  
  </div>
  <div id="container" class="animated bounceIn">
    <h1 id="result" class="animated bounceInDown">CLICK ON THE BUTTON BELOW</h1>
    <div id="itemContainer">
      <div id="figure1" class="item">1</div>
      <div id="figure2" class="item">2</div>
      <div id="figure3" class="item">3</div>
    </div>
  
    <button id="spin" class="animated bounceInUp" onclick="spin()">SPIN</button>
  </div>
  
  <div id="scores" class="animated bounceIn">
    <h1 >Won: <value id="spinWon">0<value></h1>
    <h1 >Lost: <value id="spinLost">0<value></h1>
    <h1 >Odds: <value id="odds">0<value></h1>
  </div>
  
   `;

};



export default SlotMachinePage;