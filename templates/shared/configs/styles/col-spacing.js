const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-spacing-k4h6OP')
  /*.withLabel('Spacing')*/
  .withLabel('Äussere Abstände')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Show outer spacing (recommended for fixed width)')*/
      .withLabel('Äussere Abstände anzeigen (empfohlen bei fester Breite)')
      .withCssClass('bsi-space-around-visible'),
    cx.cssClass
      /*.withLabel('Hide outer spacing (recommended for full width and columns within columns)')*/
      .withLabel('Äussere Abstände ausblenden (empfohlen für volle Breite und Spalten innerhalb von Spalten)')
      .withCssClass('bsi-space-around-hide'));