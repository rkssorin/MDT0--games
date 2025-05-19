const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('text-size-h2-Z9Hw4E')
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
      .withCssClass('display-2'));