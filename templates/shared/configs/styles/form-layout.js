const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-layout-1tsmut')
  /*.withLabel('Form layout')*/
  .withLabel('Formular Layout')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Card')*/
      .withLabel('Hervorgehoben')
      .withCssClass('bsi-form-card-visible'),
    cx.cssClass
      /*.withLabel('Plain')*/
      .withLabel('Schlicht')
      .withCssClass('bsi-form-card-hide'));