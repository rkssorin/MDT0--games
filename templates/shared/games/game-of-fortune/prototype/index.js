const { cx, Icon } = require("@bsi-cx/design-build");
/**
* @param {string} template

* @param {string} elementId
* @param {string} elementLabel

* @param {string} textPartIdTitle
* @param {string} textPartLabelTitle


* @param {string} textPartIdRibbonBox1
* @param {string} textPartLabelRibbonBox1

* @param {string} textPartIdRibbonBox2
* @param {string} textPartLabelRibbonBox2


* @param {string} elementPartIdButtonBox1
* @param {string} elementPartLabelButtonBox1

* @param {string} elementPartIdButtonBox2
* @param {string} elementPartLabelButtonBox2

* @param {string} imagePartIdDesktop
* @param {string} imagePartLabelDesktop

* @param {string} imagePartIdMobile
* @param {string} imagePartLabelMobile

* @param {string} htmlPartIdGvr
* @param {string} htmlPartLabelGvr

* @param {string} htmlPartIdGap
* @param {string} htmlPartLabelGap



* @returns {ContentElement}
*/
module.exports = (
	template = require("../template.twig"),

	elementId = "game-slot31324",
	elementLabel = "Slot Machine",

	textPartIdTitle = "game-title-part-4b0a",
	textPartLabelTitle = "Game title",


	textPartIdRibbonBox1 = "text-part-ribb2329",
	textPartLabelRibbonBox1 = "Text box 1",

	textPartIdRibbonBox2 = "text-part-ribb2329",
	textPartLabelRibbonBox2 = "Text box 2",

	elementPartIdButtonBox1 = "button-part-gmf9674",
	elementPartLabelButtonBox1 = "Button box 1",

	elementPartIdButtonBox2 = "button-part-gmf9674",
	elementPartLabelButtonBox2 = "Button box 2",

	imagePartIdDesktop = "figure-part-image-JoCwpV",
	imagePartLabelDesktop = "Desktop Image",

	imagePartIdMobile = "figure-part-image-JoCwpV",
	imagePartLabelMobile = "Mobile Image",

	htmlPartIdGvr = "html-part-OrXIAg",
	htmlPartLabelGvr = "Game Results",

	htmlPartIdGap = "html-part-OrXIAg",
	htmlPartLabelGap = "Game Already played"

	// textPartIdThanks = "thanks-title-part-4b0a",
	// textPartLabelThanks = "Thank you text",

	// textPartIdRibbonBox3 = "text-part-ribb2329",
	// textPartLabelRibbonBox3 = "Text box 3",

	// textPartIdRibbonBox4 = "text-part-ribb2329",
	// textPartLabelRibbonBox4 = "Text box 4",

	// textPartIdRibbonBox5 = "text-part-ribb2329",
	// textPartLabelRibbonBox5 = "Text box 5",


	// elementPartIdButtonBox3 = "button-part-gmf9674",
	// elementPartLabelButtonBox3 = "Button box 3",

	// elementPartIdButtonBox4 = "button-part-gmf9674",
	// elementPartLabelButtonBox4 = "Button box 4",

	// elementPartIdButtonBox5 = "button-part-gmf9674",
	// elementPartLabelButtonBox5 = "Button box 5",


	// imagePartIdWheenlImg1 = "figure-part-image-JoCwpV",
	// imagePartLabelWheenlImg1 = "Wheel image 1",

	// imagePartIdWheenlImg2 = "figure-part-image-JoCwpV",
	// imagePartLabelWheenlImg2 = "Wheel image 2",

	// imagePartIdWheenlImg3 = "figure-part-image-JoCwpV",
	// imagePartLabelWheenlImg3 = "Wheel image 3",

	// imagePartIdWheenlImg4 = "figure-part-image-JoCwpV",
	// imagePartLabelWheenlImg4 = "Wheel image 4",

	// imagePartIdWheenlImg5 = "figure-part-image-JoCwpV",
	// imagePartLabelWheenlImg5 = "Wheel image 5",


	// textPartIdQuizStart = "title-start-part-4b0a",
	// textPartLabelQuizStart = "Start Title"
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

			cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdTitle).withLabel(textPartLabelTitle),
			// cx.part.plainText.withId(textPartIdThanks).withLabel(textPartLabelThanks),
			// cx.part.plainText.withId(textPartIdQuizStart).withLabel(textPartLabelQuizStart),

			cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdRibbonBox1).withLabel(textPartLabelRibbonBox1),
			cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdRibbonBox2).withLabel(textPartLabelRibbonBox2),
			// cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdRibbonBox3).withLabel(textPartLabelRibbonBox3),
			// cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdRibbonBox4).withLabel(textPartLabelRibbonBox4),
			// cx.part.formattedText.withHtmlEditorConfig(require("../../../configs/editor/full.js")).withId(textPartIdRibbonBox5).withLabel(textPartLabelRibbonBox5),

			cx.part.link.withId(elementPartIdButtonBox1).withLabel(elementPartLabelButtonBox1),
			cx.part.link.withId(elementPartIdButtonBox2).withLabel(elementPartLabelButtonBox2),
			// cx.part.link.withId(elementPartIdButtonBox3).withLabel(elementPartLabelButtonBox3),
			// cx.part.link.withId(elementPartIdButtonBox4).withLabel(elementPartLabelButtonBox4),
			// cx.part.link.withId(elementPartIdButtonBox5).withLabel(elementPartLabelButtonBox5),

			cx.part.image.withId(imagePartIdDesktop).withLabel(imagePartLabelDesktop),
			cx.part.image.withId(imagePartIdMobile).withLabel(imagePartLabelMobile),
			// cx.part.image.withId(imagePartIdWheenlImg1).withLabel(imagePartLabelWheenlImg1),
			// cx.part.image.withId(imagePartIdWheenlImg2).withLabel(imagePartLabelWheenlImg2),
			// cx.part.image.withId(imagePartIdWheenlImg3).withLabel(imagePartLabelWheenlImg3),
			// cx.part.image.withId(imagePartIdWheenlImg4).withLabel(imagePartLabelWheenlImg4),
			// cx.part.image.withId(imagePartIdWheenlImg5).withLabel(imagePartLabelWheenlImg5),

			cx.part.html.withId(htmlPartIdGvr).withLabel(htmlPartLabelGvr),
			cx.part.html.withId(htmlPartIdGap).withLabel(htmlPartLabelGap)
		);






