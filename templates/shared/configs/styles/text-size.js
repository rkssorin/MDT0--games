const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('text-size-zvvb3f')
  /*.withLabel('Text size')*/
  .withLabel('Text Grösse')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Regular')*/
      .withLabel('Regulär')
      .withCssClass('bsi-default'),
    cx.cssClass
      /*.withLabel('Small')*/
      .withLabel('Klein')
      .withCssClass('small'),
    cx.cssClass
      /*.withLabel('Lead')*/
      .withLabel('Gross')
      .withCssClass('lead'));