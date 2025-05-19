const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} titlePartId
 * @param {string} titlePartLabel
 * @returns {ContentElement}
 */
module.exports = (
	template = require("../template.twig"),
	elementId = "title-h1-piICx1",
	/*elementLabel = 'Heading H1',*/
	elementLabel = "H1 Überschrift",
	titlePartId = "title-h1-part-4D1dKG",
	/*titlePartLabel = 'Heading H1'*/
	titlePartLabel = "H1 Überschrift"
) =>
	cx.contentElement
		.withFile(template)
		.withElementId(elementId)
		.withLabel(elementLabel)
		.withIcon(Icon.TEXT)
		.withStyleConfigs(
			//
			require("../../../../configs/styles/text-color"),
			require("../../../../configs/styles/text-weight"),
			require("../../../../configs/styles/text-size-h1"),
			require("../../../../configs/styles/text-transform-title")
		)
		.withParts(cx.part.plainText.withId(titlePartId).withLabel(titlePartLabel));
