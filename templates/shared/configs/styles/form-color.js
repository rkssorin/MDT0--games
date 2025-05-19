const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-color-sBgs6f')
  /*.withLabel('Form color')*/
  .withLabel('Formular Farbe')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Primary color')*/
      .withLabel('Primärfarbe')
      .withCssClass('bsi-form-color-primary'),
    cx.cssClass
      /*.withLabel('Secondary color')*/
      .withLabel('Sekundärfarbe')
      .withCssClass('bsi-form-color-secondary'));