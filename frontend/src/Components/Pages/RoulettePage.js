/* eslint-disable */
import jQuery from 'jquery';

const RoulettePage = () => {
  const main = document.querySelector('main');
    const roulette = ` 
    <div class='roulette-wrapper'>
  <div class='selector'></div>
  <div class='wheel'></div>
</div>

<div>
  <input placeholder='outcome'>
  <button>
    Spin Wheel
  </button>
</div>
    `;
    main.innerHTML = roulette;
};

$(document).ready(function() {
	//setup multiple rows of colours, can also add and remove while spinning but overall this is easier.
	initWheel();
 
 	$('button').on('click', function(){
		var outcome = parseInt($('input').val());
    spinWheel(outcome);
  });
});

function initWheel(){
	var $wheel = $('.roulette-wrapper .wheel'),
  		row = "";
      
  row += "<div class='row'>";
  row += "  <div class='card red'>1</div>";
  row += "  <div class='card black'>14</div>";
  row += "  <div class='card red'>2</div>";
  row += "  <div class='card black'>13</div>";
  row += "  <div class='card red'>3</div>";
  row += "  <div class='card black'>12</div>";
  row += "  <div class='card red'>4</div>";
  row += "  <div class='card green'>0</div>";
  row += "  <div class='card black'>11</div>";
  row += "  <div class='card red'>5</div>";
  row += "  <div class='card black'>10</div>";
  row += "  <div class='card red'>6</div>";
  row += "  <div class='card black'>9</div>";
  row += "  <div class='card red'>7</div>";
  row += "  <div class='card black'>8</div>";
  row += "</div>";
  
	for(var x = 0; x < 29; x++){
  	$wheel.append(row);
  }
}

export default RoulettePage;