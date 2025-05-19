const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} titlePartId
 * @param {string} titlePartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'webcam-image-upload-wHe4UP',
  elementLabel = 'Bild aufnehmen',
  elementDescription = "Bild mit Kamera aufnehmen (Selfie oder Rückkamera) und hochladen",
  modeAskTitlePartId = "webcam-image-upload-part-plain-text-KVYYMZ",
  modeAskTitlePartLabel = "Kamerazugriff - Titel",
  modeAskDescriptionPartId = "webcam-image-upload-part-plain-text-YLjguq",
  modeAskDescriptionPartLabel = "Kamerazugriff - Beschreibung",
  modeAskButtonCameraPartId = "webcam-image-upload-part-plain-text-YLjguq",
  modeAskButtonCameraPartLabel = "Kamerazugriff - Button 'Zugriff erlauben'",
  modeAskButtonManualPartId = "webcam-image-upload-part-plain-text-Mh7lOL",
  modeAskButtonManualPartLabel = "Kamerazugriff - Button 'Bild Manuell hochladen'",  
  modeManualTitlePartId = "webcam-image-upload-part-plain-text-uFFq2F",
  modeManualTitlePartLabel = "Kamerazugriff - Titel",
  modeManualDescriptionPartId = "webcam-image-upload-part-plain-text-KKc5DW",
  modeManualDescriptionPartLabel = "Kamerazugriff - Beschreibung",  
  formPartId = 'webcam-image-upload-part-form-X98egp',
  formPartLabel = 'Formular',
  fileformFieldPartId = 'webcam-image-upload-part-file-form-field-ZxE3ka',
  fileformFieldPartLabel = 'Dateiupload'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.IMAGE)
  .withStyleConfigs(
    require('../../../../configs/styles/webcam-image-camera'))
  .withParts(
    cx.part.plainText
      .withId(modeAskTitlePartId)
      .withLabel(modeAskTitlePartLabel),
    cx.part.plainText
      .withId(modeAskDescriptionPartId)
      .withLabel(modeAskDescriptionPartLabel),
    cx.part.plainText
      .withId(modeAskButtonCameraPartId)
      .withLabel(modeAskButtonCameraPartLabel),
    cx.part.plainText
      .withId(modeAskButtonManualPartId)
      .withLabel(modeAskButtonManualPartLabel),
    cx.part.plainText
      .withId(modeManualTitlePartId)
      .withLabel(modeManualTitlePartLabel),
    cx.part.plainText
      .withId(modeManualDescriptionPartId)
      .withLabel(modeManualDescriptionPartLabel),                              
    cx.part.form
      .withId(formPartId)
      .withLabel(formPartLabel),
    cx.part.formField
      .withId(fileformFieldPartId)
      .withLabel(fileformFieldPartLabel));