import GamePage from '../Pages/BlackJackPage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import Logout from '../Logout/Logout';
import RegisterPage from '../Pages/RegisterPage';
import ProfilPage from '../Pages/ProfilPage';
import ContactPage from '../Pages/ContactPage';
import RoulettePage  from '../Pages/RoulettePage'
import SlotMachinePage from '../Pages/SlotMachinePage';

const routes = {
  '/': HomePage,
  '/blackJack': GamePage,
  '/roulette':RoulettePage,
  '/login': LoginPage,
  '/logout': Logout,
  '/register':RegisterPage,
  '/profil':ProfilPage,
  '/contact': ContactPage,
  '/slotMachine': SlotMachinePage,
};

export default routes;
