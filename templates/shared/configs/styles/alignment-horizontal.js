const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('alignment-horizontal-5vumfd')
  /*.withLabel('Horizontal Alignment')*/
  .withLabel('Horizontale Ausrichtung')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Left')*/
      .withLabel('Links')
      .withCssClass('bsi-horizontal-align-left'),    
    cx.cssClass
      /*.withLabel('Center')*/
      .withLabel('Mittig')
      .withCssClass('bsi-horizontal-align-center'),
    cx.cssClass
      /*.withLabel('Right')*/
      .withLabel('Rechts')
      .withCssClass('bsi-horizontal-align-right'));