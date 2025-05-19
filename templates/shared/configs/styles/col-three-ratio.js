const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-three-ratio-koAzWH')
  /*.withLabel('Columns width ratio')*/
  .withLabel('Verhältnis der Spaltenbreiten')
  .withCssClasses(
    cx.cssClass
      .withLabel('1 - 1 - 1')
      .withCssClass('bsi-ratio-4-4-4'),
    cx.cssClass
      .withLabel('1/4 - 1/2 - 1/4')
      .withCssClass('bsi-ratio-3-6-3'));