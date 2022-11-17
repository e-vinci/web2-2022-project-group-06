import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ProfilPage from '../Pages/ProfilPage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/login': LoginPage,
  '/register':RegisterPage,
  '/profil':ProfilPage,
};

export default routes;
