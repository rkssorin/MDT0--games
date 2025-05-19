const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-btn-layout-jhPPtY')
  /*.withLabel('Button layout')*/
  .withLabel('Button Layout')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Filled')*/
      .withLabel('Farbig ausgefüllt')
      .withCssClass('bsi-form-btn-filled'),
    cx.cssClass
      /*.withLabel('Outline')*/
      .withLabel('Farbig umrandet')
      .withCssClass('bsi-form-btn-outline'));