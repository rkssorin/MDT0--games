const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-color-eTXeUU')
  /*.withLabel('Button color')*/
  .withLabel('Button Farbe')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Primary color')*/
      .withLabel('Primärfarbe')
      .withCssClass('bsi-btn-color-primary'),
    cx.cssClass
      /*.withLabel('Secondary color')*/
      .withLabel('Sekundärfarbe')
      .withCssClass('bsi-btn-color-secondary'),
    cx.cssClass
      /*.withLabel('Dark')*/
      .withLabel('Dunkel')
      .withCssClass('bsi-btn-color-dark'),
    cx.cssClass
      /*.withLabel('Light')*/
      .withLabel('Hell')
      .withCssClass('bsi-btn-color-light'));