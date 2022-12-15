
const PurchaseChipsPage  = () => {
    const main = document.querySelector('main');
    main.innerHTML =`
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

    <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
    <div class="modal-content">
      You can 
    </div>
    </div>
    </div>
    `;
  
  
  };

  export default PurchaseChipsPage;