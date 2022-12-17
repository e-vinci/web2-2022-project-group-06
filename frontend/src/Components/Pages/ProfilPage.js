import { getAuthenticatedUser} from '../../utils/auths';

const ProfilPage = () => {
    const authenticatedUser = getAuthenticatedUser();

  const main = document.querySelector('main');
  main.innerHTML = `<div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-img-profil user-profile">
                            <div class="card-block text-center">
                                    <div class="img-profil">
                                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image">
                                    </div>
                                        <p class="box-ecart title-info-user">Username</p>
                                        <h6 class="title-info-user">${authenticatedUser.username}</h6>
                                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                            </div>
                                <div class="col-sm-8">
                                    <div class="card-block">
                                        <h6 class="m-b-20 p-b-5 b-b-default title-info-user">Information</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="box-ecart title-info-user">Email</p>
                                                    <h6 class="text-muted title-info-user">${authenticatedUser.mail}</h6>
                                                    <p class="box-ecart title-info-user">Name</p>
                                                    <h6 class="text-muted title-info-user">${authenticatedUser.lastname}</h6>
                                                    <p class="box-ecart title-info-user">First name</p>
                                                    <h6 class="text-muted title-info-user">${authenticatedUser.firstname}</h6>
                                                    <p class="box-ecart title-info-user">Chips</p>
                                                    <h6 class="text-muted title-info-user">${authenticatedUser.chips}</h6>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
};

export default ProfilPage;
