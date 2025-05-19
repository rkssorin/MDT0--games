const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('text-size-h3-bkfMOd')
  /*.withLabel('Text size')*/
  .withLabel('Text Grösse')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Regular')*/
      .withLabel('Regulär')
      .withCssClass('bsi-default'),
    cx.cssClass
      /*.withLabel('Large')*/
      .withLabel('Gross')
      .withCssClass('display-3'));