import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import './stylesheets/login.css';
import './stylesheets/navbar.css';
import './stylesheets/footer.css';
import './stylesheets/blackjack.css';
import './stylesheets/roulette.css';
import './stylesheets/slotmachine.css';
import './stylesheets/leaderboard.css';

import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Pages/HomePage';
import Footer from './Components/Footer/Footer';
import Router from './Components/Router/Router';

Homepage();
Navbar();

Footer();
Router();