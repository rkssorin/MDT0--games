const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('overlay-color-0qiI5L')
  /*.withLabel('Color of overlay')*/
  .withLabel('Farbiges Overlay')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Hide overlay')*/
      .withLabel('Overlay ausblenden')
      .withCssClass('bsi-overlay-hide'),
    cx.cssClass
      /*.withLabel('Primary color')*/
      .withLabel('Primärfarbe')
      .withCssClass('bsi-overlay-primary-color'),
    cx.cssClass
      /*.withLabel('Secondary color')*/
      .withLabel('Sekundärfarbe')
      .withCssClass('bsi-overlay-secondary-color'),
    cx.cssClass
      /*.withLabel('Dark')*/
      .withLabel('Dunkel')
      .withCssClass('bsi-overlay-dark'),
    cx.cssClass
      /*.withLabel('Light')*/
      .withLabel('Hell')
      .withCssClass('bsi-overlay-light'));