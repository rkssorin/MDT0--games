const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('alignment-vertical-PlvhZi')
  /*.withLabel('Vertical Alignment')*/
  .withLabel('Vertikale Ausrichtung')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Start')*/
      .withLabel('Oben')
      .withCssClass('bsi-vertical-align-top'),    
    cx.cssClass
      /*.withLabel('Center')*/
      .withLabel('Mittig')
      .withCssClass('bsi-vertical-align-center'),
    cx.cssClass
      /*.withLabel('End')*/
      .withLabel('Unten')
      .withCssClass('bsi-vertical-align-bottom'));