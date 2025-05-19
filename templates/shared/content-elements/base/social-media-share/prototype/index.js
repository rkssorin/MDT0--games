const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @param {string} labelPartId
 * @param {string} labelPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'social-media-share-u9ppdj',
  /*elementLabel = 'Social media share',*/
  elementLabel = 'Social Media Share',
  elementPartId = 'social-media-share-part-7duJql',
  /*elementPartLabel = 'Social media share',*/
  elementPartLabel = 'Social Media Share',
  labelPartId = 'social-media-share-part-label-gVreZk',
  labelPartLabel = 'Label',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.SOCIAL_SHARE)
  .withStyleConfigs(
    require('../../../../configs/styles/icon-color'),
    require('../../../../configs/styles/icon-size'))
  .withParts(
    cx.part.socialShare
      .withId(elementPartId)
      .withLabel(elementPartLabel),
    cx.part.plainText
      .withId(labelPartId)
      .withLabel(labelPartLabel));