/* eslint-disable */
import jQuery from 'jquery';

const RoulettePage = () => {
  const main = document.querySelector('main');
    const roulette = ` 
    <div id="roulette">
      <div class="case">
        <div class="green">0</div>
      </div>
      <div class="case">
        <div class="red">1</div>
      </div>
      <div class="case">
        <div class="black">2</div>
      </div>
       <div class="case">
        <div class="red">3</div>
      </div>
      <div class="case">
        <div class="black">4</div>
       </div>
  <div class="case">
  <div class="red">5</div>
  </div>
  <div class="case">
  <div class="black">6</div>
  </div>
  <div class="case">
  <div class="red">7</div>
  </div>
  <div class="case">
  <div class="black">8</div>
  </div>
  <div class="case">
  <div class="red">9</div>
  </div>
  <div class="case">
  <div class="black">10</div>
  </div>
  <div class="case">
  <div class="red">11</div>
  </div>
  <div class="case">
  <div class="black">12</div>
  </div>
  <div class="case">
  <div class="red">13</div>
  </div>
  <div class="case">
  <div class="black">14</div>
  </div>
  <div class="case">
  <div class="red">15</div>
  </div>
  <div class="case">
  <div class="black">16</div>
  </div>
  <div class="case">
  <div class="red">17</div>
  </div>
  <div class="case">
  <div class="black">18</div>
  </div>
  <div class="case">
  <div class="red">19</div>
  </div>
  <div class="case">
  <div class="black">20</div>
  </div>
  <div class="case">
  <div class="red">21</div>
  </div>
  <div class="case">
  <div class="black">22</div>
  </div>
  <div class="case">
  <div class="red">23</div>
  </div>
  <div class="case">
  <div class="black">24</div>
  </div>
  <div class="case">
  <div class="red">25</div>
  </div>
  <div class="case">
  <div class="black">26</div>
  </div>
  <div class="case">
  <div class="red">27</div>
  </div>
  <div class="case">
  <div class="black">28</div>
  </div>
  <div class="case">
  <div class="red">29</div>
  </div>
  <div class="case">
  <div class="black">30</div>
  </div>
  <div class="case">
  <div class="red">31</div>
  </div>
  <div class="case">
  <div class="black">32</div>
  </div>
  <div class="case">
  <div class="red">33</div>
  </div>
  <div class="case">
  <div class="black">34</div>
  </div>
  <div class="case">
  <div class="red">35</div>
  </div>
  <div class="case">
  <div class="black">36</div>
  </div>
  <div class="case">
  <div class="red">37</div>
  </div>
    </div>
    `;
    main.innerHTML = roulette;
};

export default RoulettePage;