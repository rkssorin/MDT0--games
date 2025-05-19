const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-mobile-hFK2uB')
  .withLabel('Spalten auf Mobilgeräten')
  .withCssClasses(
    cx.cssClass
      .withLabel('Untereinander / Umbrechen')
      .withCssClass('bsi-mobile-break'),
    cx.cssClass
      .withLabel('Nebeneinander / Kein Umbruch')
      .withCssClass('bsi-mobile-keep'));