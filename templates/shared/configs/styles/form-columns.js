const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-columns-sVbGg2')
  /*.withLabel('Number of columns per row')*/
  .withLabel('Anzahl Spalten pro Zeile')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Automatic')*/
      .withLabel('Automatisch')
      .withCssClass('bsi-col-auto'),
    cx.cssClass
      /*.withLabel('2 columns')*/
      .withLabel('2 Spalten')
      .withCssClass('bsi-col-two'),
    cx.cssClass
      /*.withLabel('3 columns')*/
      .withLabel('3 Spalten')
      .withCssClass('bsi-col-three'),
    cx.cssClass
      /*.withLabel('4 columns')*/
      .withLabel('4 Spalten')
      .withCssClass('bsi-col-four'));