const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-columns-layout-b0H3mr')
  /*.withLabel('Layout of columns')*/
  .withLabel('Anordnung der Spalten')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Default')*/
      .withLabel('Standard')
      .withCssClass('bsi-default-wide'),
    cx.cssClass
      /*.withLabel('First element wide')*/
      .withLabel('Erstes Element breiter')
      .withCssClass('bsi-first-wide'),
    cx.cssClass
      /*.withLabel('Last element wide')*/
      .withLabel('Letztes Element breiter')
      .withCssClass('bsi-last-wide'));