const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('figure-aspect-ratio-4yu1Zh')
  /*.withLabel('Aspect ratio')*/
  .withLabel('Seitenverhältnis')
  .withCssClasses(
    cx.cssClass
      .withLabel('Auto')
      .withCssClass('bsi-aspect-ratio-auto'),
    cx.cssClass
      .withLabel('1:1')
      .withCssClass('bsi-aspect-ratio-1-1'),
    cx.cssClass
      .withLabel('4:3')
      .withCssClass('bsi-aspect-ratio-4-3'),
    cx.cssClass
      .withLabel('3:2')
      .withCssClass('bsi-aspect-ratio-3-2'),
    cx.cssClass
      .withLabel('16:9')
      .withCssClass('bsi-aspect-ratio-16-9'));