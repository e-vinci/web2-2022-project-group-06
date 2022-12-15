/* eslint-disable */
import{roll,historyRoll,bal} from '../Game/Roulette.js'; 


const RoulettePage = () => {
  const main = document.querySelector('main');
    const roulette = ` 
    <div class='Roulette'>
    <div class="title"><b>Roulette</b></div>
    <p id="msg"></p>
    <div id="his">
      <div id="a0" class="his-h"></div>
      <div id="a1" class="his-h"></div>
      <div id="a2" class="his-h"></div>
      <div id="a3" class="his-h"></div>
      <div id="a4" class="his-h"></div>
      <div id="a5" class="his-h"></div>
      <div id="a6" class="his-h"></div>
      <div id="a7" class="his-h"></div>
      <div id="a8" class="his-h"></div>
    </div>
    <div id="bal"></div>
    <div id="stat"></div>
    <div style="clear: both;"></div>
    <div class="shadow"></div>
    <div class="roll-h">
      <div id="roll">
        <div class="green">0</div>
        <div class="red">1</div>
        <div class="black">2</div>
        <div class="red">3</div>
        <div class="black">4</div>
        <div class="red">5</div>
        <div class="black">6</div>
        <div class="red">7</div>
        <div class="black">8</div>
        <div class="red">9</div>
        <div class="black">10</div>
        <div class="red">11</div>
        <div class="black">12</div>
        <div class="red">13</div>
        <div class="black">14</div>
        <div class="red">15</div>
        <div class="black">16</div>
        <div class="red">17</div>
        <div class="black">18</div>
        <div class="red">19</div>
        <div class="black">20</div>
        <div class="red">21</div>
        <div class="black">22</div>
        <div class="red">23</div>
        <div class="black">24</div>
        <div class="red">25</div>
        <div class="black">26</div>
        <div class="red">27</div>
        <div class="black">28</div>
      </div>
    </div>
    <div class="ticker"></div>
    <input type="number" name="bet" id="bet" />
    <button id="ButtonRed">Red</button>
    <button id="ButtonGreen">Green</button>
    <button id="ButtonBlack">Black</button>
    </div>
    `;
  
    main.innerHTML = roulette;

const buttonRed = document.getElementById('ButtonRed');
buttonRed.addEventListener('click', () => {
  roll('red');
});

const buttonGreen = document.getElementById('ButtonGreen');
buttonGreen.addEventListener('click', () => {
  roll('green');
});

const buttonBlack = document.getElementById('ButtonBlack');
buttonBlack.addEventListener('click', () => {
  roll('black');
});

const his = document.getElementById('his');
his.addEventListener('click', () => {
  historyRoll();
});

const Valeurbal = document.getElementById('bal');
Valeurbal.innerHTML = bal; 



};

export default RoulettePage;