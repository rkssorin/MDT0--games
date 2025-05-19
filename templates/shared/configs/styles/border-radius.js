const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('border-radius-xTOXFS')
  /*.withLabel('Border radius')*/
  .withLabel('Abgerundete Ecken')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Sharp corners')*/
      .withLabel('Nein')
      .withCssClass('bsi-corner-sharp'),
    cx.cssClass
      /*.withLabel('Rounded corners')*/
      .withLabel('Ja')
      .withCssClass('bsi-corner-rounded'));