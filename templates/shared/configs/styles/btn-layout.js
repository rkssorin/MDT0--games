const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-layout-YSdX2N')
  /*.withLabel('Button layout')*/
  .withLabel('Button Layout')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('colored, illed')*/
      .withLabel('Farbig, ausgefüllt')
      .withCssClass('bsi-btn-filled'),
      cx.cssClass
      /*.withLabel('colored, framed')*/
      .withLabel('Farbig, umrandet')
      .withCssClass('bsi-btn-outline'),      
    cx.cssClass
      /*.withLabel('link without border')*/
      .withLabel('Link ohne Umrandung')
      .withCssClass('bsi-btn-link'));