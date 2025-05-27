const { cx, Icon } = require("@bsi-cx/design-build");
/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 
 * @param {string} imagePartIdImage1
 * @param {string} imagePartLabelImage1
 * @param {string} imagePartIdImage11
 * @param {string} imagePartLabelImage11
 * @param {string} imagePartIdImage2
 * @param {string} imagePartLabelImage2
 * @param {string} imagePartIdImage22
 * @param {string} imagePartLabelImage22
 * @param {string} imagePartIdImage3
 * @param {string} imagePartLabelImage3
 * @param {string} imagePartIdImage33
 * @param {string} imagePartLabelImage33
 * @param {string} imagePartIdImage4
 * @param {string} imagePartLabelImage4
 * @param {string} imagePartIdImage44
 * @param {string} imagePartLabelImage44
 * 
 * @param {string} textPartIdTrackEventLabel
 * @param {string} textPartLabelTrackEvent


 * 
 * @param {string} textPartIdIntroTop
 * @param {string} textPartLabelIntroTop
 * 
 * @param {string} textPartIdIntroTopDesktop
 * @param {string} textPartLabelIntroTopDesktop
 * 
 * @param {string} textPartIdIntroTopMoble
 * @param {string} textPartLabelIntroTopMobile

 * 
 * @param {string} textPartIdTextPfuiPfui
 * @param {string} textPartLabelPfuiPfui
 * 
 * @param {string} textPartIdTextHuiHui
 * @param {string} textPartLabelHuiHui
 * 
 * @param {string} textPartIdTextVielenDank
 * @param {string} textPartLabelVielenDank
 * 
 * @param {string} elementPartIdButtonReset
 * @param {string} elementPartLabelButtonReset
 * 
 * @param {string} elementPartIdButtonSendToForm
 * @param {string} elementPartLabelButtonSendToForm
 *
 * @param {string} elementPartIdStartButton
 * @param {string} elementPartLabelStartButton
 * 
 * @param {string} textPartIdStartTitle
 * @param {string} textPartLabelStartTitle
 * 
 * @param {string} textPartIdStartText
 * @param {string} 	textPartLabelStartText
 * 
 * @returns {ContentElement}
 */
