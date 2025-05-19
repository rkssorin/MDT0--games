const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} htmlPartId
 * @param {string} htmlPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'html-VN5KXz',
  elementLabel = 'HTML',
  htmlPartId = 'html-part-OrXIAg',
  /*htmlPartLabel = 'HTML source code'*/
  htmlPartLabel = 'HTML-Quellcode'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withParts(
    cx.part.html
      .withId(htmlPartId)
      .withLabel(htmlPartLabel));