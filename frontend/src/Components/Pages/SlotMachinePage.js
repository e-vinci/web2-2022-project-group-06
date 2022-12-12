// import Phaser from 'phaser';
// import SlotMachine from '../Game/SlotMachine';
import grille from '../../img/grilleSM.jpg'



const SlotMachinePage = () => {
  const main = document.querySelector('main');
  main.innerHTML =` <div class="row">
  <div id="slot_box1">
      <ul id="list">
          <li data-roll="1"><img src="${grille}" alt"img slot"></img></li>
          <li data-roll="2"><img src="${grille}" alt"img slot"></li>
          <li data-roll="3"><img src="${grille}" alt"img slot"></li>
          <li data-roll="4"><img src="${grille}" alt"img slot"></li>
          <li data-roll="5"><img src="${grille}" alt"img slot"></li>
          <li data-roll="6"><img src="${grille}" alt"img slot"></li>
          <li data-roll="7"><img src="${grille}" alt"img slot"></li>
          <li data-roll="8"><img src="${grille}" alt"img slot"></li>							
      </ul>
  </div><!-- end slot box -->	

  <div id="slot_box2">
          <ul id="list">
              <li data-roll="1"><img src="${grille}" alt"img slot"></li>
              <li data-roll="2"><img src="${grille}" alt"img slot"></li>
              <li data-roll="3"><img src="${grille}" alt"img slot"></li>
              <li data-roll="4"><img src="${grille}" alt"img slot"></li>
              <li data-roll="5"><img src="${grille}" alt"img slot"></li>
              <li data-roll="6"><img src="${grille}" alt"img slot"></li>
              <li data-roll="7"><img src="${grille}" alt"img slot"></li>
              <li data-roll="8"><img src="${grille}" alt"img slot"></li>							
          </ul>
    </div><!-- end slot box -->	

    <div id="slot_box3">
          <ul id="list">
              <li data-roll="1"><img src="${grille}" alt"img slot"></li>
              <li data-roll="2"><img src="${grille}" alt"img slot"></li>
              <li data-roll="3"><img src="${grille}" alt"img slot"></li>
              <li data-roll="4"><img src="${grille}" alt"img slot"></li>
              <li data-roll="5"><img src="${grille}" alt"img slot"></li>
              <li data-roll="6"><img src="${grille}" alt"img slot"></li>
              <li data-roll="7"><img src="${grille}" alt"img slot"></li>
              <li data-roll="8"><img src="${grille}" alt"img slot"></li>							
          </ul>
    </div><!-- end slot box -->		

</div>
<button id="btn_r">next</button>
<div id="symbol_no1"></div>
<div id="symbol_no2"></div> `;

};

export default SlotMachinePage;