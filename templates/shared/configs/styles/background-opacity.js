const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('background-opacity-tE3oU4')
  /*.withLabel('Color opacity')*/
  .withLabel('Farbdeckkraft')
  .withCssClasses(
    cx.cssClass
      .withLabel('10%')
      .withCssClass('bsi-opacity-10'),
    cx.cssClass
      .withLabel('20%')
      .withCssClass('bsi-opacity-20'),
    cx.cssClass
      .withLabel('30%')
      .withCssClass('bsi-opacity-30'),
    cx.cssClass
      .withLabel('40%')
      .withCssClass('bsi-opacity-40'),
    cx.cssClass
      .withLabel('50%')
      .withCssClass('bsi-opacity-50'),
    cx.cssClass
      .withLabel('60%')
      .withCssClass('bsi-opacity-60'),
    cx.cssClass
      .withLabel('70%')
      .withCssClass('bsi-opacity-70'),
    cx.cssClass
      .withLabel('80%')
      .withCssClass('bsi-opacity-80'),
    cx.cssClass
      .withLabel('90%')
      .withCssClass('bsi-opacity-90'),
    cx.cssClass
      .withLabel('100%')
      .withCssClass('bsi-opacity-100'));