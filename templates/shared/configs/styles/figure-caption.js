const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('figure-caption-zkZLup')
  /*.withLabel('Caption')*/
  .withLabel('Bildunterschrift')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Hide caption')*/
      .withLabel('Bildunterschrift ausblenden')
      .withCssClass('bsi-caption-hide'),
    cx.cssClass
      /*.withLabel('Show caption below image')*/
      .withLabel('Bildunterschrift unterhalb Bild')
      .withCssClass('bsi-caption-below'),
    cx.cssClass
      /*.withLabel('Show caption on image with gray overlay')*/
      .withLabel('Bildunterschrift auf Bild mit grauem Overlay')
      .withCssClass('bsi-caption-overlay'),
    cx.cssClass
      /*.withLabel('Show caption centred on image')*/
      .withLabel('Bildunterschrift zentriert auf Bild')
      .withCssClass('bsi-caption-centred'));