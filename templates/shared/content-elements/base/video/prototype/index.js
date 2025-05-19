const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'video-C4cbKm',
  /*elementLabel = 'YouTube video',*/
  elementLabel = 'YouTube Video',
  elementPartId = 'video-part-loPxhG',
  /*elementPartLabel = 'YouTube video'*/
  elementPartLabel = 'YouTube Video'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.VIDEO)
  .withParts(
    cx.part.video
      .withId(elementPartId)
      .withLabel(elementPartLabel));