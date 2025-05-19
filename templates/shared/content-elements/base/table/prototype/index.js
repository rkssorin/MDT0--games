const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} partId
 * @param {string} partLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'table-FuXKu7',
  /*elementLabel = 'Table',*/
  elementLabel = 'Tabelle',
  partId = 'table-part-STrydn',
  /*partLabel = 'Table'*/
  partLabel = 'Tabelle'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TABLE)
  .withStyleConfigs(
    require('../../../../configs/styles/table-color'),
    require('../../../../configs/styles/shadow'),
    require('../../../../configs/styles/border'))
  .withParts(
    cx.part.table
      .withId(partId)
      .withLabel(partLabel));