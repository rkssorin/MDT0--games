const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-btn-alignment-3244')
  /*.withLabel('Button layout')*/
  .withLabel('Button ausrichtung')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('default')*/
      .withLabel('Linksbündig')
      .withCssClass('bsi-form-btn-left'),
    cx.cssClass
      /*.withLabel('Zentriert')*/
      .withLabel('Zentriert')
      .withCssClass('bsi-form-btn-center'),
    cx.cssClass
      /*.withLabel('Zentriert')*/
      .withLabel('Rechtsbündig')
      .withCssClass('bsi-form-btn-right'));