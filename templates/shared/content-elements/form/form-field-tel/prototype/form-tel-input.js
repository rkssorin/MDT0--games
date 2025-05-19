import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import Alpine from '@alpinejs/csp';

Alpine.data('telInput', () => ({
  rootElement: null,
  inputField: null,
  normalizedValueField: null,
  onlyCountries: '',
  preferredCountries: '',
  errormessageInvalid: '',
  requiredErrorElement: null,
  invalidErrorElement: null,
  labelElement: null,
  labelText: null,
  iti: null,

  init() {
    this.rootElement = this.$root;
    this.inputField = this.$refs.inputField;
    this.requiredErrorElement = this.$refs.requiredErrorField;
    this.invalidErrorElement = this.$refs.invalidErrorField;

    let countryData = window.intlTelInputGlobals.getCountryData();
    countryData.forEach((country) => {
      country.name = country.name.replace(/.+\((.+)\)/, "$1");
    });

    this.onlyCountries = this.rootElement.getElementsByClassName('only-countries')[0].innerText.split(',').map(c => c.trim()).filter(c => !!c);
    this.preferredCountries = this.rootElement.getElementsByClassName('preferred-countries')[0].innerText.split(',').map(c => c.trim()).filter(c => !!c);

    this.errormessageInvalid = this.rootElement.getElementsByClassName('errormessage-invalid')[0].innerText;

    this.initHiddenInput();

    if (this.rootElement.closest('.bsi-form-label-floating')) {
      // If floating label is selected, only show country flag without country code
      this.iti = intlTelInput(this.inputField, {
        onlyCountries: this.onlyCountries,
        preferredCountries: this.preferredCountries,
        countrySearch: false, // disable to be able to use 'preferredCountries'. See https://github.com/jackocnr/intl-tel-input/issues/1504
        utilsScript: require('intl-tel-input/build/js/utils.js'),
        showSelectedDialCode: false
      });

    } else {
      // Otherwise show country flag and country code
      this.iti = intlTelInput(this.inputField, {
        onlyCountries: this.onlyCountries,
        preferredCountries: this.preferredCountries,
        countrySearch: false, // disable to be able to use 'preferredCountries'. See https://github.com/jackocnr/intl-tel-input/issues/1504
        utilsScript: require('intl-tel-input/build/js/utils.js'),
        showSelectedDialCode: true
      });
    }

    this.iti.promise.then(() => {
      this.changeCountry(); // necessary if input is prepopulated
    });

    if (this.rootElement.closest('.bsi-form-label-floating')) {
      this._initFloatingLabel();
    }
  },

  initHiddenInput() {
    this.normalizedValueField = document.createElement('input');
    const inputHolder = this.$refs.hiddenInput;
    if (inputHolder) {
      this.normalizedValueField.setAttribute('type', 'hidden');
      this.normalizedValueField.setAttribute('name', this.inputField.getAttribute('name'));
      this.normalizedValueField.setAttribute('role', 'presentation');
      this.normalizedValueField.setAttribute('hidden', 'true');
      this.normalizedValueField.className = "form-control bsi-form-tel-input-element hidden";
      inputHolder.appendChild(this.normalizedValueField);
      this.inputField.removeAttribute('name');
    }
  },

  validateInput() {
    if (!this.$el.value && this.$el.hasAttribute('required')) {
      this.requiredErrorElement.style.display = "block";
    } else {
      this.requiredErrorElement.style.display = "none";
    }
    this.iti.setNumber(this.iti.getNumber(intlTelInputUtils.numberFormat.E164)); // trigger formatting the number
    this._validate();
  },

  onFocus() {
    if (!this.inputField.value && this.labelElement !== null) {
      this.labelElement.innerText = this.labelText;
    }
  },
  onFocusOut() {
    if (!this.inputField.value && this.labelElement !== null) {
      this.labelElement.innerText = this.inputField.placeholder;
    }
  },

  changeCountry() {
    this.iti.setNumber(this.iti.getNumber(intlTelInputUtils.numberFormat.E164)); // trigger formatting the number
    this._validate();
  },

  _validate() {
    let valid = !this.iti.getNumber() || this.iti.isValidNumber();

    if (valid) {
      this.invalidErrorElement.setAttribute('hidden', 'true');
      this.invalidErrorElement.setAttribute('aria-hidden', 'true');
    } else {
      this.invalidErrorElement.removeAttribute('hidden', 'true');
      this.invalidErrorElement.removeAttribute('aria-hidden', 'true');
    }
    this.inputField.setCustomValidity(valid ? '' : this.errormessageInvalid);

    if (valid) {
      this.normalizedValueField.value = this.iti.getNumber(intlTelInputUtils.numberFormat.E164);
    } else {
      this.normalizedValueField.value = "";
    }
  },

  _initFloatingLabel() {
    this.labelElement = this.rootElement.querySelector('.form-label');
    let itiElement = this.rootElement.querySelector('.iti');
    itiElement.classList.add('form-floating');
    itiElement.append(this.labelElement);

    this.labelText = this.labelElement.innerText;
    this.labelElement.innerText = this.inputField.placeholder;
  },
}));