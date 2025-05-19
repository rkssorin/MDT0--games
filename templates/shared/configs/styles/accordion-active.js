const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('accordion-active-nnrTAT')
  .withLabel('Beim Laden')
  .withCssClasses(
    cx.cssClass
      .withLabel('Geschlossen')
      .withCssClass('inactive'),
    cx.cssClass
      .withLabel('Offen')
      .withCssClass('active'));