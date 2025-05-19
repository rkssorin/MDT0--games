const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-two-order-vo40Cv')
  /*.withLabel('Swap column order')*/
  .withLabel('Spaltenreihenfolge tauschen')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('No')*/
      .withLabel('Nein')
      .withCssClass('bsi-col-order-default'),
    cx.cssClass
      /*.withLabel('Yes')*/
      .withLabel('Ja')
      .withCssClass('bsi-col-order-swapped'),
    cx.cssClass
      /*.withLabel('Only on desktop devices')*/
      .withLabel('Nur auf Desktop-Geräten')
      .withCssClass('bsi-col-order-swapped-desktop'),
    cx.cssClass
      /*.withLabel('Only on mobile devices')*/
      .withLabel('Nur auf mobilen Geräten')
      .withCssClass('bsi-col-order-swapped-mobile'));