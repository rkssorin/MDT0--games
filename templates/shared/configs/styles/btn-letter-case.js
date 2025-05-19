const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-letter-case-ItTYNe')
  /*.withLabel('Letter case')*/
  .withLabel('Text in Grossbuchstaben')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Default')*/
      .withLabel('Nein')
      .withCssClass('bsi-btn-letter-default'),
    cx.cssClass
      /*.withLabel('All uppercase')*/
      .withLabel('Ja')
      .withCssClass('bsi-btn-letter-uppercase'));