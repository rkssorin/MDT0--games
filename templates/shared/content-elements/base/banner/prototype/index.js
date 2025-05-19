const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} dropzoneId
 * @param {string} imagePartId
 * @param {string} imagePartLabel
 * @returns {ContentElement}
 */
module.exports = (
	template = require("../template.twig"),
	elementId = "banner-8eHkFN",
	elementLabel = "Banner",
	/*elementDescription = 'Image overlaid with content (headings, text, buttons, ...), image height depends on the content',*/
	elementDescription = "Bild überlagert mit Inhalten (Überschriften, Text, Buttons, …), Bildhöhe richtet sich am Inhalt",
	dropzoneId = "banner-dropzone-Hh2fWF",
	imagePartId = "banner-part-MIY0yR",
	imagePartLabel = "Banner"
) =>
	cx.contentElement
		.withFile(template)
		.withElementId(elementId)
		.withLabel(elementLabel)
		.withDescription(elementDescription)
		.withIcon(Icon.IMAGE)
		.withStyleConfigs(require("../../../../configs/styles/col-width"), require("../../../../configs/styles/alignment-horizontal"), require("../../../../configs/styles/alignment-vertical"), require("../../../../configs/styles/overlay-color"), require("../../../../configs/styles/overlay-opacity"))
		.withDropzones(
			cx.dropzone
				.withDropzone(dropzoneId)
				.withAllowedElements(
					require("../../../base/h1"),
					require("../../../base/h2"),
					require("../../../base/h3"),
					require("../../../base/text"),
					require("../../../base/button"),
					require("../../../base/figure"),
					require("../../../base/card"),
					require("../../../base/table"),
					require("../../../base/video"),
					require("../../../base/social-media-share"),
					require("../../../base/social-media-follow"),
					require("../../../base/slot-finder"),
					require("../../../base/chart"),
					require("../../../base/html"),
					require("../../../form/form-container"),
					require("../../../../games/tipp-spiel"),
					require("../../../layout/col-one"),
					require("../../../layout/col-two"),
					require("../../../layout/col-three"),
					require("../../../layout/col-four"),
					require("../../../layout/spacer")
				)
		)
		.withParts(cx.part.image.withId(imagePartId).withLabel(imagePartLabel));
