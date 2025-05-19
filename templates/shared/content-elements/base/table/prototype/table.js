import Alpine from '@alpinejs/csp';

Alpine.data('tableElement', () => ({

  // Set header text to td:before for reverse table on mobile screens
  setHeaderTableMobile() {
    const table = this.$el;
    
    let header = table.getElementsByTagName('th');
    let data = table.getElementsByTagName('td');

    for (let i = 0; i < header.length; ++i) {
      let counter = 0;
      let multiplier = 0;
      for (let j = 0; j < data.length; ++j) {
        if (counter === header.length) {
          counter = 0;
          ++multiplier;
        }
        if ((j - multiplier * header.length) === i) {
          data[j].setAttribute('data-header', header[i].textContent);
        }
        ++counter;
      }
    }
  },
}))