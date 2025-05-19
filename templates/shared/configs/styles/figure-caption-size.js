const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('figure-caption-size-pjhiIU')
  /*.withLabel('Caption font size')*/
  .withLabel('Schriftgrösse der Bildunterschrift')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Small')*/
      .withLabel('Klein')
      .withCssClass('bsi-caption-small'),
    cx.cssClass
      /*.withLabel('Medium')*/
      .withLabel('Medium')
      .withCssClass('bsi-caption-medium'),
    cx.cssClass
      /*.withLabel('Large')*/
      .withLabel('Gross')
      .withCssClass('bsi-caption-large'));