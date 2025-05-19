const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} dropzoneImageId
 * @param {string} dropzoneContentId
 * @returns {ContentElement}
 */
module.exports = (
	template = require("../template.twig"),
	elementId = "card-crRST4",
	/*elementLabel = 'Highlighted content',*/
	elementLabel = "Hervorgehobener Inhalt",
	dropzoneImageId = "card-dropzone-image-CIqKdf",
	dropzoneContentId = "card-dropzone-content-b19htW"
) =>
	cx.contentElement
		.withFile(template)
		.withElementId(elementId)
		.withLabel(elementLabel)
		.withIcon(Icon.TEXT_WITH_IMAGE)
		.withStyleConfigs(
			require("../../../../configs/styles/fixed-height"),
			require("../../../../configs/styles/image-content-position"),
			require("../../../../configs/styles/image-content-ratio"),
			require("../../../../configs/styles/background-color-hevor"),
			require("../../../../configs/styles/color-gradient"),
			require("../../../../configs/styles/background-opacity"),
			require("../../../../configs/styles/border"),
			require("../../../../configs/styles/border-radius"),
			require("../../../../configs/styles/shadow")
		)
		.withDropzones(cx.dropzone.withDropzone(dropzoneImageId).withAllowedElements(require("../../figure")), cx.dropzone.withDropzone(dropzoneContentId).withAllowedElements(require("../../h1"), require("../../h2"), require("../../h3"), require("../../text"), require("../../button")));
