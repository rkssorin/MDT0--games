import Alpine from '@alpinejs/csp';
import { Tooltip } from 'bootstrap';

Alpine.data('formElement', () => ({
  form: null,
  root: null,

  initForm() {
    this.form = this.$el;
    this.root = this.$root;

    if (this.root.classList.contains('bsi-form-label-floating')) {
      for(const floatingElement of this.form.getElementsByClassName('bsi-label-floating-element')) {
        this._initFloatingLabels(floatingElement);
      }
    }

    if (this.root.classList.contains('bsi-form-info-as-tooltip')
        && ['bsi-form-label-top', 'bsi-form-label-left'].some(labelClass => this.root.classList.contains(labelClass))) {
      this.form.querySelectorAll('.bsi-form-element').forEach((formElement) => {
        let infoTextField = formElement.querySelector('.form-text');
        let tooltipIcon = formElement.querySelector('i');
        if (infoTextField && infoTextField.innerText && tooltipIcon) {
          tooltipIcon.classList.add('tooltip-visible');
          tooltipIcon.parentElement.classList.add('contains-tooltip');
          tooltipIcon.setAttribute('title', infoTextField.innerText);
          new Tooltip(tooltipIcon);
        }
      })
    }
  },

  submitForm(e) {
    if (!this.form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      this._validateFormFieldInput();
      this._validateTelInput();
      this._validateRadioInput();
    }
    this.form.classList.add('was-validated');
  },

  _initFloatingLabels(floatingElement) {
    let input = floatingElement.querySelector('.form-control');
    let label = floatingElement.querySelector('.form-label');
    let labelAndInfo = floatingElement.querySelector('.form-label-and-info-text');
    if (!input) {
      input = floatingElement.querySelector('.form-select');
    } else {
      if (input.placeholder.length === 0) {
        if (input.type === "date") {
          label.style.opacity = 1;
          label.style.transform = 'initial';
        } else {
          input.placeholder = 'Placeholder';
        }
      }
    }

    if (!(input.type === "range")) {
      let floatingDiv = document.createElement("div");
      floatingDiv.classList.add('form-floating');
      floatingElement.insertBefore(floatingDiv, labelAndInfo.nextSibling);
      floatingDiv.append(input, label);
    }
  },

  _validateFormFieldInput() {
    let formFieldInputs = this.form.getElementsByClassName('bsi-form-field-element');
    for (const formFieldInput of formFieldInputs) {
      let input = formFieldInput.getElementsByClassName('bsi-form-field-input')[0];
      if (!input.checkValidity() && !input.value) {
        formFieldInput.getElementsByClassName('invalid-feedback')[0].style.display = "block";
      } else {
        formFieldInput.getElementsByClassName('invalid-feedback')[0].style.display = "none";
      }
    }
  },

  _validateTelInput() {
    let telInputs = this.form.getElementsByClassName('bsi-form-tel-input');
    for (const telInput of telInputs) {
      let input = telInput.getElementsByClassName('bsi-form-tel-input-element')[0];
      if (!input.checkValidity() && !input.value) {
        telInput.getElementsByClassName('bsi-tel-input-error-required')[0].style.display = "block";
      } else {
        telInput.getElementsByClassName('bsi-tel-input-error-required')[0].style.display = "none";
      }
    }
  },

  _validateRadioInput() {
    let radioElements = this.form.getElementsByClassName('bsi-form-radio-element');
    let radioValid = false;
    for (const radioElement of radioElements) {
      let radioInputs = radioElement.getElementsByClassName('form-check-input');
      for (const radioInput of radioInputs) {
        if (radioInput.checked || !radioInput.hasAttribute('required')) {
          radioValid = true;
          break;
        }
      }
      if (!radioValid) {
        radioElement.getElementsByClassName('invalid-feedback')[0].style.display = "block";
      } else {
        radioElement.getElementsByClassName('invalid-feedback')[0].style.display = "none";
      }
    }
  },
}))