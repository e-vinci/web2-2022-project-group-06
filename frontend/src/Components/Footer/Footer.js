/* eslint-disable prefer-const */
// eslint-disable-next-line no-unused-vars
import logo from "../../img/logo.png";


const Footer = () => {
  const footerWrapper = document.querySelector('#footerWrapper');
    const footerLog = `
        <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div class="col mb-3">
            <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <img src="${logo}" width = "45" heigth = "30" atl ="logo" >
            </a>
            <p class="text-muted">&copy; 2022</p>
        </div>
    
        <div class="col mb-3">
    
        </div>
    
        <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
            </ul>
        </div>
    
        <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Chips purchase</a></li>
            </ul>
        </div>
        </footer>
    </div>
    `;
    footerWrapper.innerHTML = footerLog
  };

export default Footer;

