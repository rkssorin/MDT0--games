const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-width-wdOcZR')
  /*.withLabel('Button width')*/
  .withLabel('Button Breite')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Default')*/
      .withLabel('Standard')
      .withCssClass('bsi-btn-width-default'),
    cx.cssClass
      /*.withLabel('Wide')*/
      .withLabel('Über ganze Breite')
      .withCssClass('bsi-btn-width-wide'));