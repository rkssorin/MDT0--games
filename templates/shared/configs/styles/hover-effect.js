const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('hover-effect-dqTt7x')
  /*.withLabel('Hover effect')*/
  .withLabel('Hover-Effekt')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Disabled')*/
      .withLabel('Deaktiviert')
      .withCssClass('bsi-hover-effect-disabled'),
    cx.cssClass
      /*.withLabel('Zoom in')*/
      .withLabel('Heranzoomen')
      .withCssClass('bsi-hover-effect-zoom-in'));