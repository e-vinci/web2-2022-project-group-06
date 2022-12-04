/* eslint-disable prefer-const */
// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import logo from "../../img/logo.png";


/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
    const navbarLog = `
    <nav class="navbar navbar-expand-lg navbar-red navbar-dark">
    <div class="wrapper">
    </div>
<div class="container-fluid all-show">
  <a class="nav-link" href="#" data-uri="/"> <img src="${logo}" width = "60" heigth = "35" atl ="logo" ></a>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="#" data-uri="/">home</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="#" data-uri="/game">Game</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="#" data-uri="/contact">contact</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="#" data-uri="/login">login</a>
    </li>
  </ul>
</div>
</div>
</nav>
    `;
    navbarWrapper.innerHTML = navbarLog
  };

export default Navbar;
