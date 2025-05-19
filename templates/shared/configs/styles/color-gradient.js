const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('color-gradient-oDMf9h')
  /*.withLabel('Color gradient')*/
  .withLabel('Farbverlauf')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Hide gradient')*/
      .withLabel('Farbverlauf ausblenden')
      .withCssClass('bsi-gradient-hide'),
    cx.cssClass
      /*.withLabel('Show gradient to bottom')*/
      .withLabel('Farbverlauf nach unten')
      .withCssClass('bsi-gradient-to-bottom'),
    cx.cssClass
      /*.withLabel('Show gradient to top')*/
      .withLabel('Farbverlauf nach oben')
      .withCssClass('bsi-gradient-to-top'),
    cx.cssClass
      /*.withLabel('Show gradient to bottom and top')*/
      .withLabel('Farbverlauf nach unten und oben')
      .withCssClass('bsi-gradient-to-bottom-and-top'));