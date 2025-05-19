const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('table-color-xmCwub')
  /*.withLabel('Color')*/
  .withLabel('Farbe')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Primary color')*/
      .withLabel('Primärfarbe')
      .withCssClass('bsi-table-primary'),
    cx.cssClass
      /*.withLabel('Secondary color')*/
      .withLabel('Sekundärfarbe')
      .withCssClass('bsi-table-secondary'),
    cx.cssClass
      /*.withLabel('Dark')*/
      .withLabel('Dunkel')
      .withCssClass('bsi-table-dark'),
    cx.cssClass
      /*.withLabel('Light')*/
      .withLabel('Hell')
      .withCssClass('bsi-table-light'));