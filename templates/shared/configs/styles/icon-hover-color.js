const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('icon-hover-color-oUrelW')
  /*.withLabel('Icon hover color')*/
  .withLabel('Icon Farbe beim Hovern')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Primary color')*/
      .withLabel('Primärfarbe')
      .withCssClass('bsi-icon-hover-color-primary'),
    cx.cssClass
      /*.withLabel('Secondary color')*/
      .withLabel('Sekundärfarbe')
      .withCssClass('bsi-icon-hover-color-secondary'),
    cx.cssClass
      /*.withLabel('Dark')*/
      .withLabel('Dunkel')
      .withCssClass('bsi-icon-hover-color-dark'),
    cx.cssClass
      /*.withLabel('Light')*/
      .withLabel('Hell')
      .withCssClass('bsi-icon-hover-color-light'));