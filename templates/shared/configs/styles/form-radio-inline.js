const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-radio-inline-1B0AKp')
  /*.withLabel('Alignment')*/
  .withLabel('Ausrichtung der Radiobuttons')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Radio buttons below each other')*/
      .withLabel('Untereinander')
      .withCssClass('bsi-radio-block'),
    cx.cssClass
      /*.withLabel('Radio buttons next to each other')*/
      .withLabel('Nebeneinander')
      .withCssClass('bsi-radio-inline'));