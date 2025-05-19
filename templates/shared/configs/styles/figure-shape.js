const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('figure-shape-ma0KAF')
  /*.withLabel('Shape')*/
  .withLabel('Form des Bildes')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Square')*/
      .withLabel('Eckig')
      .withCssClass('bsi-shape-square'),
    cx.cssClass
      /*.withLabel('Rounded')*/
      .withLabel('Abgerundete Ecken')
      .withCssClass('bsi-shape-rounded'),
    cx.cssClass
      /*.withLabel('Circle')*/
      .withLabel('Rund')
      .withCssClass('bsi-shape-circle'),
    cx.cssClass
      .withLabel('Aura 1')
      .withCssClass('bsi-shape-aura-1'),
    cx.cssClass
      .withLabel('Aura 2')
      .withCssClass('bsi-shape-aura-2'),
    cx.cssClass
      .withLabel('Aura 3')
      .withCssClass('bsi-shape-aura-3'));