const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-select-placeholder-eKwxSU')
  /*.withLabel('Placeholder')*/
  .withLabel('Platzhalter')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('First entry is placeholder')*/
      .withLabel('Erster Eintrag ist Platzhalter')
      .withCssClass('bsi-placeholder-defined'),
    cx.cssClass
      /*.withLabel('No placeholder defined')*/
      .withLabel('Kein Platzhalter definiert')
      .withCssClass('bsi-placeholder-not-defined'));