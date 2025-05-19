const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('webcam-image-camera-Ej0lFk')
  .withLabel('Bevorzugte Kamera')
  .withCssClasses(
    cx.cssClass
      .withLabel('Frontkamera (Selfie)')
      .withCssClass('bsi-webcam-front'),
    cx.cssClass
      .withLabel('Rückkamera (Umgebung)')
      .withCssClass('bsi-webcam-back'));