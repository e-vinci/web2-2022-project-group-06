// import Phaser from 'phaser';
// import SlotMachine from '../Game/SlotMachine';
import grille from '../../img/grille.jpg'



const SlotMachinePage = () => {
  const main = document.querySelector('main');
  main.innerHTML =` <div class="row">
  <div id="slot_box1">
      <ul id="list">
          <li data-roll="1"><img src="$()"></img></li>
          <li data-roll="2"></li>
          <li data-roll="3"></li>
          <li data-roll="4"></li>
          <li data-roll="5"></li>
          <li data-roll="6"></li>
          <li data-roll="7"></li>
          <li data-roll="8"></li>							
      </ul>
  </div><!-- end slot box -->	

  <div id="slot_box2">
          <ul id="list">
              <li data-roll="1"></li>
              <li data-roll="2"></li>
              <li data-roll="3"></li>
              <li data-roll="4"></li>
              <li data-roll="5"></li>
              <li data-roll="6"></li>
              <li data-roll="7"></li>
              <li data-roll="8"></li>							
          </ul>
    </div><!-- end slot box -->	

    <div id="slot_box3">
      <ul id="list">
          <li data-roll="1"></li>
          <li data-roll="2"></li>
          <li data-roll="3"></li>
          <li data-roll="4"></li>
          <li data-roll="5"></li>
          <li data-roll="6"></li>
          <li data-roll="7"></li>
          <li data-roll="8"></li>							
      </ul>
  </div><!-- end slot box -->	

</div>
<button id="btn_r">next</button>
<div id="symbol_no1"></div>
<div id="symbol_no2"></div> `;

};

export default SlotMachinePage;