import Alpine from '@alpinejs/csp';

Alpine.data('newsSnippet', () => ({

  // Set href of button
  setButtonUrl() {
    const cardElement = this.$el;
    let url = '';
    if (cardElement.firstElementChild.firstElementChild) {
      url = cardElement.firstElementChild.firstElementChild.href;
      cardElement.getElementsByClassName("bsi-news-btn")[0].href = url;
    } else {
      cardElement.getElementsByClassName("bsi-news-btn")[0].style.display = "none";
    }
  },
}))