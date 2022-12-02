import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ProfilPage from '../Pages/ProfilPage';
import ContactPage from '../Pages/ContactPage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/login': LoginPage,
  '/register':RegisterPage,
  '/profil':ProfilPage,
  '/contact': ContactPage,
};

export default routes;
