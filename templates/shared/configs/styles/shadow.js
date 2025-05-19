const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('shadow-mCj6Ti')
  /*.withLabel('Shadow')*/
  .withLabel('Schatten')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Hide shadow')*/
      .withLabel('Schatten ausblenden')
      .withCssClass('bsi-shadow-hide'),
    cx.cssClass
      /*.withLabel('Show shadow')*/
      .withLabel('Schatten einblenden')
      .withCssClass('bsi-shadow-visible'));