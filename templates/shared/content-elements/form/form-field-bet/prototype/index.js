const { cx, Icon } = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @param {string} elementPartId2
 * @param {string} elementPartLabel2
 * @param {string} formTextPartId
 * @param {string} formTextPartLabel
 * @param {string} errorRequiredPartId
 * @param {string} errorRequiredPartLabel
 * @param {string} errorInvalidPartId
 * @param {string} errorInvalidPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'form-field-betnumber',
  elementLabel = 'Tipp spiel item',
  elementDescription = 'Tipp spiel item',
  elementPartId = 'form-field-part-bet345',
  elementPartLabel = 'Home team',

  elementPartId2 = 'form-field-part-bet346',
  elementPartLabel2 = 'Visitors team',


  formTextPartId = 'form-field-part-text-T9yfhp',
  formTextPartLabel = 'Info Text',
  errorRequiredPartId = 'form-field-part-error-required-904DIx',
  errorRequiredPartLabel = 'Fehlermeldung bei leerem Pflichtfeld',
  errorInvalidPartId = 'form-field-part-error-invalid-5g1mUc',
  errorInvalidPartLabel = 'Fehlermeldung bei ungültiger Eingabe',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.FORMFIELD)
  .withParts(
    cx.part.formField
      .withId(elementPartId)
      .withLabel(elementPartLabel),
    cx.part.formField
      .withId(elementPartId2)
      .withLabel(elementPartLabel2),
    cx.part.plainText
      .withId(formTextPartId)
      .withLabel(formTextPartLabel),
    cx.part.plainText
      .withId(errorRequiredPartId)
      .withLabel(errorRequiredPartLabel),
    cx.part.plainText
      .withId(errorInvalidPartId)
      .withLabel(errorInvalidPartLabel));