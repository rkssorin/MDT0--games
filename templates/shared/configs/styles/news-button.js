const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('news-button-2vFF8z')
  /*.withLabel('Read-more button')*/
  .withLabel('Weitere-Infos Button')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Show button')*/
      .withLabel('Button einblenden')
      .withCssClass('bsi-news-btn-visible'),
    cx.cssClass
      /*.withLabel('Hide button')*/
      .withLabel('Button ausblenden')
      .withCssClass('bsi-news-btn-hide'));