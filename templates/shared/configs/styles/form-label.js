const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-label-wJakrq')
  /*.withLabel('Label position')*/
  .withLabel('Label Position')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Top')*/
      .withLabel('Oberhalb')
      .withCssClass('bsi-form-label-top'),
    cx.cssClass
      /*.withLabel('Left')*/
      .withLabel('Links')
      .withCssClass('bsi-form-label-left'),
    cx.cssClass
      /*.withLabel('Floating')*/
      .withLabel('Schwebend')
      .withCssClass('bsi-form-label-floating'),
    cx.cssClass
      /*.withLabel('Hide label')*/
      .withLabel('Label ausblenden')
      .withCssClass('bsi-form-label-hide'));