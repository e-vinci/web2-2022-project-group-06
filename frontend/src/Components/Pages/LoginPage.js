import logo from "../../img/logo.png";

const LoginPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `	<div class="container-fluid">
		<div class="row main-content bg-success text-center">
			<div class="col-md-4 text-center font-logo">
				<span class="font-logo"></span>
        <img class="login-logo" src="${logo}" alt ="logo" >
			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div class="container-fluid-login">
					<div class="row">
						<h2>Log In</h2>
					</div>
					<div class="row">
						<form control="" class="form-group">
							<div class="row">
								<input type="text" name="username" id="username" class="form__input" placeholder="Username">
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
						<p>Don't have an account? <a href="/register">Register Here</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	`;
  };
  
  export default LoginPage;