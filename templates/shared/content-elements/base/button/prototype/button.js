import Alpine from '@alpinejs/csp';

Alpine.data('btnElement', () => ({
  root: null,
  btn: null,
  icon: null,

  initBtn() {
    this.root = this.$root;
    this.btn = this.$el;

    if (this.root.classList.contains('bsi-btn-icon-left') || this.root.classList.contains('bsi-btn-icon-right')) {
      this.icon = document.createElement('i');
      this.icon.classList.add('bi', 'bi-' + this.root.getElementsByClassName('bsi-icon-identifier')[0].innerText);

      if (this.root.classList.contains('bsi-btn-icon-left')) {
        this.btn.insertBefore(this.icon, this.btn.firstChild);
      }
      if (this.root.classList.contains('bsi-btn-icon-right')) {
        this.btn.appendChild(this.icon);
      }
    }
  },
}))