// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import {isAuthenticated } from '../../utils/auths';
import logo from '../../img/logo.png';
// import { options } from '../../../../api/routes/auths';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  renderNavbar();
};

function renderNavbar() {

  const navbarNoLog = `
    <nav class="navbar navbar-expand-lg navbar-red navbar-dark">
      <div class="wrapper"></div>
      <div class="container-fluid all-show">
        <a class="nav-link" aria-current="page" href="#" data-uri="/"><img class="logoImg" src="${logo}" width = "60" heigth = "35" atl ="logo" ></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
  
          <li class="nav-item">
            <button class="dropbtn"><a class="nav-link" aria-current="page" href="#" data-uri="/">Home</a></button>
          </li>

          <li class="nav-item-Log">
            <div class="dropdown">
              <button class="dropbtn">Game</button>
              <div class="dropdown-content">
                <a class="nav-link" aria-current="page" href="#" data-uri="/blackJack">BlackJack</a>
                <a class="nav-link" aria-current="page" href="#" data-uri="/roulette">Roulette</a>
                <a class="nav-link" aria-current="page" href="#" data-uri="/slotMachine">Slot Machine</a>
              </div>
            </div>
          </li>

          <li class="nav-item-Prof">
            <button class="dropbtn"><a class="nav-link" aria-current="page" href="#" data-uri="/profil">Profil</a></button>
          </li>

          <li class="nav-item-Log">
            <button class="dropbtn"><a class="nav-link" aria-current="page" href="#" data-uri="/login">Login</a></button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `;

  const navbarLog = `
    <nav class="navbar navbar-expand-lg navbar-red navbar-dark">
      <div class="wrapper"></div>
      <div class="container-fluid all-show">
        <a class="nav-item nav-link" aria-current="page" href="#" data-uri="/">
          <img class="logoImg" src="${logo}" width = "60" heigth = "35" atl ="logo" >
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
  
          <li class="nav-item">
            <button class="dropbtn"><a class="nav-link" aria-current="page" href="#" data-uri="/">Home</a></button>
          </li>

          <li class="nav-item">
            <div class="dropdown">
              <button class="dropbtn">Game</button>
              <div class="dropdown-content">
                <a class="nav-link" aria-current="page" href="#" data-uri="/blackJack">BlackJack</a>
                <a class="nav-link" aria-current="page" href="#" data-uri="/roulette">Roulette</a>
                <a class="nav-link" aria-current="page" href="#" data-uri="/slotMachine">Slot Machine</a>
              </div>
            </div>
          </li>

          <li class="nav-item-Prof">
            <button class="dropbtn"><a class="nav-link" aria-current="page" href="#" data-uri="/profil">Profil</a></button>
          </li>

          <li class="nav-item-Log">
            <button class="dropbtn"><a class="nav-link" aria-current="page" href="#" data-uri="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `;


    const navbarWrapper = document.querySelector('#navbarWrapper');

    navbarWrapper.innerHTML = isAuthenticated() ? navbarLog : navbarNoLog;

}

export default Navbar;
