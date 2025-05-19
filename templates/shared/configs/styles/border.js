const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('border-5CbXuX')
  /*.withLabel('Border')*/
  .withLabel('Rahmen')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Hide border')*/
      .withLabel('Rahmen ausblenden')
      .withCssClass('bsi-border-hide'),
    cx.cssClass
      /*.withLabel('Show border')*/
      .withLabel('Rahmen einblenden')
      .withCssClass('bsi-border-visible'));