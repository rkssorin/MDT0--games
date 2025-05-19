import Alpine from '@alpinejs/csp';

Alpine.data('accordionElement', () => ({
    root: null,
    accordionHeader: null,

    initAccordion() {
        this.root = this.$root;
        this.accordionHeader = this.$el;
        if (this.root.classList.contains('active')) {
            this.accordionHeader.removeAttribute('aria-expanded');
            this.accordionHeader.setAttribute('aria-expanded', 'true');
        }
    },

    toggleActive(){
        this.root.classList.toggle('active');
        this.accordionHeader.removeAttribute('aria-expanded');
        if (this.root.classList.contains('active')) {
            this.accordionHeader.setAttribute('aria-expanded', 'true');
        } else {
            this.accordionHeader.setAttribute('aria-expanded', 'false');
        }
    },
}));