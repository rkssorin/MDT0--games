const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-checkbox-switch-hqxpU2')
  /*.withLabel('Type')*/
  .withLabel('Typ')
  .withCssClasses(
    cx.cssClass
      .withLabel('Checkbox')
      .withCssClass('bsi-form-switch-hide'),
    cx.cssClass
      .withLabel('Switch')
      .withCssClass('form-switch'));