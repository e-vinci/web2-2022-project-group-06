import { getRememberMe, setAuthenticatedUser, setRememberMe } from '../../utils/auths';
import { clearPage, renderPageTitle } from '../../utils/render';
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';
import logo from '../../img/logo.png';
// eslint-disable-next-line import/no-cycle
// import Router from '../Router/Router';

const RegisterPage = () => {
  clearPage();
  renderPageTitle('Register');
  renderRegisterForm();
};

function renderRegisterForm() {
  const main = document.querySelector('main');
  const container = document.createElement('div');
  container.className = 'container-fluid';
  const subContainer = document.createElement('div');
  subContainer.className = 'row main-content bg-success text-center';


  const leftPart = document.createElement('div');
  leftPart.className = 'col-md-4 text-center font-logo';

  const span = document.createElement('span');
  span.className = 'font-logo';

  const image = document.createElement('img');
  image.className = 'login-logo';
  image.src = logo;
  image.alt = 'logo'

  const divTitle = document.createElement('div');
  divTitle.className = 'row';

  const title = document.createElement('h2');
  title.innerText = 'Register';


  const form = document.createElement('form');
  form.className = 'form-group';

  const username = document.createElement('input');
  username.type = 'username';
  username.id = 'username';
  username.placeholder = 'username';
  username.required = true;
  username.className = 'form__input';

  const lastname = document.createElement('input');
  lastname.type = 'lastname';
  lastname.id = 'lastname';
  lastname.placeholder = 'lastname';
  lastname.required = true;
  lastname.className = 'form__input';

  const firstname = document.createElement('input');
  firstname.type = 'firstname';
  firstname.id = 'firstname';
  firstname.placeholder = 'firstname';
  firstname.required = true;
  firstname.className = 'form__input';

  const mail = document.createElement('input');
  mail.type = 'mail';
  mail.id = 'mail';
  mail.placeholder = 'mail';
  mail.required = true;
  mail.className = 'form__input';

  const yearBirthday = document.createElement('input');
  yearBirthday.type = 'yearBirthday';
  yearBirthday.id = 'yearBirthday';
  yearBirthday.placeholder = 'yearBirthday';
  yearBirthday.required = true;
  yearBirthday.className = 'form__input';

  const password = document.createElement('input');
  password.type = 'password';
  password.id = 'password';
  password.required = true;
  password.placeholder = 'password';
  password.className = 'form__input';

  const submit = document.createElement('input');
  submit.value = 'Register';
  submit.type = 'submit';
  submit.className = 'btn';

  const formCheckWrapper = document.createElement('div');
  formCheckWrapper.className = 'mb-3 form-check';

  const rememberme = document.createElement('input');
  rememberme.type = 'checkbox';
  rememberme.className = 'form-check-input';
  rememberme.id = 'rememberme';
  const remembered = getRememberMe();
  rememberme.checked = remembered;
  rememberme.addEventListener('click', onCheckboxClicked);

  const checkLabel = document.createElement('label');
  checkLabel.htmlFor = 'rememberme';
  checkLabel.className = 'form-check-label';
  checkLabel.textContent = 'Remember me';

  formCheckWrapper.appendChild(rememberme);
  formCheckWrapper.appendChild(checkLabel);

  const rightPart = document.createElement('div');
  rightPart.className = 'col-md-8 col-xs-12 col-sm-12 login_form';

  const subtext = document.createElement('div');
  subtext.innerHTML = '<p> I have an account <a href="/login">Login Here</a></p>'

  leftPart.appendChild(span);
  leftPart.appendChild(image);
  form.appendChild(username);
  form.appendChild(lastname);
  form.appendChild(firstname);
  form.appendChild(yearBirthday);
  form.appendChild(mail);
  form.appendChild(password);
  form.appendChild(formCheckWrapper);
  form.appendChild(submit);
  divTitle.appendChild(title);
  rightPart.appendChild(divTitle);
  rightPart.appendChild(form);
  rightPart.appendChild(subtext);
  subContainer.appendChild(leftPart);
  subContainer.appendChild(rightPart);
  container.appendChild(subContainer);
  main.appendChild(container);
  form.addEventListener('submit', onRegister);
}

function onCheckboxClicked(e) {
  setRememberMe(e.target.checked);
}

async function onRegister(e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const lastname = document.querySelector('#lastname').value;
  const firstname = document.querySelector('#firstname').value;
  const yearBithday = document.querySelector('#yearBirthday').value;
  const mail = document.querySelector('#mail').value;
  const password = document.querySelector('#password').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
		username,
		lastname,
		firstname,
		yearBithday,
		mail,
		password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('/api/auths/register', options);

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const authenticatedUser = await response.json();

  setAuthenticatedUser(authenticatedUser);

  Navbar();

  Navigate('/');

  // Router();

}

export default RegisterPage;