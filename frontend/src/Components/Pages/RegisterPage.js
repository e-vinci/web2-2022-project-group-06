import logo from '../../img/logo.png';

const RegisterPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `	<div class="container-fluid">
		<div class="row main-content bg-success text-center">
			<div class="col-md-4 text-center font-logo">
				<span class="font-logo"></span>
        		<img class="login-logo" src="${logo}" alt ="logo" >
			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div class="container-fluid">
					<div class="row">
						<h2>Register</h2>
					</div>
					<div class="row">
						<form control="" class="form-group">
							<div class="row">
								<input type="text" name="username" id="username" class="form__input" placeholder="Username">
							</div>
                            <div class="row">
								<!-- <span class="fa fa-lock"></span> -->
								<input type="name" name="name" id="name" class="form__input" placeholder="Name">
							</div>
                            <div class="row">
                            <!-- <span class="fa fa-lock"></span> -->
                            <input type="firstname" name="firstname" id="firstname" class="form__input" placeholder="FirstName">
                        </div>
                        <div class="row">
                        <!-- <span class="fa fa-lock"></span> -->
                        <input type="mail" name="mail" id="mail" class="form__input" placeholder="Mail">
                    </div>
					<div class="row">
								<!-- <span class="fa fa-lock"></span> -->
								<input type="yearBithday" name="yearBithday" id="yearBithday" class="form__input" placeholder="year of your bithday">
							</div>
							<div class="row">
								<!-- <span class="fa fa-lock"></span> -->
								<input type="password" name="password" id="password" class="form__input" placeholder="Password">
							</div>
							<div class="row">
								<input type="submit" value="Submit" class="btn">
							</div>
						</form>
					</div>
					<div class="row">
						<p> I have an account <a href="/login">Login Here</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	`;
};

/* eslint-disable */

async function register() {
  
	const registerBtn = document.getElementById('btn');
  
	registerBtn.addEventListener('click', async () => {
	  const username = document.querySelector('#username').value;
	  const password = document.querySelector('#password').value;
	  const name = document.querySelector('#name').value;
	  const firstname = document.querySelector('#firstname').value;
	  const mail = document.querySelector('#mail').value;
	  const yearBithday = document.querySelector('#yearBithday').value;
	  const response = await fetch('/api/auths/register', {
		method: 'POST',
		body: JSON.stringify({
		  username,
		  password,
		  name,
		  firstname,
		  mail,
		  yearBithday,
		}),
		headers: {
		  'Content-Type': 'application/json',
		},
	  });
  
	  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  
	  window.location.reload();
	});
  }

export default RegisterPage;

import { getRememberMe, setAuthenticatedUser, setRememberMe } from '../../utils/auths';
import { clearPage, renderPageTitle } from '../../utils/render';
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';

const RegisterPage = () => {
  clearPage();
  renderPageTitle('Register');
  renderRegisterForm();
};

function renderRegisterForm() {
  const main = document.querySelector('main');
  const container = document.createElement('div');
  container.className = 'container-fluid';

  const form = document.createElement('form');
  form.className = 'form-group';

  const username = document.createElement('input');
  username.type = 'text';
  username.id = 'username';
  username.placeholder = 'username';
  username.required = true;
  username.className = 'form__input';

  const lastname = document.createElement('input');
  lastname.type = 'text';
  lastname.id = 'lastname';
  lastname.placeholder = 'lastname';
  lastname.required = true;
  lastname.className = 'form__input';

  const firstname = document.createElement('input');
  firstname.type = 'text';
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
  yearBirthday.type = 'number';
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

  form.appendChild(username);
  form.appendChild(password);
  form.appendChild(formCheckWrapper);
  form.appendChild(submit);
  main.appendChild(form);
  form.addEventListener('submit', onRegister);
}

function onCheckboxClicked(e) {
  setRememberMe(e.target.checked);
}

async function onRegister(e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('/api/auths/register', options);

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const authenticatedUser = await response.json();

  console.log('Newly registered & authenticated user : ', authenticatedUser);

  setAuthenticatedUser(authenticatedUser);

  Navbar();

  Navigate('/');
}

export default RegisterPage;