module.exports = (
  template = require("../template.twig"),
  elementId = "game-gme235425",
  /*elementLabel = 'Image',*/
  elementLabel = "Game of guess the order",
  // elemets involved in the construction of the game
  // *********************
  //*******************
  // images wheel
  imagePartIdImage1 = "figure-part-image-JoCwpV",
  imagePartLabelImage1 = "Image 1",
  imagePartIdImage11 = "figure-part-image-JoCwpV",
  imagePartLabelImage11 = "Image 11",
  // *****************
  imagePartIdImage2 = "figure-part-image-JoCwpV",
  imagePartLabelImage2 = "Image 2",
  imagePartIdImage22 = "figure-part-image-JoCwpV",
  imagePartLabelImage22 = "Image 22",
  // *****************
  imagePartIdImage3 = "figure-part-image-JoCwpV",
  imagePartLabelImage3 = "Image 3",
  imagePartIdImage33 = "figure-part-image-JoCwpV",
  imagePartLabelImage33 = "Image 33",
  // *****************
  imagePartIdImage4 = "figure-part-image-JoCwpV",
  imagePartLabelImage4 = "Image 4",
  imagePartIdImage44 = "figure-part-image-JoCwpV",
  imagePartLabelImage44 = "Image 44",
  // *****************

  // *****************
  // *****************
  // text editors for the prizes
  elementPartIdStartButton = "figure-part-image-JoCwpV",
  elementPartLabelStartButton = "Start button image with link",

  textPartIdStartTitle = "title-start-part-4b0a",
  textPartLabelStartTitle = "Start Title",

  textPartIdStartText = "text-start-part-4b11",
  textPartLabelStartText = "Start text",

  // textPartIdTrackEventLabel = "text-tracker-part-Fjse59",
  // textPartLabelTrackEvent = "Track Event (PLEASE, NEVER EMPTY  «[trackEvent»])",
  

  textPartIdWelcome = "text-part-Fjse59",
  textPartLabelWelcome = "Welcome Text",
  // *****************

  textPartIdIntroTopDesktop = "text-part-Fjse59",
  textPartLabelIntroTopDesktop = "Info text Desktop",

  textPartIdIntroTopMoble = "text-part-Fjse59",
  textPartLabelIntroTopMobile = "Info text Mobile",
  // **********************
  elementPartIdButtonReset = "button-part-0Cq8Xc",
  elementPartLabelButtonReset = "Button Reset",
  // *****************
  // textPartIdTextSmallDescription = "text-part-Fjse59",
  // textPartLabelSmallDescription = "Small text description",
  // *****************
  // *****************

  // buttons the prizes

  // *****************
  elementPartIdButtonSendToForm = "button-part-0Cq8Xc",
  elementPartLabelButtonSendToForm = "Send to form button",

  // ***************** Pfui Pfui
  textPartIdTextPfuiPfui = "text-part-Fjse59",
  textPartLabelPfuiPfui = "Pfui Pfui text",
  // *****************

  // ***************** Hui Hui
  textPartIdTextHuiHui = "text-part-Fjse59",
  textPartLabelHuiHui = "Hui Hui text",
  // ****************

  // ***************** Wielen dank
  textPartIdTextVielenDank = "text-part-Fjse59",
  textPartLabelVielenDank = "Wielen Dank title"
  // *****************
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
      cx.part.plainText
        .withId(textPartIdStartTitle)
        .withLabel(textPartLabelStartTitle),
      cx.part.plainText
        .withId(textPartIdStartText)
        .withLabel(textPartLabelStartText),

	 // cx.part.plainText
     //   .withId(textPartIdTrackEventLabel)
       // .withLabel(textPartLabelTrackEvent),

      cx.part.formattedText
        .withHtmlEditorConfig(require("../../../configs/editor/full.js"))
        .withId(textPartIdWelcome)
        .withLabel(textPartLabelWelcome),
      cx.part.formattedText
        .withHtmlEditorConfig(require("../../../configs/editor/full.js"))
        .withId(textPartIdIntroTopDesktop)
        .withLabel(textPartLabelIntroTopDesktop),
      cx.part.formattedText
        .withHtmlEditorConfig(require("../../../configs/editor/full.js"))
        .withId(textPartIdIntroTopMoble)
        .withLabel(textPartLabelIntroTopMobile),
      cx.part.link
        .withId(elementPartIdButtonReset)
        .withLabel(elementPartLabelButtonReset),
      cx.part.link
        .withId(elementPartIdButtonSendToForm)
        .withLabel(elementPartLabelButtonSendToForm),

      cx.part.formattedText
        .withHtmlEditorConfig(require("../../../configs/editor/full.js"))
        .withId(textPartIdTextPfuiPfui)
        .withLabel(textPartLabelPfuiPfui),

      cx.part.formattedText
        .withHtmlEditorConfig(require("../../../configs/editor/full.js"))
        .withId(textPartIdTextHuiHui)
        .withLabel(textPartLabelHuiHui),

      cx.part.formattedText
        .withHtmlEditorConfig(require("../../../configs/editor/full.js"))
        .withId(textPartIdTextVielenDank)
        .withLabel(textPartLabelVielenDank),

      // cx.part.formattedText
      // 	.withHtmlEditorConfig(require("../../../configs/editor/full.js"))
      // 	.withId(textPartIdTextSmallDescription)
      // 	.withLabel(textPartLabelSmallDescription),

      cx.part.image
        .withId(elementPartIdStartButton)
        .withLabel(elementPartLabelStartButton),
      cx.part.image.withId(imagePartIdImage1).withLabel(imagePartLabelImage1),
      cx.part.image.withId(imagePartIdImage11).withLabel(imagePartLabelImage11),
      cx.part.image.withId(imagePartIdImage2).withLabel(imagePartLabelImage2),
      cx.part.image.withId(imagePartIdImage22).withLabel(imagePartLabelImage22),
      cx.part.image.withId(imagePartIdImage3).withLabel(imagePartLabelImage3),
      cx.part.image.withId(imagePartIdImage33).withLabel(imagePartLabelImage33)
    )
    .withDropzones(
      cx.dropzone
        .withDropzone("game_form_container")
        .withAllowedElements(require("../../form-container-game/index.js"))
    );
