const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('news-background-color-K8UaCf')
  /*.withLabel('Background color')*/
  .withLabel('Hintergrundfarbe')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('White background, grey border')*/
      .withLabel('Weisser Hintergrund, grauer Rahmen')
      .withCssClass('bsi-news-bg-color-white'),
    cx.cssClass
      /*.withLabel('Grey background, no border')*/
      .withLabel('Grauer Hintergrund, ohne Rahmen')
      .withCssClass('bsi-news-bg-color-grey'));