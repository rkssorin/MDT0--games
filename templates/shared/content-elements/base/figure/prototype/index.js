const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} imagePartId
 * @param {string} imagePartLabel
 * @param {string} textPartId
 * @param {string} textPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'figure-DWEfdD',
  /*elementLabel = 'Image',*/
  elementLabel = 'Bild',
  imagePartId = 'figure-part-image-JoCwpV',
  /*imagePartLabel = 'Image',*/
  imagePartLabel = 'Bild',
  textPartId = 'figure-part-text-Xbhmjk',
  /*textPartLabel = 'Caption'*/
  textPartLabel = 'Bildunterschrift'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.IMAGE)
  .withStyleConfigs(
    require('../../../../configs/styles/figure-caption'),
    require('../../../../configs/styles/figure-caption-size'),
    require('../../../../configs/styles/figure-orientation'),
    require('../../../../configs/styles/figure-aspect-ratio'),
    require('../../../../configs/styles/figure-shape'),
    require('../../../../configs/styles/overlay-color'),
    require('../../../../configs/styles/overlay-opacity'),
    require('../../../../configs/styles/hover-effect'))
  .withParts(
    cx.part.image
      .withId(imagePartId)
      .withLabel(imagePartLabel),
    cx.part.plainText
      .withId(textPartId)
      .withLabel(textPartLabel));