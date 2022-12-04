/* eslint-disable */
import rotate from './../../utils/rotate.js';
import image1 from './../../img/BlackJack.png';
import image2 from './../../img/Machine.png';
import image3 from './../../img/Roulette.png';

const Homepage = () => {
  const main = document.querySelector('main');
  const menu = `
  <div class="container">
  <div class="slider">
  <script src="${rotate}"></script>
    <div class="box1">
    <a class="nav-link" aria-current="page" href="#" data-uri="/blackJack"><img src="${image1}"></a>
    </div>
    <div class="box2">
    <a class="nav-link" aria-current="page" href="#" data-uri="/machine"><img src="${image2}"></a>
    </div>
    <div class="box3">
    <a class="nav-link" aria-current="page" href="#" data-uri="/game"><img src="${image3}"></a>
    </div>
  </div>
</div>
<div id="test"></div>
  `;
main.innerHTML = menu;
};



export default Homepage;