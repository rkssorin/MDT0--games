const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('text-weight-P72h9Q')
  /*.withLabel('Weight')*/
  .withLabel('Schriftstärke')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Normal')*/
      .withLabel('Normal')
      .withCssClass('fw-normal'),    
    cx.cssClass
      /*.withLabel('Bold')*/
      .withLabel('Fett')
      .withCssClass('fw-bold'),
    cx.cssClass
      /*.withLabel('Light')*/
      .withLabel('Leicht')
      .withCssClass('fw-light'));