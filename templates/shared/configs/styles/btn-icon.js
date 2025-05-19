const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-icon-Fd9wjr')
  /*.withLabel('Button icon')*/
  .withLabel('Button Icon')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Hide icon')*/
      .withLabel('Icon ausblenden')
      .withCssClass('bsi-btn-icon-hide'),
    cx.cssClass
      /*.withLabel('Icon left')*/
      .withLabel('Icon links')
      .withCssClass('bsi-btn-icon-left'),
    cx.cssClass
      /*.withLabel('Icon right')*/
      .withLabel('Icon rechts')
      .withCssClass('bsi-btn-icon-right'));