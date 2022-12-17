import { getAuthenticatedUser } from "../../utils/auths";

const ContactPage = () => {
  const authenticatedUser = getAuthenticatedUser();

  const main = document.querySelector('main');
  main.innerHTML = `
<div class="container-fluid">
  <p>   </p>
      <form class="form-group contact_form">
        <div class="row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" readonly class="form-control-plaintext" id="staticEmail" value=${authenticatedUser.mail}>
          </div>
          <div class="row">
            <label for="contactFormTextArea">Message</label>
            <textarea class="form-control" id="contactFormTextArea" rows="3"></textarea>
          </div>
        </div>
        <div class="row text-center">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  `;
};

export default ContactPage;
