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
