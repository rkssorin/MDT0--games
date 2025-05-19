import Alpine from '@alpinejs/csp';

Alpine.data('formRadio', () => ({
  root: null,
  requiredErrorElement: null,

  initRequiredError() {
    this.root = this.$root;
    this.requiredErrorElement = this.$el;
  },

  validateInput() {
    let valid = false;
    let radioInputs = this.root.querySelectorAll('input[type="radio"]');
    for (const radioInput of radioInputs) {
      if (radioInput.checked || !radioInput.hasAttribute('required')) {
        valid = true;
        break;
      }
    }
    if (!valid) {
      this.requiredErrorElement.style.display = "block";
    } else {
      this.requiredErrorElement.style.display = "none";
    }
  },

}))