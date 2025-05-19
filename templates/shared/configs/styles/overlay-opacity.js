const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('overlay-opacity-IbPo7m')
  /*.withLabel('Opacity of overlay')*/
  .withLabel('Deckkraft des Overlays')
  .withCssClasses(
    cx.cssClass
      .withLabel('100%')
      .withCssClass('bsi-overlay-opacity-100'),
    cx.cssClass
      .withLabel('90%')
      .withCssClass('bsi-overlay-opacity-90'),
    cx.cssClass
      .withLabel('80%')
      .withCssClass('bsi-overlay-opacity-80'),
    cx.cssClass
      .withLabel('70%')
      .withCssClass('bsi-overlay-opacity-70'),
    cx.cssClass
      .withLabel('60%')
      .withCssClass('bsi-overlay-opacity-60'),
    cx.cssClass
      .withLabel('50%')
      .withCssClass('bsi-overlay-opacity-50'),
    cx.cssClass
      .withLabel('40%')
      .withCssClass('bsi-overlay-opacity-40'),
    cx.cssClass
      .withLabel('30%')
      .withCssClass('bsi-overlay-opacity-30'),
    cx.cssClass
      .withLabel('20%')
      .withCssClass('bsi-overlay-opacity-20'),
    cx.cssClass
      .withLabel('10%')
      .withCssClass('bsi-overlay-opacity-10'),
    cx.cssClass
      .withLabel('0%')
      .withCssClass('bsi-overlay-opacity-0'));