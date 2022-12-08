import table from '../../img/table.png';
import casinoCard from '../../img/newCarte.png';
import hitACard from '../Game/BlackJack';

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
        <form id="form_id">
          <ul>
            <li><button type="button" >1</button></li>
            <li><button type="button" >5</button></li>
            <li><button type="button" disabled>10</button></li>
            <li><button type="button" disabled>50</button></li>
          </ul>
        </form>
          <ul hidden>
            <li><button id="StandButton" type="button" >Stand</button></li>
            <li><button id="HitButton" type="button" >Hit</button></li>
            <li><button id="DoubleButton" type="button" disabled>Button</button></li>
            <li><button id="Split" type="button" disabled>Split</button></li>
          </ul>
        

      </div>
  </div> 
  `;
  const btn1 = document.getElementById('form_id');
  btn1.addEventListener("click", hitACard);
};

export default BlackJackPage;
