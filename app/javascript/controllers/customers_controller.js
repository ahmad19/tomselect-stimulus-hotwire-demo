import { Controller } from "stimulus"
import Rails from '@rails/ujs';
import { Modal } from "bootstrap";
import TomSelect from "tom-select";

let myModal = null;

export default class extends Controller {
  static targets = [ 'customerField' ];
  connect() {
    if (this.hasCustomerFieldTarget) {
      this.enableTS();
    }
  }

  disconnect() {
    const myModalEl = document.getElementById('customer-modal');
    myModal.hide();
    const customerForm = document.getElementById("new_customer");
    myModalEl.addEventListener('hidden.bs.modal', function (event) {
      customerForm.reset();
      Rails.enableElement(customerForm);
    });
  }

  enableTS() {
    new TomSelect(this.customerFieldTarget, {
      create: function(input, _callback) {
        myModal = new Modal(document.getElementById('customer-modal'), {
          keyboard: false
        });
        myModal.show();
        const name = document.getElementById('customer_name');
        name.value = input;
      }
    });
  }
}
