import { Controller } from "stimulus"
import Rails from '@rails/ujs';
import { Modal } from "bootstrap";
import TomSelect from "tom-select";

let myModal = null;
let selectizeCallback = null;

export default class extends Controller {
  connect() {
    let customerField = document.getElementById('invoice_customer_id');
    if (customerField) {
      this.enableTS();
    }
  }

  disconnect() {
    const myModalEl = document.getElementById('customer-modal');
    myModal.hide();
    const customerForm = document.getElementById("new_customer");
    myModalEl.addEventListener('hidden.bs.modal', function (event) {
      if (selectizeCallback !== null) {
        selectizeCallback();
        selectizeCallback = null;
      }
      customerForm.reset();
      Rails.enableElement(customerForm);
    });
  }

  enableTS() {
    new TomSelect("#invoice_customer_id", {
      create: function(input, callback) {
        selectizeCallback = callback;
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
