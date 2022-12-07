// import Phaser from 'phaser';
// import BlackJack from '../Game/BlackJack';


const SlotMachinePage = () => {
  const main = document.querySelector('main');
  main.innerHTML =` <div class="hd">
  <h1>[#########..........In Progress...................] </h1>
  </div>
  <div class="bd">
      <h1>Slot Machine</h1>
      <div class="container">
          <div class="slot-wrapper">
              <div id="slot1" class="slot"></div>
              <div id="slot2" class="slot"></div>
              <div id="slot3" class="slot"></div>
              <div class="clear"></div>
          </div>
          <div id="result"></div>
          <div><button id="control">Start</button></div>
      </div>
  </div> `;

};

export default SlotMachinePage;