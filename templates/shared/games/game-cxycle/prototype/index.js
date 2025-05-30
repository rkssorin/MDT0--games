const { cx, Icon } = require("@bsi-cx/design-build");
/**
* @param {string} template
* @param {string} elementId
* @param {string} elementLabel
 
* @param {string} imagePartIdImage1
* @param {string} imagePartLabelImage1
* 
* @param {string} imagePartIdImage2
* @param {string} imagePartLabelImage2
* 
* 
* 
* @param {string} imagePartIdImage3
* @param {string} imagePartLabelImage3
* 
* @param {string} htmlPartLabelGvr
* @param {string} htmlPartLabelGvr

* @param {string} imagePartIdImage4
* @param {string} imagePartLabelImage4
* @param {string} imagePartIdImage44
* @param {string} imagePartLabelImage44
* 

* @param {string} textPartIdWelcome
* @param {string} textPartLabelWelcome
* 
* @param {string} textPartIdBadgeText
* @param {string} textPartLabelBadge
* 
* @param {string} textPartIdIntroTop
* @param {string} textPartLabelIntroTop

* @param {string} textPartIdIntroTopMoble
* @param {string} textPartLabelIntroTopMobile
* 
* @param {string} textPartIdTitleThanks
* @param {string} textPartLabelThanks
* 
* 
* @param {string} textPartIdAnsw1
* @param {string} textPartLabelAnsw1
* 
* @param {string} textPartIdAnsw2
* @param {string} textPartLabelAnsw2
* 
* @param {string} textPartIdAnsw3
* @param {string} textPartLabelAnsw3
* 
* @param {string} textPartIdAnsw4
* @param {string} textPartLabelAnsw4
* 
* @param {string} textPartIdAnsw5
* @param {string} textPartLabelAnsw5
* 
* @param {string} elementPartIdStartButton
* @param {string} elementPartLabelStartButton
* 
* @param {string} elementPartIdButtonAnsw1
* @param {string} elementPartLabelButtonAnsw1
* 
* @param {string} elementPartIdButtonAnsw2
* @param {string} elementPartLabelButtonAnsw2
*
* @param {string} elementPartIdButtonAnsw3
* @param {string} elementPartLabelButtonAnsw3
* 
* @param {string} elementPartIdButtonAnsw4
* @param {string} elementPartLabelButtonAnsw4
* 
* @param {string} elementPartIdButtonAnsw5
* @param {string} elementPartLabelButtonAnsw5
* 
* 
* 
* @param {string} textPartIdStartTitle
* @param {string} textPartLabelStartTitle
* 

* 
* @returns {ContentElement}
*/
module.exports = (
  template = require("../template.twig"),
  elementId = "game-wheelspin11324",
  /*elementLabel = 'Image',*/
  elementLabel = "Game of Spin the wheel",
  // elemets involvet in the construction of the game
  // *********************
  //*******************
  // images wheel
  imagePartIdImage1 = "figure-part-image-JoCwpV",
  imagePartLabelImage1 = "Desktop hero",
  // *****************
  imagePartIdImage2 = "figure-part-image-JoCwpV",
  imagePartLabelImage2 = "Mobile hero",

  // *****************
  imagePartIdImageBulb1 = "figure-part-image-JoCwpV",
  imagePartLabelBulb1 = "Bulb image 1",

  imagePartIdImageBulb2 = "figure-part-image-JoCwpV",
  imagePartLabelBulb2 = "Bulb image 2",
  // *****************
  imagePartIdImageBulb3 = "figure-part-image-JoCwpV",
  imagePartLabelBulb3 = "Bulb image 3",

  imagePartIdImageBulb4 = "figure-part-image-JoCwpV",
  imagePartLabelBulb4 = "Bulb image 4",

  imagePartIdImageBulb5 = "figure-part-image-JoCwpV",
  imagePartLabelBulb5 = "Bulb image 5",

  wheelIndicator = "figure-part-image-JoCwpV",
  wheelIndicatorLabel = "Wheel Indicator image",
  // *****************
  /*htmlPartLabel = 'HTML source code'*/
  htmlPartIdGvr = "html-part-OrXIAg",
  htmlPartLabelGvr = "Game Results",

  htmlPartIdGap = "html-part-OrXIAg",
  htmlPartLabelGap = "Game Already played",
  // ***************** Wielen dank
  textPartIdTitleThanks = "text-part-Fjse59",
  textPartLabelThanks = "Wielen Dank title",
  // *****************

  // *****************
  // text editors for the prizes
  elementPartIdStartButton = "figure-part-image-JoCwpV",
  elementPartLabelStartButton = "Start button image with link",

  // *****************
  textPartIdIntroTop = "text-part-Fjse59",
  textPartLabelIntroTop = "Intro text",

  textPartIdStartTitle = "title-start-part-4b0a",
  textPartLabelStartTitle = "Start Title",

  textPartIdWelcome = "text-part-Fjse59",
  textPartLabelWelcome = "Welcome Text",

  textPartIdAnsw1 = "text-part-Fjse59",
  textPartLabelAnsw1 = "Answer 1",

  textPartIdAnsw2 = "text-part-Fjse59",
  textPartLabelAnsw2 = "Sofortpreis text",

  textPartIdAnsw3 = "text-part-Fjse59",
  textPartLabelAnsw3 = "Sofortpreis text",

  textPartIdAnsw4 = "text-part-Fjse59",
  textPartLabelAnsw4 = "Gewonnen text",

  textPartIdAnsw5 = "text-part-Fjse59",
  textPartLabelAnsw5 = "Gewonnen text",

  // **********************
  elementPartIdButtonAnsw1 = "button-part-0Cq8Xc",
  elementPartLabelButtonAnsw1 = "Button Answer 1",

  elementPartIdButtonAnsw2 = "button-part-0Cq8Xc",
  elementPartLabelButtonAnsw2 = "Button Answer 2",

  elementPartIdButtonAnsw3 = "button-part-0Cq8Xc",
  elementPartLabelButtonAnsw3 = "Button Answer 3",

  elementPartIdButtonAnsw4 = "button-part-0Cq8Xc",
  elementPartLabelButtonAnsw4 = "Button Answer 4",

  elementPartIdButtonAnsw5 = "button-part-0Cq8Xc",
  elementPartLabelButtonAnsw5 = "Button Answer 5"

  // *****************
  // textPartIdTextSmallDescription = "text-part-Fjse59",
  // textPartLabelSmallDescription = "Small text description",
  // *****************
  // *****************

  // buttons the prizes
) =>
  cx.contentElement
    .withFile(template)
    .withElementId(elementId)
    .withLabel(elementLabel)
    .withIcon(Icon.IMAGE)
    .withStyleConfigs()

    .withParts(

      
			cx.part.form
			.withId("form-container-part-track-event")
			.withLabel("Formular Track Event"),

      // cx.part.image.withId(imagePartId).withLabel(imagePartLabel),
      // cx.part.plainText.withId(textPartId).withLabel(textPartLabel),
      cx.part.plainText.withId(textPartIdStartTitle).withLabel(textPartLabelStartTitle),

      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdWelcome).withLabel(textPartLabelWelcome),

      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdAnsw1).withLabel(textPartLabelAnsw1),
      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdAnsw2).withLabel(textPartLabelAnsw2),
      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdAnsw3).withLabel(textPartLabelAnsw3),
      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdAnsw4).withLabel(textPartLabelAnsw4),
      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdAnsw5).withLabel(textPartLabelAnsw5),

      cx.part.link.withId(elementPartIdButtonAnsw1).withLabel(elementPartLabelButtonAnsw1),
      cx.part.link.withId(elementPartIdButtonAnsw2).withLabel(elementPartLabelButtonAnsw2),
      cx.part.link.withId(elementPartIdButtonAnsw3).withLabel(elementPartLabelButtonAnsw3),
      cx.part.link.withId(elementPartIdButtonAnsw4).withLabel(elementPartLabelButtonAnsw4),
      cx.part.link.withId(elementPartIdButtonAnsw5).withLabel(elementPartLabelButtonAnsw5),

      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdIntroTop).withLabel(textPartLabelIntroTop),

      cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdTitleThanks).withLabel(textPartLabelThanks),

      // cx.part.formattedText
      // 	.withHtmlEditorConfig(require("../../../configs/editor/full.js"))
      // 	.withId(textPartIdTextSmallDescription)
      // 	.withLabel(textPartLabelSmallDescription),

      cx.part.image.withId(elementPartIdStartButton).withLabel(elementPartLabelStartButton),
      cx.part.image.withId(imagePartIdImage1).withLabel(imagePartLabelImage1),
      cx.part.image.withId(imagePartIdImage2).withLabel(imagePartLabelImage2),
      cx.part.image.withId(imagePartIdImageBulb1).withLabel(imagePartLabelBulb1),
      cx.part.image.withId(imagePartIdImageBulb2).withLabel(imagePartLabelBulb2),
      cx.part.image.withId(imagePartIdImageBulb3).withLabel(imagePartLabelBulb3),
      cx.part.image.withId(imagePartIdImageBulb4).withLabel(imagePartLabelBulb4),
      cx.part.image.withId(imagePartIdImageBulb5).withLabel(imagePartLabelBulb5),
      cx.part.image.withId(wheelIndicator).withLabel(wheelIndicatorLabel),
      cx.part.html.withId(htmlPartIdGvr).withLabel(htmlPartLabelGvr),
      cx.part.html.withId(htmlPartIdGap).withLabel(htmlPartLabelGap)
    );
