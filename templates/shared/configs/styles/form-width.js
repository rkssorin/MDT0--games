const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-width-SYWW29')
  /*.withLabel('Form width')*/
  .withLabel('Breite des Formulars')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Wide')*/
      .withLabel('Standard')
      .withCssClass('bsi-form-wide'),
    cx.cssClass
      /*.withLabel('Slim')*/
      .withLabel('Schmal')
      .withCssClass('bsi-form-slim'));