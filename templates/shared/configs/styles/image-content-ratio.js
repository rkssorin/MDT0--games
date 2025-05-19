const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('image-content-ratio-lFa6R7')
  /*.withLabel('Image-content ratio')*/
  .withLabel('Verhältnis Bild-Inhalt')
  .withCssClasses(
    cx.cssClass
      .withLabel('1/6 - 5/6')
      .withCssClass('bsi-ratio-2-10'),
    cx.cssClass
      .withLabel('1/4 - 3/4')
      .withCssClass('bsi-ratio-3-9'),
    cx.cssClass
      .withLabel('1/3 - 2/3')
      .withCssClass('bsi-ratio-4-8'),
    cx.cssClass
      .withLabel('5/12 - 7/12')
      .withCssClass('bsi-ratio-5-7'),
    cx.cssClass
      .withLabel('1 - 1')
      .withCssClass('bsi-ratio-6-6'));