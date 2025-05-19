const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-gap-5SzAwS')
  /*.withLabel('Gap between columns')*/
  .withLabel('Abstände zwischen Spalten')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Show gaps')*/
      .withLabel('Abstände einblenden')
      .withCssClass('bsi-gaps-visible'),
    cx.cssClass
      /*.withLabel('Hide gaps')*/
      .withLabel('Abstände ausblenden')
      .withCssClass('bsi-gaps-hide'));