const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('icon-color-RlaUth')
  /*.withLabel('Icon color')*/
  .withLabel('Icon Farbe')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Primary color')*/
      .withLabel('Primärfarbe')
      .withCssClass('bsi-icon-color-primary'),
    cx.cssClass
      /*.withLabel('Secondary color')*/
      .withLabel('Sekundärfarbe')
      .withCssClass('bsi-icon-color-secondary'),
    cx.cssClass
      /*.withLabel('Dark')*/
      .withLabel('Dunkel')
      .withCssClass('bsi-icon-color-dark'),
    cx.cssClass
      /*.withLabel('Light')*/
      .withLabel('Hell')
      .withCssClass('bsi-icon-color-light'));