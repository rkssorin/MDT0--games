const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-alignment-jt2uRS')
  /*.withLabel('Alignment')*/
  .withLabel('Ausrichtung')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Align left')*/
      .withLabel('Linksbündig')
      .withCssClass('bsi-col-align-left'),
    cx.cssClass
      /*.withLabel('Center')*/
      .withLabel('Zentriert')
      .withCssClass('bsi-col-align-center'),
    cx.cssClass
      /*.withLabel('Align right')*/
      .withLabel('Rechtsbündig')
      .withCssClass('bsi-col-align-right'));