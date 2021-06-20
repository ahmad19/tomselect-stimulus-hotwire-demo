import { Controller } from "stimulus"
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

  enableTS() {
    new TomSelect("#invoice_customer_id", {
      create: function(input, callback) {
        selectizeCallback = callback;
        myModal = new Modal(document.getElementById('customer-modal'), {
          keyboard: false
        });
        myModal.show();
      }
    });
  }
}
