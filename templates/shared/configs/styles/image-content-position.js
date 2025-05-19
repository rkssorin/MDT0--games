const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('image-content-position-OHyiqs')
  /*.withLabel('Position of image')*/
  .withLabel('Position des Bildes')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Top')*/
      .withLabel('Oben')
      .withCssClass('bsi-image-top'),
    cx.cssClass
      /*.withLabel('Bottom')*/
      .withLabel('Unten')
      .withCssClass('bsi-image-bottom'),
    cx.cssClass
      /*.withLabel('Left')*/
      .withLabel('Links')
      .withCssClass('bsi-image-left'),
    cx.cssClass
      /*.withLabel('Right')*/
      .withLabel('Rechts')
      .withCssClass('bsi-image-right'));