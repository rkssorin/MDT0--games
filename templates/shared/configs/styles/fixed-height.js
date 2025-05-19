const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('fixed-height-d1Z2tp')
  /*.withLabel('Height of element')*/
  .withLabel('Höhe des Elements')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Auto height')*/
      .withLabel('Automatische Höhe')
      .withCssClass('bsi-height-auto'),
    cx.cssClass
      /*.withLabel('Fixed height (150 px)')*/
      .withLabel('Feste Höhe (150 px)')
      .withCssClass('bsi-height-fixed-150px'),
    cx.cssClass
      /*.withLabel('Fixed height (200 px)')*/
      .withLabel('Feste Höhe (200 px)')
      .withCssClass('bsi-height-fixed-200px'),
    cx.cssClass
      /*.withLabel('Fixed height (250 px)')*/
      .withLabel('Feste Höhe (250 px)')
      .withCssClass('bsi-height-fixed-250px'),
    cx.cssClass
      /*.withLabel('Fixed height (300 px)')*/
      .withLabel('Feste Höhe (300 px)')
      .withCssClass('bsi-height-fixed-300px'),
    cx.cssClass
      /*.withLabel('Fixed height (350 px)')*/
      .withLabel('Feste Höhe (350 px)')
      .withCssClass('bsi-height-fixed-350px'),
    cx.cssClass
      /*.withLabel('Fixed height (400 px)')*/
      .withLabel('Feste Höhe (400 px)')
      .withCssClass('bsi-height-fixed-400px'),
    cx.cssClass
      /*.withLabel('Fixed height (450 px)')*/
      .withLabel('Feste Höhe (450 px)')
      .withCssClass('bsi-height-fixed-450px'),
    cx.cssClass
      /*.withLabel('Fixed height (500 px)')*/
      .withLabel('Feste Höhe (500 px)')
      .withCssClass('bsi-height-fixed-500px'));