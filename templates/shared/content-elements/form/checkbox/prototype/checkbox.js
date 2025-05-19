import Alpine from '@alpinejs/csp';

Alpine.data('checkbox', () => ({
  requiredErrorElement: null,

  initRequiredError() {
    this.requiredErrorElement = this.$el;
  },

  validateInput() {
    this.requiredErrorElement.style.display = (this.$el.checked || !this.$el.hasAttribute('required')) ? 'none' : 'block';
  },

}))