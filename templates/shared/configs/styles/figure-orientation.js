const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('figure-orientation-CSLe1g')
  /*.withLabel('Orientation')*/
  .withLabel('Bildausrichtung')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Landscape')*/
      .withLabel('Querformat')
      .withCssClass('bsi-orientation-landscape'),
    cx.cssClass
      /*.withLabel('Portrait')*/
      .withLabel('Hochformat')
      .withCssClass('bsi-orientation-portrait'));