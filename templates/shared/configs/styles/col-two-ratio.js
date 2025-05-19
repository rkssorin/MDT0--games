const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-two-ratio-dYkpTf')
  /*.withLabel('Columns width ratio')*/
  .withLabel('Verhältnis der Spaltenbreiten')
  .withCssClasses(
    cx.cssClass
      .withLabel('1 - 1')
      .withCssClass('bsi-ratio-6-6'),
    cx.cssClass
      .withLabel('2/3 - 1/3')
      .withCssClass('bsi-ratio-8-4'),
    cx.cssClass
      .withLabel('1/3 - 2/3')
      .withCssClass('bsi-ratio-4-8'));