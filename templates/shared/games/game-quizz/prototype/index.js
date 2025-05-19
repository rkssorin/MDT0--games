const { cx, Icon } = require("@bsi-cx/design-build");
/**
* @param {string} template

* @param {string} elementId
* @param {string} elementLabel

* @param {string} textPartIdQuizStart
* @param {string} textPartLabelQuizStart

* @param {string} smallTextPartIdDescription
* @param {string} smallTextPartLabelDescription

* @param {string} textPartIdstartButtonText
* @param {string} textPartLabelstartButtonText

* @param {string} textPartIdQuizQuestion
* @param {string} textPartLabelQuizQuestion

* @param {string} formfiledPartIdTimeout
* @param {string} formfiledPartLabelTimeout

* @param {string} radioElementPartId
* @param {string} radioElementPartLabel

* @param {string} textTitlePartIdBlueSection
* @param {string} textTitlePartLabelBlueSection

* @param {string} textTitlePartIdBlueSection2
* @param {string} textTitlePartLabelBlueSection2

* @param {string} textTitlePartIdBlueSection3
* @param {string} textTitlePartLabelBlueSection3

* @param {string} textTitlePartIdBlueSection4
* @param {string} textTitlePartLabelBlueSection4

* @param {string} textContentPartIdBlueSection
* @param {string} textContentPartLabelBlueSection

* @param {string} textContentPartIdBlueSection2
* @param {string} textContentPartLabelBlueSection2

* @param {string} textContentPartIdBlueSection3
* @param {string} textContentPartLabelBlueSection3

* @param {string} textContentPartIdBlueSection4
* @param {string} textContentPartLabelBlueSection4

* @param {string} succesImagePartId
* @param {string} succesImagePartLabel

* @param {string} succesImagePartId2
* @param {string} succesImagePartLabel2

* @param {string} succesImagePartId3
* @param {string} succesImagePartLabel3

* @param {string} succesImagePartId4
* @param {string} succesImagePartLabel4

* @param {string} htmlPartIdGvr
* @param {string} htmlPartLabelGvr

* @param {string} htmlPartIdGap
* @param {string} htmlPartLabelGap


//22 strings 
//22 elemente in content
//22 parts

* @returns {ContentElement}
*/
module.exports = (
  template = require("../template.twig"),

  elementId = "game-quiz-game-zOsd2",
  elementLabel = "Quizz Game",

  // elemets involved in the construction of the game
  // *********************

  textPartIdQuizStart = "title-start-part-4b0a",
  textPartLabelQuizStart = "Start Title",

  smallTextPartIdDescription = "text-part-Fjse59",
  smallTextPartLabelDescription = "Small text description",

  textPartIdstartButtonText = "title-start-part-4b0a",
  textPartLabelstartButtonText = "Start Title",

  textPartIdQuizQuestion = "title-start-part-4b0a",
  textPartLabelQuizQuestion = "Quiz Question",

  formfiledPartIdTimeout = "form-field-wuizz",
  formfiledPartLabelTimeout = "Quiz timeout field",

  radioElementPartId = "radio-part-I0iU7X4",
  radioElementPartLabel = "First answer",

  textTitlePartIdBlueSection = "title-start-part-4b0a",
  textTitlePartLabelBlueSection = "Correct answer title",

  textContentPartIdBlueSection = "text-part-Fjse59",
  textContentPartLabelBlueSection = "Correct answer content text",

  succesImagePartId = "figure-part-image-JoCwpV",
  succesImagePartLabel = " Success Image",

  textTitlePartIdBlueSection2 = "title-start-part-4b0a",
  textTitlePartLabelBlueSection2 = "Second correct answer title",

  textContentPartIdBlueSection2 = "text-part-Fjse59",
  textContentPartLabelBlueSection2 = "Second correct answer content text",

  succesImagePartId2 = "figure-part-image-JoCwpV",
  succesImagePartLabel2 = "Second Success Image",

  textTitlePartIdBlueSection3 = "title-start-part-4b0a",
  textTitlePartLabelBlueSection3 = "Third answer title",

  textContentPartIdBlueSection3 = "text-part-Fjse59",
  textContentPartLabelBlueSection3 = "Third answer content text",

  succesImagePartId3 = "figure-part-image-JoCwpV",
  succesImagePartLabel3 = "Third Image",

  textTitlePartIdBlueSection4 = "title-start-part-4b0a",
  textTitlePartLabelBlueSection4 = "Timeout title",

  textContentPartIdBlueSection4 = "text-part-Fjse59",
  textContentPartLabelBlueSection4 = "Timeout content text",

  succesImagePartId4 = "figure-part-image-JoCwpV",
  succesImagePartLabel4 = "Timeout Image",
  // **********************
  //****************************
  /*
	 *

	// images wheel
	imagePartIdImage1 = "figure-part-image-JoCwpV",
	imagePartLabelImage1 = "Desktop hero",
	// *****************

	/*htmlPartLabel = 'HTML source code'*/
  htmlPartIdGvr = "html-part-OrXIAg",
  htmlPartLabelGvr = "Game Results",

  htmlPartIdGap = "html-part-OrXIAg",
  htmlPartLabelGap = "Game Already played"

  // buttons the prizes
) =>
  cx.contentElement
    .withFile(template)
    .withElementId(elementId)
    .withLabel(elementLabel)
    .withIcon(Icon.IMAGE)
    .withStyleConfigs()

    .withParts(
      // cx.part.image.withId(imagePartId).withLabel(imagePartLabel),
      // cx.part.plainText.withId(textPartId).withLabel(textPartLabel),

      cx.part.plainText.withId(textPartIdQuizStart).withLabel(textPartLabelQuizStart),
      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(smallTextPartIdDescription).withLabel(smallTextPartLabelDescription),
      cx.part.plainText.withId(textPartIdstartButtonText).withLabel(textPartLabelstartButtonText),
      cx.part.plainText.withId(textPartIdQuizQuestion).withLabel(textPartLabelQuizQuestion),

      cx.part.formField.withId(formfiledPartIdTimeout).withLabel(formfiledPartLabelTimeout),
      cx.part.formRadio.withId(radioElementPartId).withLabel(radioElementPartLabel),

      cx.part.plainText.withId(textTitlePartIdBlueSection).withLabel(textTitlePartLabelBlueSection),
      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textContentPartIdBlueSection).withLabel(textContentPartLabelBlueSection),

      cx.part.plainText.withId(textTitlePartIdBlueSection2).withLabel(textTitlePartLabelBlueSection2),
      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textContentPartIdBlueSection2).withLabel(textContentPartLabelBlueSection2),

      cx.part.plainText.withId(textTitlePartIdBlueSection3).withLabel(textTitlePartLabelBlueSection3),
      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textContentPartIdBlueSection3).withLabel(textContentPartLabelBlueSection3),

      cx.part.plainText.withId(textTitlePartIdBlueSection4).withLabel(textTitlePartLabelBlueSection4),
      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textContentPartIdBlueSection4).withLabel(textContentPartLabelBlueSection4),

      cx.part.image.withId(succesImagePartId).withLabel(succesImagePartLabel),
      cx.part.image.withId(succesImagePartId2).withLabel(succesImagePartLabel2),
      cx.part.image.withId(succesImagePartId3).withLabel(succesImagePartLabel3),
      cx.part.image.withId(succesImagePartId4).withLabel(succesImagePartLabel4),
      //
      //
      cx.part.html.withId(htmlPartIdGvr).withLabel(htmlPartLabelGvr),
      cx.part.html.withId(htmlPartIdGap).withLabel(htmlPartLabelGap)
    );
