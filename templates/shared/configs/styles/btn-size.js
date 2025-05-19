const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-size-pKDVBL')
  /*.withLabel('Button size')*/
  .withLabel('Button Grösse')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Small')*/
      .withLabel('Klein')
      .withCssClass('bsi-btn-size-sm'),
    cx.cssClass
      /*.withLabel('Medium')*/
      .withLabel('Medium')
      .withCssClass('bsi-btn-size-md'),
    cx.cssClass
      /*.withLabel('Large')*/
      .withLabel('Gross')
      .withCssClass('bsi-btn-size-lg'));