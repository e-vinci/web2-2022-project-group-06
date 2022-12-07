/* eslint-disable */
import image1 from './../../img/BlackJack.png';
import image2 from './../../img/Machine.png';
import image3 from './../../img/Roulette.png';
import jQuery from 'jquery';

const Homepage = () => {
  const main = document.querySelector('main');
  const menu = `
  <div class="container">
  <div class="slider">
    <div class="box1">
    <a class="nav-link" aria-current="page" href="/blackJack" data-uri="/blackJack"><img class="ImageMenu" src="${image1}"></a>
    </div>
    <div class="box2">
    <a class="nav-link" aria-current="page" href="/slotMachine" data-uri="/slotMachine"><img class="ImageMenu" src="${image2}"></a>
    </div>
    <div class="box3">
    <a class="nav-link" aria-current="page" href="/roulette" data-uri="/roulette"><img class="ImageMenu" src="${image3}"></a>
    </div>
    <div class="box4">
    <a class="nav-link" aria-current="page" href="/blackJack" data-uri="/blackJack"><img class="ImageMenu" src="${image1}"></a>
    </div>
    <div class="box5">
    <a class="nav-link" aria-current="page" href="/slotMachine" data-uri="/slotMachine"><img class="ImageMenu" src="${image2}"></a>
    </div>
    <div class="box6">
    <a class="nav-link" aria-current="page" href="/roulette" data-uri="/roulette"><img class="ImageMenu" src="${image3}"></a>
    </div>
  </div>
</div>
<div id="test"></div>
  `;
main.innerHTML = menu;
};


/* eslint-disable */
function rotate() {
  var lastChild = $('.slider div:last-child').clone();
  /*$('#test').html(lastChild)*/
  $('.slider div').removeClass('firstSlide')
  $('.slider div:last-child').remove();
  $('.slider').prepend(lastChild)
  $(lastChild).addClass('firstSlide')
}

window.setInterval(function(){
  rotate()
}, 3000);
(jQuery,rotate,window);

export default Homepage;