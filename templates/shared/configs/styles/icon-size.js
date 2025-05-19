const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('icon-size-SnWsSL')
  /*.withLabel('Icon size')*/
  .withLabel('Icon Grösse')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Small')*/
      .withLabel('Klein')
      .withCssClass('bsi-icon-size-small'),
    cx.cssClass
      /*.withLabel('Medium')*/
      .withLabel('Medium')
      .withCssClass('bsi-icon-size-medium'),
    cx.cssClass
      /*.withLabel('Large')*/
      .withLabel('Gross')
      .withCssClass('bsi-icon-size-large'));