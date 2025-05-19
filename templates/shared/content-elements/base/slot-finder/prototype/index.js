const {cx, Version, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} urlPartId
 * @param {string} urlPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'slot-finder-dZlvGH',
  /*elementLabel = 'Book Appointment',*/
  elementLabel = 'Terminbuchung',
  urlPartId = 'slot-finder-part-url-cDW6yK',
  /*urlPartLabel = 'Timeslots',*/
  urlPartLabel = 'Terminplaner',
  chooseDateTextPartId = 'slot-finder-part-plain-text-rBaSIU',
  /*chooseDateTextPartLabel = 'Choose date - legend'*/
  chooseDateTextPartLabel = "Datum wählen - Legende",
  chooseSlotTextPartId = 'slot-finder-part-plain-text-Zvagh6',
  /*chooseSlotTextPartLabel = 'Choose slot - legend'*/
  chooseSlotTextPartLabel = "Termin wählen - Legende",
  bookSlotTextPartId = 'slot-finder-part-plain-text-8xP6D8',
  /*bookSlotTextPartLabel = 'Confirm date - legend'*/
  bookSlotTextPartLabel = "Termin überprüfen - Legende",
  bookSlotButtonTextPartId = 'slot-finder-part-plain-text-85mYbP',
  /*bookSlotButtonTextPartLabel = 'Book date - button'*/
  bookSlotButtonTextPartLabel = "Termin buchen - Button",  
  noSlotsTextPartId = 'slot-finder-part-plain-text-ZvwVaT',
  /*noSlotsTextPartLabel = 'No slots available - message'*/
  noSlotsTextPartLabel = "Keine Termine vefügbar - Meldung",
  chooseAnotherDayTextPartId = 'slot-finder-part-plain-text-Uysf70',
  /*chooseAnotherDayPartLabel = 'No slots available - message'*/
  chooseAnotherDayTextPartLabel = "Anderen Tag wählen - Meldung",  
) => cx
  .contentElement
  .withFile(template)
  .withMinVersion(Version.CX_23_2)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.COMMUNICATION)
  .withStyleConfigs(
    require('../../../../configs/styles/slot-finder-flow'),
    require('../../../../configs/styles/slot-finder-slot-size'),
    require('../../../../configs/styles/slot-finder-slots-view'))
  .withParts(
    cx.part.urlProvider
      .withId(urlPartId)
      .withLabel(urlPartLabel),
    cx.part.plainText
      .withId(chooseDateTextPartId)
      .withLabel(chooseDateTextPartLabel),
    cx.part.plainText
      .withId(chooseSlotTextPartId)
      .withLabel(chooseSlotTextPartLabel),
    cx.part.plainText
      .withId(bookSlotTextPartId)
      .withLabel(bookSlotTextPartLabel),
      cx.part.plainText
      .withId(bookSlotButtonTextPartId)
      .withLabel(bookSlotButtonTextPartLabel),      
    cx.part.plainText
      .withId(noSlotsTextPartId)
      .withLabel(noSlotsTextPartLabel),
      cx.part.plainText
      .withId(chooseAnotherDayTextPartId)
      .withLabel(chooseAnotherDayTextPartLabel));